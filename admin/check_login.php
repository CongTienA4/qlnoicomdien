<?php
session_start();

include("../administrator/connect.php");
include("../administrator/function.php");
echo "<meta charset='UTF-8' />";
if(isset($_POST['login'])) 
{
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql_check = mysql_query("select * from nguoidung where username = '$username'");
    $dem = mysql_num_rows($sql_check);
    if($dem == 0)
    {
        echo "Tài khoản không tồn tại";
    }
    else
    {
        $sql_check2 = mysql_query("select * from nguoidung where username = '$username' and password = '$password'");
        $dem2 = mysql_num_rows($sql_check2);
        if($dem2 == 0)
            redirect("login.php", "Mật khẩu đăng nhập không đúng",0.5);
        else
        {
            while($rows = mysql_fetch_object($sql_check2))
            {
                $phanquyen = $rows -> phanquyen ;
                if($phanquyen = '0')
                {
                    $_SESSION['admin'] = $username;
                    echo "<script language='javascript'>
                        alert('Đăng nhập thành công');
                        window.open('admin.php','_self',1);
                    </script>";
                }
                else
                {
                    $_SESSION['username'] = $username;
                    redirect("../trangchinhncd.html", "Đăng nhập thành công!", 0.5);
                }
            }
        }
    }
}