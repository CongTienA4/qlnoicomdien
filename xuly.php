<?php
 
    // Nếu không phải là sự kiện đăng ký thì không xử lý
    if (!isset($_POST['username'])){
        die('');
    }
     
    //Nhúng file kết nối với database
    include('ketnoi.php');
          
    //Khai báo utf-8 để hiển thị được tiếng việt
    header('Content-Type: text/html; charset=utf-8');
          
    //Lấy dữ liệu từ file dangky.php

    $username   = addslashes($_POST['username']);
    $password   = addslashes($_POST['password']);
 
    //Kiểm tra người dùng đã nhập liệu đầy đủ chưa
    if (!$username || !$password )
    {
        echo "Vui lòng nhập đầy đủ thông tin. <a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
    }
          
        
    $sql = "SELECT username FROM taikhoan WHERE username='$username'";
    //Kiểm tra tên đăng nhập này đã có người dùng chưa
    if (mysqli_num_rows(mysqli_query($con,$sql)) > 0){
        echo "Tên đăng nhập này đã có người dùng. Vui lòng chọn tên đăng nhập khác. <a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
    }
          
    $sql_in = "INSERT INTO `taikhoan`( `username`, `password`) VALUES ('$username','$password')";
    //Lưu thông tin thành viên vào bảng
    @$addtaikhoan = mysqli_query($con,$sql_in);                   
    //Thông báo quá trình lưu
    if ($addtaikhoan)
        echo "Quá trình đăng ký thành công. <a href='http://localhost:8080/btweb/BTnoicomdien/trangchucd.php'>Về trang chủ</a>";
    else
        echo "Có lỗi xảy ra trong quá trình đăng ký. <a href='dangky.php'>Thử lại</a>";
?>