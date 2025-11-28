
let btn = document.getElementById("btn");
let coupon = document.getElementById("coupon");

function copy(){
    coupon.select();
    coupon.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(coupon.value);
    btn.textContent = "Copied!";
    setTimeout(() => {
        btn.textContent = "Copy";
    }, 2000);
}



