$(document).ready(function(){
    $("#registerButton").click(function(){
        $("#successMessage").show();
    });
});

function ktraten()
{
    var regt = /^[a-zA-ZÀ-ỹ\s']+$/;
    var t = document.getElementById("txtHT").value;
    if(regt.test(t))
    {
        document.getElementById("er1").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("er1").innerHTML = "Họ tên không được rỗng";
        return false;
    }
}

function ktraDT()
{
    var regt = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/;
    var t = document.getElementById("txtDT").value;
    if(regt.test(t))
    {
        document.getElementById("er2").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("er2").innerHTML = "Phải điền chính xác số điện thoại của mình(bắt đầu từ 03,05,07,08,09 hoặc 012, 016, 018, 019)";
        return false;
    }
}

function ktraEmail()
{
    var regt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var t = document.getElementById("txtEmail").value;
    if(regt.test(t))
    {
        document.getElementById("er3").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("er3").innerHTML = "Email phải có ký tự @ và kết thúc với .com ";
        return false;
    }
}
function ktralinkFB()
{
    var regt = /^https?:\/\/(?:www\.)?facebook\.com\/(?:[^\/?]+)$/;
    var t = document.getElementById("txtEmail").value;
    if(regt.test(t))
    {
        document.getElementById("er4").innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById("er4").innerHTML = "";
        return false;
    }
}