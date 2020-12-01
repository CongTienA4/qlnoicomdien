<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shop - Nồi Cơm Điện</title>
    <link rel="stylesheet" href="./trangchuncd.css"/>
     <script type="text/javascript" src="jquery-3.2.1.min.js"></script>
    <script tyoe="text/javascript" src="slide.js"></script>
   <!--  <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
             <script>
            $(()=>{
                $('button').click(function() {
                    changeImage('#next');
                    }
                $('button').click(function(){
                    changeImage('#prev');
                    })
                )}
                )  
                    function changeImage(type){
                    let imgSelectVisible = $('img.slide-img-1:Visible');
                    let imgVisible = parseInt(imgSelectVisivle.attr("idx"));
                    let eqNumber = type === '#next' ? imgVisible + 1 : imgVisible - 1 ;
                    if(imgVisible == 0){
                        eqNumber =$('img.silde-img-1').length -1;
                        }
                    if(eqNumber >= $('img.silde-img-1').length){
                        eqNumber = 0;
                        }
                    $('.slide-img-1').eq(eqNumber).fadeIn(1500);
                        imgSelectVisible.fadeOut();
                    }
                setInterval(function(){
                    $('#next').click()},2000);
                setInterval(function(){
                    $('#prev').click()},2000);
            </script>
            <script>
            var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
            var Chuyenslide = document.getElementsByClassName("slide-img")[0];
            var Img = document.getElementsByClassName("slide-img-1");
            var Max = KichThuoc * (Img.length - 1);
            var chuyen = 0;
            var vitri=0;
            var tudong = 0;
            function Next(){
                    if (chuyen < Max) 
                    {
                        chuyen=vitri;
                        chuyen += KichThuoc;
                    }
                    else return;
                    vitri=chuyen;
                Chuyenslide.style.marginLeft  = "-" + chuyen+ "px";
            }
             function Prev(){
                    if (chuyen >=0) 
                    {
                        chuyen=vitri;
                        chuyen -= KichThuoc;
                    }
                    else return;
                    vitri=chuyen;
                Chuyenslide.style.marginLeft  = "-" + chuyen + "px";
            }
            function td(){
                 if (tudong==0)
                {
                    vitri=chuyen;
                    if (vitri<Max) 
                    {
                        vitri+=KichThuoc;
                    } else (tudong==1)
                } if(tudong==1)
                {
                    vitri-=KichThuoc;
                    if (vitri>0) 
                    {
                        vitri-=KichThuoc;
                    }else(tudong=0)
                }
                chuyen=vitri;
                Chuyenslide.style.marginLeft  = "-" + chuyen+ "px";
            }
        </script>  -->
