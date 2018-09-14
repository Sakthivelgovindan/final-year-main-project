<?php
	$connect=new mysqli("localhost","root","root","tracker");
	$data=json_decode(file_get_contents("php://input"));
	$username=$data->userloginId;
	$password=$data->userloginpass;
	$sql="INSERT INTO stafflogin(staffID,password) VALUES ('$username','$password')";
	$q=$connect->query($sql);
	if($q){
		echo "insert successfully...";
	}
	else{
		echo "Data not inserted successfully";
	}
?>