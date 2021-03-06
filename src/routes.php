<?php

use Slim\Http\Request;
use Slim\Http\Response;
use Firebase\JWT\JWT;
use Slim\App;

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->post('/signup', function (Request $request, Response $response, array $args) {
    $username = $request->getParsedBodyParam('username');
    $password = $request->getParsedBodyParam('password');
    if ($username === NULL || $password === NULL) {
        return $this->response->withJson(['error' => true, 'message' => 'not enough parameters']);  
    }
    $sql = "INSERT INTO users (username, password) VALUES (:username, :password);";
    $stmt = $this->db->prepare($sql);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt->bindParam(':password', $hash, PDO::PARAM_STR);
    $stmt->execute();
    $data = ['message' => 'SUCCESS'];
    return $this->response->withJson($data, 200)->withHeader('Content-Type', 'application/json;charset=utf-8');
});

$app->post('/auth', function (Request $request, Response $response, array $args) {
    $input = $request->getParsedBody();
    $sql = "SELECT * FROM users WHERE username = :username";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("username", $input['username']);
    $sth->execute();
    $user = $sth->fetchObject();

    // verify username.
    if(!$user) {
        $data = ['error' => true, 'message' => 'These credentials do not match our records (1).'];
        return $this->response->withJson($data, 400)->withHeader('Content-Type', 'application/json;charset=utf-8');  
    }

    // verify password.
    if (!password_verify($input['password'],$user->password)) {
        $data = ['error' => true, 'message' => 'These credentials do not match our records (2).'];
        return $this->response->withJson($data, 400)->withHeader('Content-Type', 'application/json;charset=utf-8');  
    }

    $settings = $this->get('settings'); // get settings array.
    $expires = time() + (3 * 60);  // setup expiration data (currently 3 minutes).
    $token = JWT::encode(['id' => $user->id, 'username' => $user->username, 'exp' => $expires], $settings['jwt']['secret'], "HS256");
    $data = ['token' => $token];
    return $this->response->withJson($data, 200)->withHeader('Content-Type', 'application/json;charset=utf-8');
});

$app->group('/api', function(App $app) {
    $app->get('/user',function(Request $request, Response $response, array $args) {
        $payload = $request->getAttribute('decoded_token_data');
        return $this->response->withJson(['payload' => $payload]);
    });
});

// $app->get('/[{name}]', function (Request $request, Response $response, array $args) {
//     // Sample log message
//     $this->logger->info("Slim-Skeleton '/' route");

//     // Render index view
//     return $this->renderer->render($response, 'index.phtml', $args);
// });
