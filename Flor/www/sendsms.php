<?php
$from = '+32460205535';
$to = '+32485362756';
$msg = 'yup';
$response = array();

require_once '../simpleSMS-master/inc/services/twilio.php'; // Loads the library

$account_sid = 'AC3d6c822c0c324e0b0547b554726740ae';
$auth_token = 'fc05cb6ac8e2ad9b7b72605679659166';

$connection = new Services_Twilio($account_sid, $auth_token);

$success = $connection->account->sms_message->create(
    $from,
    $to,
    $msg
);