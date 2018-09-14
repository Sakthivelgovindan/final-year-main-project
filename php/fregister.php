<?php
	$connect=new mysqli("localhost","root","root","tracker");
	$data=json_decode(file_get_contents("php://input"));
	ini_set('display_errors',1);
	ini_set('display_startup_errors',1);
	error_reporting(E_ALL);
	$facultyId=$data->sfacultyId;
	$firstname=$data->sfirstname;
	$lastname=$data->slastname;
	$email=$data->semail;
	$department=$data->sdepartment;	
	$mobile=$data->smobile;
	$college=$data->scollege;
	$status=$data->sstatus;
	$position=$data->sposition;
	$designation=$data->sdesignation;

	$sql="INSERT INTO facultydetails(facultyID,firstname,lastname,email,designation,college,position,department,mobileno,status) VALUES (?,?,?,?,?,?,?,?,?,?)";
	$stmt = mysqli_prepare($connect,$sql);
	$stmt ->bind_param('ssssssssss',$facultyId,$firstname,$lastname,$email,$designation,$college,$position,$department,$mobile,$status);
	$stmt ->execute();

	$sql1 = "UPDATE facultylogin SET count='1' where staffID = ?";
	$stmt = mysqli_prepare($connect,$sql1);
	$stmt ->bind_param('s',$facultyId);
	$stmt ->execute();
?>