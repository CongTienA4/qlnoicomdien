<?php 
session_start(); 
unset($_SESSION['phanquyen']);
unset($_SESSION['username']);
unset($_SESSION['idnd']);


echo "
							<script language='javascript'>
								alert('Thoát thành công');
								window.open('../dangnhap.html','_self', 1);
							</script>
						";
?>