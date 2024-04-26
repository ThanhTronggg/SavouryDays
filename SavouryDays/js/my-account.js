function KiemTraDaDangNhap() {
    var tkhientai = localStorage.getItem('tkhientai');
    console.log(tkhientai);
    var tk = localStorage.getItem(tkhientai)
    tk = JSON.parse(tk);
    console.log(tk);
    if(tkhientai != null) {
        document.getElementById("dang-nhap").classList.add("d-none");
        document.getElementById("dang-ky").classList.add("d-none");
        document.getElementById("my-course").classList.remove("d-none");
        document.getElementById("my-account").classList.remove("d-none");
        document.getElementById("my-account").innerHTML = '<span><i class="fas fa-user mr-2"></i></span>' + tkhientai;
        document.getElementById("txtUsername").value = tk.username
        document.getElementById("txtHoten").value = tk.ten
        document.getElementById("txtEmail").value = tk.email
        document.getElementById("txtNgaySinh").value = tk.ns
    }
    else {
        document.getElementById("dang-nhap").classList.remove("d-none");
        document.getElementById("dang-ky").classList.remove("d-none");
        document.getElementById("my-course").classList.add("d-none");
        document.getElementById("my-account").classList.add("d-none");
    }
}

function KiemTraPassword() {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    var chuoi = document.getElementById("txtPw").value.trim();
    var chuoi2 = document.getElementById("txtPw3").value.trim();
    if(chuoi == "") {
        document.getElementById("suggest-password").innerHTML = "Phải nhập mật khẩu"
        return false;
    }
    var kq = regex.test(chuoi);
    if (!kq) {
        document.getElementById("suggest-password").innerHTML = "Mật khẩu chỉ chứa 1 chữ cái, 1 số và 1 kí tự đặc biệt"
        return false;
    }
    if(chuoi == chuoi2) {
        document.getElementById("suggest-password").innerHTML = "Mật khẩu mới không được trùng với mật khẩu cũ"
        return false;
    }
    else {
        document.getElementById("suggest-password").innerHTML = "<br>"
        return true
    }
}

function DoiMatKhau() {
    if(KiemTraPassword() && KiemTraPassword2() && KiemTraPassword3()) {
        var chuoi = document.getElementById("txtPw2").value.trim();
        var tkhientai = localStorage.getItem('tkhientai');
        console.log(tkhientai);
        var tk = localStorage.getItem(tkhientai)
        tk = JSON.parse(tk);
        tk.password = chuoi;
        localStorage.removeItem(tkhientai)
        localStorage.setItem(tkhientai, JSON.stringify(tk));
        var tk = localStorage.getItem(tkhientai)
        tk = JSON.parse(tk);
        console.log("Tài khoản sau khi đổi mật khẩu")
        console.log(tk);
        alert("Đổi mật khẩu thành công!")
    }
    else {
        alert("Bạn phải nhập đầy đủ thông tin!")
    }
}

function CapNhatThongTin() {
    if(KiemTraHoTen() && KiemTraEmail() && KiemTraNgaySinh()) {
        var hoten = document.getElementById("txtHoten").value.trim();
        var email = document.getElementById("txtEmail").value.trim();
        var ns = document.getElementById("txtNgaySinh").value.trim();
        var tkhientai = localStorage.getItem('tkhientai');
        console.log(tkhientai);
        var tk = localStorage.getItem(tkhientai)
        tk = JSON.parse(tk);
        tk.ten = hoten;
        tk.ns = ns;
        tk.email = email;
        localStorage.removeItem(tkhientai)
        localStorage.setItem(tkhientai, JSON.stringify(tk));
        var tk = localStorage.getItem(tkhientai)
        tk = JSON.parse(tk);
        console.log("Tài khoản sau khi cập nhật thông tin thành công!")
        console.log(tk);
        alert("Cập nhật thông tin thành công!")
    }
    else {
        alert("Bạn phải nhập đầy đủ thông tin!")
    }
}