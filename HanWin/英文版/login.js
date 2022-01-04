function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    // if (username.value == "") {
    //     alert("請輸入帳號");
    // } else if (pass.value == "") {
    //     alert("請輸入密碼");
    // } else if (username.value == "admin@123456" && pass.value == "123456") {
    //     window.location.href = "index.html";
    // } else {
    //     alert("請輸入正確的帳號和密碼！")
    // }
    if (username.value == "") {
        alert("Please enter your account");
    } else if (pass.value == "") {
        alert("Please enter your password");
    }
    else if (username.value == "admin@123456" && pass.value == "123456") {
        window.location.href = "index.html"
    } else {
        alert("Please enter the correct account number and password");
    }
}