<?php
	$connect=new mysqli("localhost","root","root","tracker");
	$data=json_decode(file_get_contents("php://input"));
	$username=$data->userloginId;
	$password=$data->userloginpass;
	$sql="INSERT INTO studentlogin(studentID,password,count) VALUES ('$username','$password','0')";
	$q=$connect->query($sql);
	if($q){
		echo "insert successfully...";
	}
	else{
		echo "Data not inserted successfully";
	}
?>