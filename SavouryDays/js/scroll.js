window.addEventListener("scroll", HideNav)
window.addEventListener("scroll", HideArrow)
let lastScroll = 0;
function HideNav() {
    if (document.documentElement.scrollTop > 57) {
        document.getElementById("navbar1").classList.add("fixed-top");
    }
    if (document.documentElement.scrollTop == 0){
        document.getElementById("navbar1").classList.remove("fixed-top");
    }
    if (document.documentElement.scrollTop > 50) {
        if(document.documentElement.scrollTop > lastScroll ) {
            document.getElementById("navbar1").classList.add("hidden");
            document.getElementById("navbar1").classList.remove("non-hidden");
        }
        else {
            document.getElementById("navbar1").classList.add("non-hidden");
            document.getElementById("navbar1").classList.remove("hidden");
        }
    }
    lastScroll = document.documentElement.scrollTop;
}
function HideArrow() {
    if (document.documentElement.scrollTop < 110)
        document.getElementById("back-top").classList.add("hidden-back-top");
    else {
        document.getElementById("back-top").classList.remove("hidden-back-top");
    }
}
function BackTop() {
    document.documentElement.scrollTop = 0; 
    document.getElementById("navbar1").classList.remove("fixed-top");
    document.getElementById("back-top").classList.add("hidden-back-top");
    document.getElementById("navbar1").classList.add("non-hidden");
    document.getElementById("navbar1").classList.remove("hidden");      
}
function KiemTraDaDangNhap() {
    var tkhientai = localStorage.getItem('tkhientai');
    console.log(tkhientai);
    if(tkhientai != null) {
        document.getElementById("dang-nhap").classList.add("d-none");
        document.getElementById("dang-ky").classList.add("d-none");
        document.getElementById("my-course").classList.remove("d-none");
        document.getElementById("my-account").classList.remove("d-none");
        document.getElementById("my-account").innerHTML = '<span><i class="fas fa-user mr-2"></i></span>' + tkhientai;
    }
    else {
        document.getElementById("dang-nhap").classList.remove("d-none");
        document.getElementById("dang-ky").classList.remove("d-none");
        document.getElementById("my-course").classList.add("d-none");
        document.getElementById("my-account").classList.add("d-none");
    }
}

function DangXuat(link) {
    localStorage.removeItem("tkhientai");
    link1 = "../html/" + link; 
    window.location.href = link
}

document.addEventListener("DOMContentLoaded", function() {
    KiemTraDaDangNhap();
});