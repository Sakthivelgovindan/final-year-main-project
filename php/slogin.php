<?php
	$connect=new mysqli("localhost","root","root","tracker");
	$data=json_decode(file_get_contents("php://input"));
	ini_set('display_errors',1);
	ini_set('display_startup_errors',1);
	error_reporting(E_ALL);
	$username=$data->userloginId;
	$password=$data->userloginpass;
	$response=array();
	$sql="SELECT * FROM studentlogin where studentID='$username' AND password='$password' LIMIT 1";
	$result=mysqli_query($connect,$sql);
	$sql1 = "SELECT count FROM studentlogin where studentID='$username' AND password='$password'";
	$result1 = mysqli_query($connect,$sql1);
	$value = mysqli_fetch_object($result1);
	$_SESSION['count'] = $value->count;
	if(mysqli_num_rows($result)==1){
		$value = $_SESSION['count'];
		$response['value'] = $value;
		
	}
	else{
		$response['value'] = undefined;
	}

	$json =json_encode($response);
	echo $json;
?>