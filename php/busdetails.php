<?php
	$connect=new mysqli("localhost","root","root","tracker");
    $data=json_decode(file_get_contents("php://input"));
    $send = $data->searchId;
    $response = array();

    if($send == "all"){
        $sql= "SELECT `bus_number`,`bus_id`,`bus_driver_name`,`bus_driver_image_url`,`driver_contact_no`,`source`,`destination`,`bus_total_stops`,`bus_morning_taken`,`bus_morning_arrival`,`bus_evening_taken`,`bus_evening_arrival` FROM `busdetails`";
            $result1 = mysqli_query($connect,$sql);
            if ($result1->num_rows > 0) {
            $x=0;
                while($row = $result1->fetch_assoc()) {
                $x++;

                $response[] = array('bus_number'             => $row['bus_number'],
                                    'bus_id'                 => $row['bus_id'],
                                    'bus_driver_name'        => $row['bus_driver_name'],
                                    'bus_driver_url'         => $row['bus_driver_image_url'],
                                    'source'                 => $row['source'],
                                    'destination'            => $row['destination'],
                                    'bus_total_stops'        => $row['bus_total_stops'],
                                    'bus_morning_taken'      => $row['bus_morning_taken'],
                                    'bus_morning_arrival'    => $row['bus_morning_arrival'],
                                    'bus_evening_taken'      => $row['bus_evening_taken'],
                                    'bus_evening_arrival'    => $row['bus_evening_arrival'],
                                    'driver_contact_no'      => $row['driver_contact_no']

                            );

                }
                $response['length'] = $x;
            
            } else {
                $response['data'] = "no rows selected";
            }
    }
    else{
       
        $sql= "SELECT `bus_number`,`bus_id`,`bus_driver_name`,`bus_driver_image_url`,`driver_contact_no`,`source`,`destination`,`bus_total_stops`,`bus_morning_taken`,`bus_morning_arrival`,`bus_evening_taken`,`bus_evening_arrival` FROM `busdetails` WHERE bus_number = '$send'";
        $result1 = mysqli_query($connect,$sql);
        if ($result1->num_rows > 0) {
        $x=0;
            while($row = $result1->fetch_assoc()) {
            $x++;

            $response[] = array('bus_number'             => $row['bus_number'],
                                'bus_id'                 => $row['bus_id'],
                                'bus_driver_name'        => $row['bus_driver_name'],
                                'bus_driver_url'         => $row['bus_driver_image_url'],
                                'source'                 => $row['source'],
                                'destination'            => $row['destination'],
                                'bus_total_stops'        => $row['bus_total_stops'],
                                'bus_morning_taken'      => $row['bus_morning_taken'],
                                'bus_morning_arrival'    => $row['bus_morning_arrival'],
                                'bus_evening_taken'      => $row['bus_evening_taken'],
                                'bus_evening_arrival'    => $row['bus_evening_arrival'],
                                'driver_contact_no'      => $row['driver_contact_no']

                        );

            }
            $response['length'] = $x;
        
        } else {
            $response['empty'] = "empty";
        }
    }
    
    $json =json_encode($response);
	echo $json;
?>