</head>
<body>
    <div class="topbar">
        <ul>
            <li>
                <a class="topbar-fb" href="https://www.facebook.com">Facebook</a>
                <a class="topbar-fb" href="https://www.youtube.com/">YouTube</a>
                <a class="topbar-fyg" href="https://www.youtube.com/" style="margin-right: 180px;">Google Plus</a>
            </li>
        </ul>
    </div>

    <div class="masthead-logo">
            <div class="logo">
                <a style="float: left;" href="noicomdien.html"><img src="img/logoNCD.JPG"></a>
                <li>
                    <input type="search" class="input"  placeholder=" Nhập Tên cần tìm Kiếm..." autocomplete="off"/>
                    <button class="sreach">Tìm Kiếm</button>
                    <button class="sreach" style="width: 79px;"><li><a href="./login.html">Đăng nhập</a></li></button>
                </li>
            </div>
    </div>
    <br>
    <br>
        <div id="menu">
            <li class="menu-dmsp">
                <li style="text-align: center;"><h4 style="background-color: yellow;height:30px;margin-left:150px;padding-top:10px;width: 237px;"><b>Danh Mục Sản Phẩm</b></h4></li>
                <li id="homepage-menu"><a href="./trangchuncd.html" id="homepage">Trang Chủ </a></li>
            <li class="homepage-menu"><a href="./Tintuc.html" id="homepage">Tin tức </a></li>
            <li class="homepage-menu"><a href="./Update.html"id="homepage">Sửa Chữa Nồi cơm điện</a></li>
            <li class="homepage-menu"><a href="#"id="homepage">Khuyến Mãi</a></li> 
            <li class="homepage-menu"><a href="./Lienhe.html"id="homepage">Liên hệ </a></li>
            <li id="hottline"><a href="tel:0395679007" title="Hotline">Hotline: 0395 679 007</a></li>
            </li>
        </div>
        <div class="sub">
            <div class="sub-menu">
                <button><li><a href="./noicomdien1,8l.html">Nồi Cơm Điện Sharp</a></li></button>
                <button><li><a href="./noicomdientoshiba.html">Nồi Cơm Điện Toshiba</a></li></button>
                <button><li><a href="./noicomdiensupor.html">Nồi Cơm Điện Supor</a></li></button>
                <button><li><a href="#">Nồi Cơm Điện Kangaroo</a></li></button>
                <button><li><a href="./noicomdientiger.html">Nồi Cơm Điện Tiger</a></li></button>
                <button><li><a href="./noicomdienpanasonic.html">Nồi Cơm Điện PanaSonic</a></li></button>
                <button><li><a href="./noicomdiencuckoo.html">Nồi Cơm Điện Cuckoo</a></li></button>
            </div>
            <div class="slide">
                <div class="slide-img">
                    <li>
                        <img class="slide" src="imgslide/anh1.PNG"  stt="0" />
                        <img class="slide" src="imgslide/anh2.PNG"  stt="1" style="display: none;" />
                        <img class="slide" src="imgslide/anh3.PNG"  stt="2" style="display: none;" />
                        <a href="#" id="next"><img src="slideshow/next.png"/></a>
                        <a href="#" id="prev"><img src="slideshow/prev.png"/></a>
                    </li>
                   <!--  <button id="next" style="height: 30px;width: 50px;" onclick="Next()"><a> > </a></button>
                    <button id="prev" style="height: 30px;width: 50px;" onclick="Prev()"><a> < </a></button> -->
                </div>
            </div>
        </div>
            <div class="product">
                <div style="width: 250px;height: 1334px;float:left;">
                    <div class="product-new">
                        <h3 style="height:30px;padding: 10px 0px 2px 60px; background: #EEEEEE;width:180px;">Sản Phẩm Mới</h3>
                        <div style="border: 2px solid #EEEEEE; width: 237px;height: 100px;padding-top: 20px;">
                        <li><img src="imgslide/anh5.PNG"style="width: 83px;height: 100px;float: left;">
                            <a style="width: 150px;height: 50px;text-decoration: none; " href="#">NỒI CƠM ĐIỆN CƠ SUPOR 1.8 LÍT CFXB50YB19VN-GR-50</a>
                        <span style="color: red;font-weight: bold;margin-left: 30px;">820.000đ</span>
                    </li>
                </div>
                <div style="border: 2px solid #EEEEEE; width: 237px;height: 100px;padding-top: 20px;">
                     <li><img src="imgslide/anh6.PNG"style="width: 83px;height: 100px;float: left;">
                        <a style="width: 150px;height: 50px;text-decoration: none; " href="#" >NỒI CƠM ĐIỆN CƠ SUPOR 1.8 LÍT CFXB50YB19VN-YL-50</a>
                        <span style="color: red;font-weight: bold;margin-left: 30px;">850.000đ</span>
                    </li>
                </div>
                <div style="border: 2px solid #EEEEEE; width: 237px;height: 100px;padding-top: 20px;">
                     <li><img src="imgslide/anh7.PNG"style="width: 83px;height: 100px;float: left;">
                        <a style="width: 150px;height: 50px;text-decoration: none; " href="#" >NỒI CƠM ĐIỆN CAO TẦN SUPOR 1.8 LÍT CFXB50HC12VN-120</a>
                        <span style="color: red;font-weight: bold;margin-left: 30px;">2.200.000đ</span>
                    </li>
                </div>
                <div style="border: 2px solid #EEEEEE; width: 237px;height: 100px;padding-top: 20px;">
                     <li><img src="imgslide/anh8.PNG"style="width: 83px;height: 100px;float: left;">
                        <a style="width: 150px;height: 50px;text-decoration: none; " href="#" >NỒI CƠM ĐIỆN CƠ SUPOR 1.8LITS SRC751</a>
                        <span style="color: red;font-weight: bold;margin-left: 30px;">610.000đ</span>
                    </li>
                </div>
                <div style="border: 2px solid #EEEEEE; width: 237px;height: 100px;padding-top: 20px;">
                     <li><img src="imgslide/anh9.PNG"style="width: 83px;height: 100px;float: left;">
                        <a style="width: 150px;height: 50px;text-decoration: none; " href="#" >NỒI CƠM ĐIỆN CƠ SUPOR 1.8 LÍT SRC50YB15VN</a>
                        <span style="color: red;font-weight: bold;margin-left: 30px;">550.000đ</span>
                    </li>
                </div>
                
            <div class="news">
                <h3 style="padding: 10px 0px 2px 85px; background:#EEEEEE;height: 30px;width:155px;
                ">Tin Tức <button style="float:right;padding-right:15px;border: none;font-size: 20px;"> > </button><button style="float: right;padding-right:15px;border: none;font-size: 20px;"> < </button></h3>
                <div style="width: 252px;height: 400px;"class="NCDSmath">
                    <img src="imgslide/tintuc.PNG" width="200px;"style="padding: 20px 10px 10px 25px">
                    <p style="padding: 0px 20px 0px 25px;"><a style="text-decoration: none;"href="#">Nồi Cơm Điện thông minh của Xiaomi</a></p>
                    <p style="font-size: 12px;"><img src="imgslide/tintuclx.PNG" style="height: 18px;width: 18px;">403 lượt xem | <img src="imgslide/tintucbl.PNG"style="height: 18px;width: 18px;">0 bình luận</p>
                    <p style="padding:20px">Với mức giá không quá cao - dưới 5 triệu đồng , nồi cơm điện cao tần này có...</p>
                    <a href="#"style="font-size: 15px;text-transform: uppercase; float: right;padding-right:20px;">Xem chi tiết</a>
                </div>
            </div>
        </div>
        </div>
             <div style="float:left;width: 1000px;height: 400px;"class="NCDSharp">
                <h3 style="text-transform: uppercase;width: 900px;
                padding: 0px 20px 20px 20px;"><a href="#"style="text-decoration: none;">Nồi Cơm Điện Sharp</a></h3>
                    <div style="width: 261px;height: 320px;float: left;padding: 18px; border: 1px solid #DDDDDD;">
                        <a><img src="imgslide/sharp.PNG" style="w"></a>
                        <div style="text-align: center;"><a href="#"style="text-decoration: none;"> Nồi cơm điện cao tần Sharp KS-IH190V-GL 1.8 lít</a></div>
                        <p><a style="color: red;margin-right: 70px;padding-left: 10px;">3.500.000<u>đ</u></a><a style="color: red;
                        ">3.150.000đ</a></p>
                    </div>

                     <div style="width: 261px;height: 320px;float: left;padding:18px;border: 1px solid #DDDDDD;">
                        <a><img src="imgslide/sharp.PNG"></a>
                        <div style="text-align: center;"><a>Nồi Cơm Điện cao tần Sharp KS-ILH190V-GL1.8 Lít</a></div>
                        <p><a style="color: red;margin-right: 70px;padding-left: 10px;">3.500.000<u>đ</u></a><a style="color: red;
                        ">3.150.000đ</a></p>
                    </div>

                     <div style="width: 261px;height: 320px;float: left;padding:18px;border: 1px solid #DDDDDD;">
                        <a><img src="imgslide/sharp.PNG"></a>
                        <div style="text-align: center;"><a>Nồi Cơm Điện cao tần Sharp KS-ILH190V-GL1.8 Lít</a></div>
                        <p><a style="color: red;margin-right: 70px;padding-left: 10px;">3.500.000<u>đ</u></a><a style="color: red;
                        ">3.150.000đ</a></p>
                    </div>
                    <div style="width: 900px;height: 30px;background: #DDDDDD;float: left;font-size: 20px;text-transform: uppercase;text-al ign: center;padding-top: 5px;margin-bottom: 15px;"class="xtt"><a href="#" style="text-decoration: none;">Xem Tất Cả</a></div>

                    <h3 style="text-transform: uppercase;width: 900px;
                padding: 20px;">Nồi Cơm Điện Sharp</h3>
                    <div style="width: 261px;height: 320px;float: left;padding: 18px; border: 1px solid #DDDDDD;">
                        <a><img src="imgslide/sharp.PNG" style="w"></a>
                        <div style="text-align: center;"><a>Nồi Cơm Điện cao tần Sharp KS-ILH190V-GL1.8 Lít</a></div>
                        <p><a style="color: red;margin-right: 70px;padding-left: 10px;">3.500.000<u>đ</u></a><a style="color: red;
                        ">3.150.000đ</a></p>
                    </div>

                     <div style="width: 261px;height: 320px;float: left;padding:18px;border: 1px solid #DDDDDD;">
                        <a><img src="imgslide/sharp.PNG"></a>
                        <div style="text-align: center;"><a>Nồi Cơm Điện cao tần Sharp KS-ILH190V-GL1.8 Lít</a></div>
                        <p><a style="color: red;margin-right: 70px;padding-left: 10px;">3.500.000<u>đ</u></a><a style="color: red;
                        ">3.150.000đ</a></p>
                    </div>

                     <div style="width: 261px;height: 320px;float: left;padding:18px;border: 1px solid #DDDDDD;">
                        <a><img src="imgslide/sharp.PNG"></a>
                        <div style="text-align: center;"><a>Nồi Cơm Điện cao tần Sharp KS-ILH190V-GL1.8 Lít</a></div>
                        <p><a style="color: red;margin-right: 70px;padding-left: 10px;">3.500.000<u>đ</u></a><a style="color: red;
                        ">3.150.000đ</a></p>
                    </div>
                    <div style="width: 900px;height: 30px;background: #DDDDDD;float: left;font-size: 20px;text-transform: uppercase;text-align: center;padding-top: 5px;margin-bottom: 15px;"class="xtt"><a href="#" style="text-decoration: none;">Xem Tất Cả</a></div>

                    <h3 style="text-transform: uppercase;width: 900px;
                padding:20px;">Nồi Cơm Điện Sharp</h3>
                    <div style="width: 261px;height: 320px;float: left;padding: 18px; border: 1px solid #DDDDDD;">
                        <a><img src="imgslide/sharp.PNG" style="w"></a>
                        <div style="text-align: center;"><a>Nồi Cơm Điện cao tần Sharp KS-ILH190V-GL1.8 Lít</a></div>
                        <p><a style="color: red;margin-right: 70px;padding-left: 10px;">3.500.000<u>đ</u></a><a style="color: red;
                        ">3.150.000đ</a></p>
                    </div>

                     <div style="width: 261px;height: 320px;float: left;padding:18px;border: 1px solid #DDDDDD;">
                        <a><img src="imgslide/sharp.PNG"></a>
                        <div style="text-align: center;"><a>Nồi Cơm Điện cao tần Sharp KS-ILH190V-GL1.8 Lít</a></div>
                        <p><a style="color: red;margin-right: 70px;padding-left: 10px;">3.500.000<u>đ</u></a><a style="color: red;
                        ">3.150.000đ</a></p>
                    </div>

                     <div style="width: 261px;height: 320px;float: left;padding:18px;border: 1px solid #DDDDDD;">
                        <a><img src="imgslide/sharp.PNG"></a>
                        <div style="text-align: center;"><a>Nồi Cơm Điện cao tần Sharp KS-ILH190V-GL1.8 Lít</a></div>
                        <p><a style="color: red;margin-right: 70px;padding-left: 10px;">3.500.000<u>đ</u></a><a style="color: red;
                        ">3.150.000đ</a></p>
                    </div>
                    <div style="width: 900px;height: 30px;background: #DDDDDD;float: left;font-size: 20px;text-transform: uppercase;text-align: center;padding-top: 5px;margin-bottom: 15px;"class="xtt"><a href="#" style="text-decoration: none;">Xem Tất Cả</a></div>
            </div>
        </div>
    <div class="poster">
        <div class="poster-bottom">
                <a class="text-head">Đăng Kí Nhận Tin</a>
                <input type="email" name="EMAIL" placeholder="Nhập địa chỉ email ...">
                <button class="poster-dk">Đăng Ký</button>
                <li class="lienket" >
                    <a class="text-head">Liên kết mạng xã hội</a>
                    <a class="ion-social" title="Youtube" href="https://www.youtube.com"><img src="img/fb.jpg"></a>
                    <a class="ion-social" title="Google" href="https://plus.google.com"><img src="img/gg.jpg"></a>
                    <a class="ion-social" title="Facebook" href="https://www.facebook.com/"><img src="img/yt.jpg"></a>
                </li>
        </div>
    </div>
    <footer>
        <div class="icon-text">
            <li class="info">
                <li ><a ><img src="img/diadiem.jpg"> 159 Hồng Mai - Hai Bà Trưng - Hà Nội</a></li>
                <li ><a type="Số Điện Thoại" href="tel: 0584782524"><img src="img/phone.jpg"> 0584782524</a></li>
                <li ><a title="Email" href="email:info@noicomdien.com.vn"><img src="img/messenger.jpg"> info@noicomdien.com.vn</a></li>
            </li>
            <li class="history">
                <span>Được thành lập từ năm 2002, Hệ thống siêu thị noicomdien.com.vn là một trong
                những nhà bán lẻ Nồi Cơm Điện hàng đầu trong lĩnh vực di động cung cấp thiết bị
                đầu cuối. noicomdien.com.vn sẽ là một trong những công ty hàng đầu trong lĩnh vực
                Nồi Cơm Điện. Đem đến cho khách hàng những trải nghiệm tuyệt vời về sản phẩm
                cũng như dịch vụ trước và sau bán hàng.</span>
            </li>
        </div>
    </footer>
</div>
    </body>
</html>