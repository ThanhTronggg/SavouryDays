function KiemTraHoTen() {
    var regex = /^([A-Z]{1}[a-z]{0,}\s){1,6}[A-Z]{1}[a-z]{0,}$/
    var chuoi = document.getElementById("txtHoten").value.trim();
    if(chuoi == "") {
        document.getElementById("suggest-hoten").innerHTML = "Phải nhập họ và tên của bạn"
        return false;
    }
    var kq = regex.test(chuoi);
    if (kq) {
        document.getElementById("suggest-hoten").innerHTML = "<br>";
        return true;
    } else {
        document.getElementById("suggest-hoten").innerHTML = "Họ và tên phải viết in hoa chữ cái đầu"
        return false;
    }
}

function KiemTraEmail() {
    var regex = /^[a-zA-Z]{1}\w{0,}@\w{0,}.com$/
    var chuoi = document.getElementById("txtEmail").value.trim();
    if (chuoi == "") {
        document.getElementById("suggest-email").innerHTML = "Phải nhập Email"
        return false
    }
    var kq = regex.test(chuoi);
    if (kq) {
        document.getElementById("suggest-email").innerHTML = "<br>";
        return true;
    }
    else {
        document.getElementById("suggest-email").innerHTML = "Email phải có @ và kết thúc .com";
        return false;
    }
}

function KiemTraUsername() {
    var regex = /^[a-z0-9_-]{3,16}$/;
    var chuoi = document.getElementById("txtUsername").value.trim();
    if(chuoi == "") {
        document.getElementById("suggest-username").innerHTML = "Phải nhập tên đăng nhập"
        return false;
    }
    var kq = regex.test(chuoi);
    if (kq) {
        document.getElementById("suggest-username").innerHTML = "<br>";
    } else {
        document.getElementById("suggest-username").innerHTML = "Chuỗi chỉ bao gồm chữ thường từ a-z, 0-9, _ và -"
        return false;
    }
    var tk = localStorage.getItem(chuoi);
    tk = JSON.parse(tk);
    if(tk != null) {
        document.getElementById("suggest-username").innerHTML = "Tên đăng nhập đã tồn tại"
        return false;
    }
    else {
        document.getElementById("suggest-username").innerHTML = "<br>";
        return true;
    }
}

function KiemTraPassword() {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    var chuoi = document.getElementById("txtPw").value.trim();
    if(chuoi == "") {
        document.getElementById("suggest-password").innerHTML = "Phải nhập mật khẩu"
        return false;
    }
    var kq = regex.test(chuoi);
    if (kq) {
        document.getElementById("suggest-password").innerHTML = "<br>";
        return true;
    } else {
        document.getElementById("suggest-password").innerHTML = "Mật khẩu chỉ chứa 1 chữ cái, 1 số và 1 kí tự đặc biệt"
        return false;
    }
}

function KiemTraPassword2() {
    var chuoi = document.getElementById("txtPw").value.trim();
    var chuoi2 = document.getElementById("txtPw2").value.trim();
    if(chuoi != chuoi2) {
        document.getElementById("suggest-password2").innerHTML = "Mật khẩu phải giống với mật khẩu đã nhập"
        return false;
    }
    else {
        document.getElementById("suggest-password2").innerHTML = "<br>";
        return true;
    }
}

function KiemTraPassword3() {
    var chuoi = document.getElementById("txtPw3").value.trim();
    var tkhientai = localStorage.getItem('tkhientai');
    var tk = localStorage.getItem(tkhientai)
    tk = JSON.parse(tk);
    if(chuoi == "") {
        document.getElementById("suggest-password3").innerHTML = "Phải nhập mật khẩu cũ"
        return false;
    }
    if(chuoi != tk.password) {
        document.getElementById("suggest-password3").innerHTML = "Nhập sai mật khẩu cũ"
        return false;
    }
    else {
        document.getElementById("suggest-password3").innerHTML = "<br>";
        return true;
    }
}

function KiemTraNgaySinh() {
    var chuoi = document.getElementById("txtNgaySinh").value.trim();
    if (chuoi == "") {
        document.getElementById("suggest-ngay-sinh").innerHTML = "Phải nhập ngày sinh"
        return false
    }
    var ns = new Date(chuoi)
    var today = new Date()
    if (ns > today) {
        document.getElementById("suggest-ngay-sinh").innerHTML = "Ngày sinh phải trước ngày hiện tại";
        return false;
    } else {
        document.getElementById("suggest-ngay-sinh").innerHTML = "<br>";
        return true;
    }
}

function KiemTraDangKy() {
    if(KiemTraHoTen() && KiemTraEmail() && KiemTraUsername() && KiemTraPassword() && KiemTraPassword2()) {
        var ten = document.getElementById("txtHoten").value.trim();
        var email = document.getElementById("txtEmail").value.trim();
        var username = document.getElementById("txtUsername").value.trim();
        var password = document.getElementById("txtPw").value.trim();
        var ns = document.getElementById("txtNgaySinh").value.trim();
        var ds = []
        var tk = {ten: ten, email: email, username: username, password: password, dsKhoaHoc: ds, ns: ns}
        localStorage.setItem(username, JSON.stringify(tk))
        alert("Đăng ký tài khoản thành công!")
        document.getElementById("txtHoten").value = ""
        document.getElementById("txtEmail").value = ""
        document.getElementById("txtUsername").value = ""
        document.getElementById("txtPw").value = ""
        document.getElementById("txtPw2").value = ""
        document.getElementById("txtNgaySinh").value = ""
    }
    else {
        alert("Bạn phải nhập tất cả thông tin")
    }
}