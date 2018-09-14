<?php
	$connect=new mysqli("localhost","root","root","project");
	$data=json_decode(file_get_contents("php://input"));
	$newusername=$data->newusername;
	$newpassword=$data->newpassword;

	$sql="INSERT INTO login(username,password) VALUES ('$newusername','$newpassword')";
	$result=mysqli_query($connect,$sql);
	if(mysqli_num_rows($result)==1){
		echo "inserted Successfully...";
	}
	else{
		echo "not inserted successfully...";
	}



?>