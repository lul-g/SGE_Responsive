<?php
    $name = $_POST['name'];
    $company_name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $msg = $_POST['message'];

    $email_from = 'lulsegedgirma10@gmail.com';
    $email_subject = "Test-0";
    $email_bod = "Name: $name.\n".
                "Company Name: $company_name.\n".
                "Email: $email.\n".
                "Phone: $phone.\n".
                "Message: $msg.\n";
    $email_to = 'lulsegedwork@gmail.com';

    $headers = "From: $email_from \r\n";
    $header .= "Reply to: $email \r\n";

    mail($to, $subject, $email_bod, $headers);
    header("Location: index.html");
?>