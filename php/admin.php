  <?php
	$connect=new mysqli("localhost","root","root","tracker");
	//include('php/connection.php'); 
	$data=json_decode(file_get_contents("php://input"));
	//echo "hello";
	$admin_id=$data->adminloginId;
	$password=$data->adminloginpass;
	$response =array();
		$sql="SELECT * FROM admin where adminID='$admin_id' AND passsword='$password' LIMIT 1";
		$result=mysqli_query($connect,$sql);
		$sql1 = "SELECT count FROM admin where adminID='$admin_id' AND passsword='$password' LIMIT 1";
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