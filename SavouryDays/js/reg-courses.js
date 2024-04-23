$(document).ready(function(){
    $("#registerButton").click(function(){
        $("#successMessage").show();
    });
});

function ktraten()
{
    var regt = /^([A-Z]{1}[a-z]{0,}\s){1,6}[A-Z]{1}[a-z]{0,}$/
    var t = document.getElementById("txtHT").value.trim();
    if(t == "") {
        document.getElementById("er1").innerHTML = "Phải nhập họ tên";
        return false;
    }
    if(regt.test(t)) {
        document.getElementById("er1").innerHTML = "(*)";
        return true;
    }
    else {
        document.getElementById("er1").innerHTML = "Họ tên phải bắt đầu bằng chữ hoa";
        return false;
    }
}

function ktraDT()
{
    var regt = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/;
    var t = document.getElementById("txtDT").value.trim();
    if(t == "") {
        document.getElementById("er2").innerHTML = "Phải nhập số điện thoại";
        return false;
    }
    if(regt.test(t)) {
        document.getElementById("er2").innerHTML = "(*)";
        return true;
    }
    else {
        document.getElementById("er2").innerHTML = "Phải điền chính xác số điện thoại của mình(bắt đầu từ 03,05,07,08,09 hoặc 012, 016, 018, 019)";
        return false;
    }
}

function ktraEmail()
{
    var regt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var t = document.getElementById("txtEmail").value.trim();
    if(t == "") {
        document.getElementById("er3").innerHTML = "Phải nhập email";
        return false;
    }
    if(regt.test(t)) {
        document.getElementById("er3").innerHTML = "(*)";
        return true;
    }
    else {
        document.getElementById("er3").innerHTML = "Email phải có ký tự @ và kết thúc với .com ";
        return false;
    }
}
function ktralinkFB()
{
    var regt = /^(https?:\/\/)?(www\.)?(facebook\.com\/)([\w\-\.\=\&\/]+)*$/i;
    var t = document.getElementById("txtLinkFB").value.trim();
    if(t == "") {
        document.getElementById("er4").innerHTML = "Phải nhập link facebook";
        return false;
    }
    if(regt.test(t)){
        document.getElementById("er4").innerHTML = "(*)";
        return true;
    }
    else {
        document.getElementById("er4").innerHTML = "Nhập sai link Facebook";
        return false;
    }
}

function DangKyKhoaHoc() {
    if (ktraten() && ktraDT() && ktraEmail() && ktralinkFB()) {
        var ten = document.getElementById("txtHT").value.trim();
        var sdt = document.getElementById("txtDT").value.trim();
        var email = document.getElementById("txtEmail").value.trim();
        var fb = document.getElementById("txtLinkFB").value.trim();
        var kh = document.getElementById("name-course").value;
        var gia = document.getElementById("tien").value.trim();
        var ngay = new Date();
        var khoaHoc = {ten: ten, sdt: sdt, email: email, fb: fb, kh: kh, gia: gia, ngay: ngay}
        var mangKhoaHoc = ["Cupcake - Muffin", "Custard - Pudding", "Sponge - Foam cake", "Cookies - Bars - Candy"]
        var username = localStorage.getItem("tkhientai")
        var tk = localStorage.getItem(username)
        tk = JSON.parse(tk);
        console.log(tk);
        if(tk.dsKhoaHoc.length > 0) {
            for (var i = 0; i < tk.dsKhoaHoc.length; i++) {
                if(tk.dsKhoaHoc[i].kh == khoaHoc.kh) {
                    alert("Bạn đã đăng ký khóa học này rồi! Bạn có thể vào công thức bên trên để xem hoặc vào mục khóa học của tôi để xem chi tiết!")
                    $("#myModal").modal('hide');
                    return;
                }
            }
        }
        tk.dsKhoaHoc.push(khoaHoc)
        localStorage.setItem(username, JSON.stringify(tk))
        alert("Đăng ký thành công!")
        document.getElementById("txtHT").value = ""
        document.getElementById("txtDT").value = ""
        document.getElementById("txtEmail").value = ""
        document.getElementById("txtLinkFB").value = ""
        $("#myModal").modal('hide');
        location.reload();
    }
    else {
        alert("Bạn phải nhập đầy đủ thông tin!")
    }
}

function KiemTraTaiKhoan() {
    var tkhientai = localStorage.getItem('tkhientai');
    if(tkhientai != null) {
        var bookButtons = document.getElementsByClassName("book");
        for (var i = 0; i < bookButtons.length; i++) {
            bookButtons[i].setAttribute("data-toggle", "modal");
            bookButtons[i].setAttribute("data-target", "#myModal");
        }
    }
    else {
        alert("Bạn phải đăng nhập để đăng ký khóa học")
    }
}

function KiemTraDaDangNhap() {
    var tkhientai = localStorage.getItem('tkhientai');
    console.log(tkhientai);
    if(tkhientai != null) {
        document.getElementById("dang-nhap").classList.add("d-none");
        document.getElementById("dang-ky").classList.add("d-none");
        document.getElementById("my-course").classList.remove("d-none");
        document.getElementById("my-account").classList.remove("d-none");
        var tenkh = document.getElementById("name-course").value;
        document.getElementById("my-account").innerHTML = '<span><i class="fas fa-user mr-2"></i></span>' + tkhientai;
        var tk = localStorage.getItem(tkhientai)
        tk = JSON.parse(tk);
        console.log(tk);
        var flag = 0;
        for (var i = 0; i < tk.dsKhoaHoc.length; i++) {
            if (tk.dsKhoaHoc[i].kh == tenkh) {
                console.log(i);
                document.getElementById("chua-mua").classList.add("d-none");
                document.getElementById("da-mua").classList.remove("d-none");
                flag = 1;
            }
        }
        if (flag == 0) {
            document.getElementById("chua-mua").classList.remove("d-none");
            document.getElementById("da-mua").classList.add("d-none");
        }
    }
    else {
        document.getElementById("dang-nhap").classList.remove("d-none");
        document.getElementById("dang-ky").classList.remove("d-none");
        document.getElementById("my-course").classList.add("d-none");
        document.getElementById("my-account").classList.add("d-none");
        document.getElementById("chua-mua").classList.remove("d-none");
        document.getElementById("da-mua").classList.add("d-none");
    }
}