<?php
	$connect=new mysqli("localhost","root","root","tracker");
	$data=json_decode(file_get_contents("php://input"));
	ini_set('display_errors',1);
	ini_set('display_startup_errors',1);
	error_reporting(E_ALL);
	$adminId=$data->aadminId;
	$firstname=$data->afirstname;
	$lastname=$data->alastname;
	$email=$data->aemail;
	$mobile=$data->amobile;
	$college=$data->acollege;
	$status=$data->astatus;
	$designation=$data->adesignation;
	
	$sql="INSERT INTO admindetails (adminID, firstname, lastname , email , designation , college , mobileno , status) VALUES (?,?,?,?,?,?,?,?)";
	$stmt = mysqli_prepare($connect,$sql);
	$stmt ->bind_param('ssssssss',$adminId, $firstname , $lastname , $email , $designation , $college , $mobile , $status);
	$stmt ->execute();

	$sql1 = "UPDATE admin SET count='1' where adminID = ?";
	$stmt = mysqli_prepare($connect,$sql1);
	$stmt ->bind_param('s',$adminId);
	$stmt ->execute();
?> 