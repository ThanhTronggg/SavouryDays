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
    var cupcake_muffin = {img: "../img/Cupcake.jpg", ten: "Cupcake - Muffin"}
    var custard_pudding = {img: "../img/custard-pudding/PuddingXoaiChoco-150x150.jpg", ten: "Custard - Pudding"}
    var sponge_foam_cake = {img: "../img/sponge_foam-cake/Foam-cake.jpg", ten: "Sponge - Foam Cake"}
    var cookies_bars_candy = {img: "../img//Cookie-Candy.jpg", ten: "Cookies - Bars - Candy"}
    var mangKhoaHoc = ["Cupcake - Muffin", "Custard - Pudding", "Sponge - Foam cake", "Cookies - Bars - Candy"]
    var username = localStorage.getItem("tkhientai")
    var tk = localStorage.getItem(username)
    tk = JSON.parse(tk);
    console.log(tk);
    if (tk != null) {
        if(tk.dsKhoaHoc.length == 0) {
            document.getElementById("thong-bao-khoa-hoc").classList.remove("d-none");
            for(var i = 0; i < mangKhoaHoc.length; i++) {
                var chuoi = "khoa" + String(i+1)
                console.log(chuoi)
                document.getElementById(chuoi).classList.add("d-none");
            }
        }
        else {
            document.getElementById("thong-bao-khoa-hoc").classList.add("d-none");
            var flag = [0, 0, 0, 0]
            for (var i = 0; i < tk.dsKhoaHoc.length; i++) {
                for (var j = 0; j < mangKhoaHoc.length; j++) {
                    if (tk.dsKhoaHoc[i].kh == mangKhoaHoc[j]) {
                        var chuoi1 = "khoa" + String(j+1)
                        document.getElementById(chuoi1).classList.remove("d-none");
                        var chuoi2 = "info" + String(j+1)
                        console.log(chuoi2)
                        var thongTin = document.getElementById(chuoi2);
                        var ngay = ""
                        for(var l = 0; l < 10; l++) {
                            ngay += tk.dsKhoaHoc[i].ngay[l];
                        }
                        var chiTiet = '<h2 class = "text-center text-violet">Thông tin đăng ký</h2><h4 class = "mt-lg-4 text-dark">Tên người đăng ký: '+ tk.dsKhoaHoc[i].ten +'</h4><h4 class = "mt-lg-4 text-dark">Số điện thoại đăng ký: '+ tk.dsKhoaHoc[i].sdt+'</h4><h4 class = "mt-lg-4 text-dark">Email đăng ký: '+tk.dsKhoaHoc[i].email+'</h4><h4 class = "mt-lg-4 text-dark">Facebook đăng ký: <a class = "text-pink-2" href = "'+ tk.dsKhoaHoc[i].fb+'">'+tk.dsKhoaHoc[i].fb+'</a></h4><h4 class = "mt-lg-4 text-dark">Khóa học đăng ký: ' +tk.dsKhoaHoc[i].kh+'</h4><h4 class = "mt-lg-4 text-dark">Giá: '+tk.dsKhoaHoc[i].gia+'</h4><h4 class = "mt-lg-4 text-dark">Ngày đăng ký: '+ngay+' </h4>'
                        thongTin.innerHTML = chiTiet
                        flag[j] = 1
                    }
                    else {
                        for(var k = 0; k < mangKhoaHoc.length; k++) {
                            if(flag[k] == 0) {
                                var chuoi = "khoa" + String(k+1)
                                document.getElementById(chuoi).classList.add("d-none");
                            } 
                        }
                    }
                }
            }
        }
    }
    else {
        document.getElementById("thong-bao-khoa-hoc").classList.remove("d-none");
        for(var i = 0; i < mangKhoaHoc.length; i++) {
                var chuoi = "khoa" + String(i+1)
                document.getElementById(chuoi).classList.add("d-none");
        }
    }
}