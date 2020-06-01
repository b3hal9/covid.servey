<?php 
    $host = "localhost";
    $user = "root";
    $password ="";
    $database = "register";



// connect to mysql database

      $connect = mysqli_connect($host, $user, $password, $database);

      if(!$connect){
        echo "<h2>Cannot establish connection to the database</h2>";
      }else{
        if(isset($_POST['add'])){
          $name = $_POST['name'];
          $email = $_POST['email'];
          $address = $_POST['address'];
          $age = $_POST['age'];
          $symptoms = $_POST['symptoms'];
          $symptomsData = implode(",",$symptoms);
          $precautions = $_POST['precautions'];
          $precautionsData = implode(",",$precautions);
          
         $query = "insert into user(name,email,address,age,symptoms,precautions) values('$name','$email','$address','$age','$symptomsData','$precautionsData')";
         $result = mysqli_query($connect,$query);
         if($result){
           echo "<h2>You are added to database.</h2>";
           
         }else{
           echo '<h2>Insertion Failed. Try again.!!.</h2>';
         }
         header("refresh:3, url=covid.html");
       }
      }
    
 
    ?>





<!-- 
$data = array()
        $name = $_POST['name'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $age = $_POST['age'];
        $symptoms = $_POST['symptoms'];
        $symptomsData = implode(",",$symptoms);
        $precautions = $_POST['precautions'];
        $precautionsData = implode(",",$precautions); -->