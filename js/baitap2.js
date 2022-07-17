/**
 * Bài 2
 * Tính tiền cáp
 *  
*/

function tinhTienCap() {
    var style = document.getElementById("styleCustomer").value;
    var idClient = document.getElementById("idClient").value;
    var numChanel = Number(document.getElementById("numChanel").value);
    var numConnect = Number(document.getElementById("numConnect").value);
    var tienCap = 0;
    switch (style) {
        case "N":
            tienCap = 4.5 + 20.5 + numChanel * 7.5;
            break;
        case "D":
            tienCap = 15 + 75 + numChanel * 50;
            if(numConnect > 10){
                tienCap += (numConnect - 10) *5
            }
            break;
        default:
            alert("Vui lòng chọn loại khách hàng");
            break;
    }
    document.getElementById("txtResult2").innerHTML = "Mã khách hàng: " + idClient + "<br>Tiền cáp: $" + tienCap.toFixed(2);
}

document.getElementById("btnTinh2").onclick = tinhTienCap;

document.getElementById("styleCustomer").onchange = function () {
    var style = document.getElementById("styleCustomer").value;
    switch (style) {
        case "N":
            document.getElementById("show").style.display="none";
            break;
        case "D":
            document.getElementById("show").style.display="block";
            break;
        default:
            document.getElementById("show").style.display="none";
            break;
    }
};