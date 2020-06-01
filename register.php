<?php 
    $host = "localhost";
    $user = "root";
    $password ="";
    $database = "register";

// connect to mysql database
    try{
      $connect = mysqli_connect($host, $user, $password, $database);
      if(isset($_POST['add'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $age = $_POST['age'];
        // $symptoms = $_POST['symptoms'];
        // $symptomsData = implode(",",$symptoms);
        // $precautions = $_POST['precautions'];
        // $precautionsData = implode(",",$precautions);

       $query = "insert into user(name,email,address,age) values('$name','$email','$address','$age')";
       $result = mysqli_query($connect,$query);
       if($result){
         echo "<h2>You are added to database.</h2>";
       }
     }
    } catch (mysqli_sql_exception $ex) {
      echo 'Error';
    }
 
    ?>