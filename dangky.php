<form  action="update_dangky.php" method="POST" name="frm" onsubmit="return dangky()">
    <link rel="stylesheet" type="text/css" href="./dangnhap.css">
    <div class="dangky">
        <h2>Đăng ký </h2>
        <table >
            <br>
            <div class="col-md-6">
                <span><a>Tên đăng nhập: </a>
                    <span class="input">
                        <br>
                        <input class="input" type="text" name="user" pattern=".{6,}" size="80" aria-required="true" aria-invalid="false" placeholder="Vui lòng nhập tên đang nhập">
                        <span id="pass-erro" class="erro"></span>
                    </span>
                </span>
            </div>
            <br>
            <div class="col-md-6">
                <span><a>Tên người dùng: </a>
                    <span class="input">
                        <br>
                        <input class="input" type="text" name="tennd" pattern=".{6,}" size="80" aria-required="true" aria-invalid="false" placeholder="Vui lòng nhập tên người dùng">
                        <span id="pass-erro" class="erro"></span>
                    </span>
                </span>
            </div>
            <br>
            <div class="col-md-6">
                <span><a>Mật khẩu: </a>
                    <span class="input">
                        <br>
                        <input class="input" type="password" name="pass" pattern=".{6,}" size="80" aria-required="true" aria-invalid="false" placeholder="Vui lòng nhập mật khẩu">
                        <span id="pass-erro" class="erro"></span>
                    </span>
                </span>
            </div>
            <br>
            <div class="col-md-6">
                <span><a>Nhập lại mật khẩu: </a>
                    <span class="input">
                        <br>
                        <input class="input" type="password" name="pass2" pattern=".{6,}" size="80" aria-required="true" aria-invalid="false" placeholder="Vui lòng nhập mật khẩu">
                        <span id="pass-erro" class="erro"></span>
                    </span>
                </span>
            </div>
            <br>
            <div class="col-md-6">
                <span><a>Ngày sinh: </a>
                    <span class="input">
                        <br>
                        <input class="input" type="date" name="ngaysinh" pattern=".{6,}" size="80" aria-required="true" aria-invalid="false" placeholder="Vui lòng nhập mật khẩu">
                        <span id="pass-erro" class="erro"></span>
                    </span>
                </span>
            </div>

            <br>
            <div class="col-md-6">
                <span><a>Giới tính: </a>
                    <span class="input">
                        <select name="gioitinh"  aria-required="true" aria-invalid="false">
                        <option value="">Chọn giới tính </option>
                        <option value="nam">Nam </option></option>
                        <option value="nu">Nữ </option>
                        <span id="pass-erro" class="erro"></span>
                        </select>
                    </span>
                </span>
            </div>
            <div class="col-md-6">
                <span><a>Email: </a>
                    <span class="input">
                        <br>
                        <input class="input" type="text" name="email" pattern=".{6,}" size="80" aria-required="true" aria-invalid="false" placeholder="Vui lòng nhập Email">
                        <span id="pass-erro" class="erro"></span>
                    </span>
                </span>
            </div>
            <br>
            <div class="col-md-6">
                <span><a>Điện thoại: </a>
                    <span class="input">
                        <br>
                        <input class="input" type="text" name="dienthoai" pattern=".{6,}" size="80" aria-required="true" aria-invalid="false" placeholder="Vui lòng nhập Email">
                        <span id="pass-erro" class="erro"></span>
                    </span>
                </span>
            </div>
            <br>
            <div class="col-md-6">
                <span><a>Địa chỉ: </a>
                    <span class="input">
                        <br>
                        <input class="input" type="text" name="diachi" pattern=".{6,}" size="80" aria-required="true" aria-invalid="false" placeholder="Vui lòng nhập Email">
                        <span id="pass-erro" class="erro"></span>
                    </span>
                </span>
            </div>
            <br>
            <div class="btndangky">
                <input type="submit" name="submit" value="Đăng ký"></input>
                <input  type="reset" name="" value="Hủy" href="./admin/logout.php"></div>   
            </div>


        </table>
    </div>
</form>
<?php
    $con=mysqli_connect("localhost:3306","root","","webth");
    // Check connection
    if (mysqli_connect_errno())
      {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      }

?>

<script lang="javascript">
    function dangky()
    {
        if(frm.user.value=="")
        {
            alert("Bạn chưa nhập tên đăng nhập. Vui lòng kiểm tra lại");     
            frm.user.focus();
            return false;
        }
        if(frm.user.value.length<6)
        {
            alert("Tên đăng nhập quá ngắn. Vui lòng điền đủ họ tên");
            frm.user.focus();
            return false;
        }
        if(frm.tennd.value=="")
        {
            alert("Bạn chưa nhập tên người dùng. Vui lòng kiểm tra lại");
            frm.tennd.focus();
            return false;
        }
        if(frm.tennd.value.length<6)
        {
            alert("Tên người dùng phải hơn 6 ký tự.");
            frm.tennd.focus();
            return false;
        }
        if(frm.pass.value=="")
        {
            alert("Bạn chưa nhập password. Vui lòng nhập password");
            frm.pass.focus();
            return false;
        }
        if(frm.pass.value.length<6)
        {
            alert("Mật khẩu phải hơn 6 ký tự.");
            frm.pass.focus();
            return false;
        }
        if(frm.pass2.value=="")
        {
            alert("Bạn chưa nhập lại password");
            frm.pass2.focus();
            return false;
        }
        mk=frm.pass.value;
        mk1=frm.pass2.value;
        if(mk!=mk1)
        {
            alert("Password chưa đúng");
            frm.pass.focus();
            return false;
        }
        dt=/^[0-9]+$/;
        dienthoai=frm.dienthoai.value;
        if(!dt.test(dienthoai))
        {
            alert("Bạn chưa nhập điện thoại. Vui lòng nhập điện thoại.");
            frm.dienthoai.focus();
            return false;
        }
        dd=frm.dienthoai.value;
        if(dd.length<10 || dd.length >11)
        {
            alert("Số diện thoại không đúng độ dài. Vui lòng nhập lại");
            frm.dienthoai.focus();
            return false;
        }
        
        mail=frm.email.value;
        m=/^([A-z0-9])+[@][a-z]+[.][a-z]+[.]*([a-z]+)*$/;
        if(mail=="")
        {
            alert("Bạn chưa nhập email");
            mail.focus();
            return false;
        }
        if(!m.test(email))
        {
            alert("Bạn nhập sai email");
            frm.email.focus();
            return false;
        }
       
        
    }


</script>