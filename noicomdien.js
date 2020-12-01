function save() {
	let name = document.getElementById('name').value;
	let email = document.getElementById('e-mail').value;
	let tieude = document.getElementById('tieude').value;
	let sdt = document.getElementById('sdt').value;
	let noidung = document.getElementById('noidung').value;
	var atposition = email.indexOf('@');
        var dotposition = email.lastIndexOf('.');
	if(_.isEmpty(name)){
		document.getElementById('name-erro').innerHTML = 'Vui Lòng Nhập Họ Tên';
	}else if(name.trim().length<=2){
		document.getElementById('name-erro').innerHTML = 'Không được nhỏ hơn 2 ký tự';
	}else{
			document.getElementById('name-erro').innerHTML='';
		}
	if(_.isEmpty(tieude)){
		document.getElementById('tieude-erro').innerHTML = 'Vui Lòng Nhập Tiêu đề';
	}else{
			document.getElementById('tieude-erro').innerHTML='';
		}
	if(_.isEmpty(sdt)){
		document.getElementById('sdt-erro').innerHTML = 'Vui Lòng Nhập Số Điện Thoại';
	}else{
			document.getElementById('sdt-erro').innerHTML='';
		}
        if(_.isEmpty(email)){
        	if(email.trim().length < 1){
        		document.getElementById('email-erro').innerHTML='Vui lòng nhập e-mail';
        	}
        }else if (atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= email.length) {
            document.getElementById('email-erro').innerHTML='e-mail sai định dạng mời nhập lại';
        }else{
        	document.getElementById('email-erro').innerHTML="";
        }
	}
