/**
 * Bài 1
 * Tính thuế thu nhập cá nhân
 */

function tinhTienThue() {
    var name = document.getElementById("name").value;
    var tongThuNhap = Number(document.getElementById("thuNhap").value);
    var numPeople = Number(document.getElementById("people").value);
    var chiuThue = tongThuNhap - 4e+6 - (numPeople * 1.6e+6);
    var tienThue = 0;
    if (chiuThue > 0 && chiuThue <= 60e+6) { 
        tienThue = chiuThue * 0.05;
    }
    else if (chiuThue > 60e+6 && chiuThue <= 120e+6) { 
        tienThue = chiuThue * 0.1;
    }
    else if (chiuThue > 120e+6 && chiuThue <= 210e+6) { 
        tienThue = chiuThue * 0.15;
    }
    else if (chiuThue > 210e+6 && chiuThue <= 384e+6) {
        tienThue = chiuThue * 0.2;
    }
    else if (chiuThue > 384e+6 && chiuThue <= 642e+6) {
        tienThue = chiuThue * 0.25;
    }
    else if (chiuThue > 624e+6 && chiuThue <= 960e+6) {
        tienThue = chiuThue * 0.3;
    }
    else if (chiuThue > 960e+6) {
        tienThue = chiuThue * 0.35;
    }
    else {
        alert("Số tiền không hợp lệ");
    }

    document.getElementById("txtResult1").innerHTML = "Chào bạn: " + name + "<br>Tổng tiền thuế: " + tienThue.toLocaleString() + " VND";
}

document.getElementById("btnTinh1").onclick = tinhTienThue;


// if (chiuThue > 0 && chiuThue <= 60e+6) { //60
//     tienThue = chiuThue * 0.05;
// }
// else if (chiuThue > 60e+6 && chiuThue <= 120e+6) { //60
//     tienThue = 60e+6 * 0.05 + (chiuThue - 60e+6) * 0.1;
// }
// else if (chiuThue > 120e+6 && chiuThue <= 210e+6) { //90
//     tienThue = 60e+6 * 0.05 + 60e+6 * 0.1 + (chiuThue - 120e+6) * 0.15;
// }
// else if (chiuThue > 210e+6 && chiuThue <= 384e+6) {//174
//     tienThue = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (chiuThue - 210e+6) * 0.2;
// }
// else if (chiuThue > 384e+6 && chiuThue <= 642e+6) {//258
//     tienThue = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (chiuThue - 384e+6) * 0.25;
// }
// else if (chiuThue > 624e+6 && chiuThue <= 960e+6) {//336
//     tienThue = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 258e+6 * 0.25 + (chiuThue - 624e+6) * 0.3;
// }
// else if (chiuThue > 960e+6) {
//     tienThue = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 258e+6 * 0.25 + 336e+6 * 0.3 + (chiuThue - 960e+6) * 0.35;
// }
// else {
//     alert("Số tiền không hợp lệ");
// }