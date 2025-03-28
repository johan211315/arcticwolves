<?php
include("conexion.php");

//resgistro de usuario
if (isset($_POST["crear" ])) {
    $usuario = mysqli_real_escape_string( $conexion, $_POST['user']);  //mysqli_real_escappe_string se utilza para evitar que puedan utilizar inyección de codigo.
    $correo = mysqli_real_escape_string( $conexion, $_POST['user']);
    $password = mysqli_real_escape_string( $conexion, $_POST['pass']);
    $password_encriptada = sha1($password);   //se utiliza para encriptar la contraseña colocada por el usuario
    $sqluser = "SELECT idusuarios FROM USUARIOS WHERE usuario = '$usuario'";  //de esta forma evitaremos que puedan crear usuarios con el mismo nombre y se repitan, comparando los usuarios con la base de datos 
    $resultadouser = $conexion->query($sqluser);
    $filas= $resultadouser->num_rows;
    if ($filas > 0) { //que aparecera si el usario ya existe y se repite
        echo "<script>
            alert ('El usuario ya existe ');
            windows.location = 'register.php'; 
        </script>";
    }else {
        //insertar la inforamcion en la base de datos
        $sqlusuario = "INSERT INTO usuarios (usuario, correo, contraseña )
                        VALUES ('$usuario','$correo','$password_encriptada')";
        $resultadousuario = $conexion->query($sqlusuario);
        if ($resultadousuario > 0) {
            "<script>
            alert ('Registro Exitoso');
            windows.location = 'register.php'; 
        </script>";
        }else{
            "<script>
            alert ('Error al registrarse');
            windows.location = 'register.php'; 
        </script>";
        }                
    }
}
?>









<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/register.css">
    <title>Registrese en Arctic</title>
</head>

<body>
    <div class="container">
        <div class="container-profile">
            <span class="logo">
            </span>
        </div>
        <div class="container-form">
            <div class="logo-form">
                <img src="../img/icono-logo/LETRASLOGO.png" alt="logo Arctic Wolves"> 
            </div>
            <form class="form" action="registro.php" method="post">
                <input type="text" placeholder="Nom d'usuari" name="user">
                <input type="password" placeholder="Correu electronic" name="correo">
                <input type="password" id="confirm-password" placeholder="Contrasenya" name="pass">
                <input type="submit" value="Crear un compte nou" name="crear">
                <span><a href="#">¿Has oblidat la teva contrasenya?</a></span>
                <div class="border"></div>
                <button><a href="#">Tens compte? Inicia Sessió</a></button>
            </form>
            <p class="create-page">
                <a href="#"></a> Termes i condicions de Arctic Wolves®, drets reservats. Visita els nostres termes<br> 
            </p>
        </div>
    </div>
</body>

</html>



