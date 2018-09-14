<?php
	$connect=new mysqli("localhost","root","root","tracker");
	$data=json_decode(file_get_contents("php://input"));
	ini_set('display_errors',1);
	ini_set('display_startup_errors',1);
	error_reporting(E_ALL);
	$userID=$data->suserID;
	$regno=$data->sregno;
	$firstname=$data->sfirstname;
	$lastname=$data->slastname;
	$email=$data->semail;
	$department=$data->sdepartment;
	$degree=$data->sdegree;
	$college=$data->scollege;
	$status=$data->sstatus;
	$mobile=$data->smobile;
	$year=$data->syear;
	$sql="INSERT INTO studentdetails (studentID, registerno, firstname , lastname , email , degree , dept , college , mobileno , yearofpassing , states) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
	$stmt = mysqli_prepare($connect,$sql);
	$stmt ->bind_param('sssssssssss',$userID, $regno,$firstname , $lastname , $email , $degree , $department , $college , $mobile , $year , $status);
	$stmt ->execute();

	$sql1 = "UPDATE studentlogin SET count='1' where studentID = ?";
	$stmt = mysqli_prepare($connect,$sql1);
	$stmt ->bind_param('s',$userID);
	$stmt ->execute();
?> 