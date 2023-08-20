<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;
  require 'vendor/autoload.php';

//Load Composer's autoloader


$name = $_POST["name"]
$email = $_POST["email"]
$subject = $_POST["subject"]
$message = $_POST["message"]

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    // $mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
    $mail->Host       = 'ssl://smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->Username   = 'yamanaltayoglu@gmail.com';                     //SMTP username
    $mail->Password   = 'zjyakjehtbjznkns';                               //SMTP password
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('yamanaltayoglu@gmail.com');     //Add a recipient
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //TODO $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->Subject = $subject
    $mail->Body    = $message

    // $mail->isHTML(true  ); //Set email format to HTML
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

