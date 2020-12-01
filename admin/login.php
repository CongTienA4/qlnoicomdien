<?php
session_start();
if(isset($_SESSION['username']))
{
	

if($_SESSION['phanquyen']==1)
{
	header("location:../index1.html");
}
if($_SESSION['phanquyen']==0)
{ 
	header("location:admin.php");
}
}
?>
<link rel="stylesheet" href="css/login.css" type="text/css">
<div class="body" align="center">
    <div class="tieude1">
        <div class="quantri" a>
            <h2>Đăng nhập quản trị </h2>
        </div>
    </div>
<?php
include("../include/connect.php");

if(isset($_POST['login']))
{
    $username = $_POST['user'];
    $password = $_POST['pass'];
    $sql_check = mysqli_query($link,"select * from nguoidung where username = '$username' and password='$password'");
    $dem = mysqli_num_rows($sql_check);
    if($dem == 0)
    {
        echo "<p class='thongbao1'>Tài khoản không tồn tại</p>";
    }
    else
    {
        $sql_check2 = "select * from nguoidung where username ='$username' and password ='$password'";
		$rows = mysqli_query($link,$sql_check2);	
        $dem2 = mysqli_num_rows($rows);
        if($dem2 == 0)
            echo "<p class='thongbao1'>Mật khẩu không chính xác</p>";
        else
        {
	
		 while($row = mysqli_fetch_array($rows))
            {
              $_SESSION['username'] = $username;
              
				$_SESSION['phanquyen'] = $row['phanquyen'];
				$_SESSION['idnd'] = $row['idnd'];
                if($row['phanquyen'] == 0)
                {
                    
					echo "
							<script language='javascript'>
								alert('Đăng nhập quản trị thành công');
								window.open('admin.php','_self', 1);
							</script>
						";
                }
                else
                {
                    
					header('location:../index.php');
                }
            }
        }
    }
}
?>

 <!DOCTYPE html>
<html>
<head>
    <title>Noi com dien</title>
    <meta charset="utf-8">
    <meta >
    <link rel="stylesheet" type="text/css" href="./filecss.css">
    <link rel="stylesheet" type="text/css" href="./dangnhap.css">
    <link rel="stylesheet" type="text/css" href="./fontawesome/css/all.css">
</head>
<body>
    <div class="admin_login" style="ali">
        <div class="col-md-6" >
            <form method="POST" action="" style="align-self: center;">
                 <span><a>Tên đăng nhập: </a>
                <span class="input">
                    <br>
                    <input type="text" name="user" size="80" aria-required="true" aria-invalid="false" placeholder="Vui lòng nhập tên đăng nhập">
                    <span id="user-erro" class="erro"></span>
                </span>
            </span>
        </div>
        <br>
        <div class="col-md-6">
            <span><a>Mật khẩu: </a>
                <span class="input">
                    <br>
                    <input type="password" name="pass" pattern=".{6,}" size="80" aria-required="true" aria-invalid="false" placeholder="Vui lòng nhập mật khẩu">
                    <span id="pass-erro" class="erro"></span>
                </span>
            </span>
        </div>
        <br>
        <div class="dangnhap">
            <input name="login" type="submit" value="Đăng nhập"/>
             <a href='../dangnhap.html' title='Thoát' >Thoát</a>
        </div>
    
    
            </form>
        </div>
    </body>