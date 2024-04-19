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
        return true;
    } else {
        document.getElementById("suggest-username").innerHTML = "Chuỗi chỉ bao gồm chữ thường từ a-z, 0-9, _ và -"
        return false;
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

function KiemTraDangNhap() {
    if (KiemTraUsername() && KiemTraPassword()) {
        var username1 = document.getElementById("txtUsername").value.trim();
        var password1 = document.getElementById("txtPw").value.trim();
        var tk = localStorage.getItem(username1)
        tk = JSON.parse(tk);
        console.log(tk);
        if (tk != null) {
            if (username1 == tk.username){
                if (password1 == tk.password) {
                    alert("Đăng nhập thành công!");
                    localStorage.setItem("tkhientai", username1);
                    window.location.href = "../html/home.html"
                }
                else {
                    alert("Thông tin tài khoản hoặc mật khẩu không chính xác")
                    return
                }
            }
        }
        else {
            alert("Không tồn tại tài khoản")
            return
        }
    }
    else {
        alert("Bạn phải nhập đầy đủ thông tin")
    }
}