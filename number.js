// 數字千分位
function FormatNumber(n) {
    n += "";
    let arr = n.split(".");
    let re = /(\d{1,3})(?=(\d{3})+$)/g;
    return arr[0].replace(re, "$1,") + (arr.length == 2 ? "." + arr[1] : "");
}