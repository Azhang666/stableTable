let getAlertGroup = document.querySelector(".alertGroup");
//mobile side Navbar
let sideNavbtn = document.querySelector("#Collapse");
let sideNavCloseBtn = document.querySelector("#closeNav");
let nav = document.querySelector("#sideNav");
sideNavbtn.addEventListener("click", () => {
  nav.style.display = "block";
});
sideNavCloseBtn.addEventListener("click", () => {
  nav.style.display = "none";
});
//Navbar shadow
let navShadow = document.querySelector(".myShadow");
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    navShadow.style.boxShadow = "";
  } else {
    navShadow.style.boxShadow = "0px 10px 10px -6px #3c3b3bbb";
  }
});
//login Visibility
let modal = document.getElementById("id01");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  location.reload();
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let closeJJ = document.querySelector(".closeJJ");
let cancelbtn = document.querySelector(".cancelbtnJJ");
closeJJ.addEventListener("click", () => {
  location.reload();
});
cancelbtn.addEventListener("click", () => {
  location.reload();
});
// Signup Visibility
let signUp = document.getElementById("signUp");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == signUp) {
    signUp.style.display = "none";
  }
};
let cancelbtnJs = document.querySelector(".cancelbtnJs");
let closeJS = document.querySelector(".closeJS");
cancelbtnJs.addEventListener("click", () => {
  location.reload();
});
closeJS.addEventListener("click", () => {
  location.reload();
});
//login password Visibility
let loGinPwdShow = document.querySelector(".login-chb-pwd");
loGinPwdShow.addEventListener("click", () => {
  let getTypePassword = document.querySelectorAll("#login-pwd");
  passWordVisibility(getTypePassword);
});
//sinup password Visibility
let sinUpPwdShow = document.querySelector(".sinup-chb-pwd");
sinUpPwdShow.addEventListener("click", () => {
  let getTypePassword = document.querySelectorAll(".ipt-pwd-show");
  passWordVisibility(getTypePassword);
});
//password Visibility function
function passWordVisibility(event) {
  for (let i = 0; i < event.length; i++) {
    if (event[i].type === "password") {
      event[i].type = "text";
    } else {
      event[i].type = "password";
    }
  }
}
//Visibility Caps Lock is On for login and sinup password
// Get the input field
let loginPwd = document.querySelector("#login-pwd");
let allPasswordInput = document.querySelector(".all-password-input");
let repeatPasswordInput = document.querySelector(".repeat-password-input");
// Get the warning P
let showCapsLockInfo = document.getElementById("show-caps-lock-info");
let getShowP = document.querySelector(".show-caps-lock-inpassword");
let getShowPRe = document.querySelector(".show-caps-lock-inrepassword");
// When the user presses any key on the keyboard, run the function
allPasswordInput.addEventListener("keyup", function (event) {
  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    getShowP.style.display = "block";
  } else {
    getShowP.style.display = "none";
  }
});
repeatPasswordInput.addEventListener("keyup", function (event) {
  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    getShowPRe.style.display = "block";
  } else {
    getShowPRe.style.display = "none";
  }
});
loginPwd.addEventListener("keyup", function (event) {
  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    showCapsLockInfo.style.display = "block";
  } else {
    showCapsLockInfo.style.display = "none";
  }
});
//Password Validation
let myInput = document.getElementById("sinup-psw");
let repeatPwd = document.getElementById("sinup-repeat-pwd");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let getRepeatP = document.getElementById("repeat");
// When the user clicks on the password field, show the message box
myInput.onfocus = () => {
  document.getElementById("message").style.display = "block";
};
repeatPwd.onfocus = () => {
  document.getElementById("message").style.display = "block";
};
// When the user clicks outside of the password field, hide the message box
myInput.onblur = () => {
  document.getElementById("message").style.display = "none";
};
repeatPwd.onblur = () => {
  document.getElementById("message").style.display = "none";
};
// When the user starts to type something inside the password field
repeatPwd.onkeyup = () => {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  //Repeat Password
  if (myInput.value == repeatPwd.value && myInput.value != "") {
    getRepeatP.classList.remove("invalid");
    getRepeatP.classList.add("valid");
  } else {
    getRepeatP.classList.remove("valid");
    getRepeatP.classList.add("invalid");
  }
};
myInput.onkeyup = () => {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  //Repeat Password
  if (myInput.value == repeatPwd.value && myInput.value != "") {
    getRepeatP.classList.remove("invalid");
    getRepeatP.classList.add("valid");
  } else {
    getRepeatP.classList.remove("valid");
    getRepeatP.classList.add("invalid");
  }
};
//localStorge and Validate for sinup password and email
let accountNumber = document.getElementById("account-number");
let requiredBtn = document.getElementById("required");
requiredBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkValidatePwd();
});
function checkValidatePwd() {
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  if (
    myInput.value.match(lowerCaseLetters) &&
    myInput.value.match(upperCaseLetters) &&
    myInput.value.match(numbers) &&
    myInput.value.length >= 8 &&
    myInput.value == repeatPwd.value &&
    myInput.value != ""
  ) {
    localStorage.setItem("account", JSON.stringify(accountNumber.value));
    localStorage.setItem("pwd", JSON.stringify(myInput.value));
    signUp.style.display = "none";
    localStorage.setItem("loginAccss", "no");
    alertGroup("success", "創立成功!歡迎加入");
  } else {
    alertGroup("danger", "您設定的密碼未與條件符合!請重新輸入!");
  }
}
//login pwd and email ,use localStorage

let getAccount = JSON.parse(localStorage.getItem("account"));
let getPwd = JSON.parse(localStorage.getItem("pwd"));
let getLoginAccss = localStorage.getItem("loginAccss");
//login acc and pwd of Validate
let loginAccount = document.querySelector("#login-account");
let loginBtn = document.querySelector("#login-btn");
let getLoginIcon = document.querySelector("#a-login");
let getSideLoginIcon = document.querySelector(".a-login");
let getLoginOutIcon = document.querySelector("#a-login-out");
let getSideLoginOutIcon = document.querySelector(".a-login-out");
loginBtn.addEventListener("click", () => {
  if (getAccount == loginAccount.value && getPwd == loginPwd.value) {
    getLoginIcon.classList.remove("dp");
    getLoginIcon.classList.add("ndp");
    getLoginOutIcon.classList.remove("ndp");
    getLoginOutIcon.classList.add("dp");
    getSideLoginIcon.classList.remove("dp");
    getSideLoginIcon.classList.add("ndp");
    getSideLoginOutIcon.classList.remove("ndp");
    getSideLoginOutIcon.classList.add("dp");
    localStorage.setItem("loginAccss", "ok");
    modal.style.display = "none";
    nav.style.display = "none";
    alertGroup("success", "登入成功!");
  } else if (loginAccount.value == "") {
    modal.style.display = "none";
    alertGroup("danger", "請輸入帳號!");
  } else if (loginPwd.value == "") {
    modal.style.display = "none";
    alertGroup("danger", "請輸入密碼!");
  } else if (getAccount == null || getAccount != loginAccount.value) {
    modal.style.display = "none";
    alertGroup("danger", "尚未申辦帳號!");
  } else if (getPwd != loginPwd.value) {
    modal.style.display = "none";
    alertGroup("danger", "密碼錯誤!");
  }
});
getLoginOutIcon.addEventListener("click", () => {
  getLoginIcon.classList.remove("ndp");
  getLoginIcon.classList.add("dp");
  getLoginOutIcon.classList.remove("dp");
  getLoginOutIcon.classList.add("ndp");
  localStorage.setItem("loginAccss", "no");
  alertGroup("info", "成功登出!");
});
getSideLoginOutIcon.addEventListener("click", () => {
  getSideLoginIcon.classList.remove("ndp");
  getSideLoginIcon.classList.add("dp");
  getSideLoginOutIcon.classList.remove("dp");
  getSideLoginOutIcon.classList.add("ndp");
  localStorage.setItem("loginAccss", "no");
  alertGroup("info", "成功登出!");
});
if (getLoginAccss == "no") {
  getLoginIcon.classList.remove("ndp");
  getLoginIcon.classList.add("dp");
  getLoginOutIcon.classList.remove("dp");
  getLoginOutIcon.classList.add("ndp");
  getSideLoginIcon.classList.remove("ndp");
  getSideLoginIcon.classList.add("dp");
  getSideLoginOutIcon.classList.remove("dp");
  getSideLoginOutIcon.classList.add("ndp");
} else {
  getLoginIcon.classList.remove("dp");
  getLoginIcon.classList.add("ndp");
  getLoginOutIcon.classList.remove("ndp");
  getLoginOutIcon.classList.add("dp");
  getSideLoginIcon.classList.remove("dp");
  getSideLoginIcon.classList.add("ndp");
  getSideLoginOutIcon.classList.remove("ndp");
  getSideLoginOutIcon.classList.add("dp");
}

//check shop car of object and change shop icon
let getProduct = JSON.parse(localStorage.getItem("manyProduct"));
let getAllShopNoFillIcon = document.querySelectorAll(".shop-no-fill-icon");
let getAllShopFillIcon = document.querySelectorAll(".shop-fill-icon");
if (getProduct == null || getLoginAccss == "no") {
  getAllShopNoFillIcon.forEach((shopNoFillIcon) => {
    shopNoFillIcon.classList.remove("ndp");
    shopNoFillIcon.classList.add("dp");
  });
  getAllShopFillIcon.forEach((shopFillIcon) => {
    shopFillIcon.classList.remove("dp");
    shopFillIcon.classList.add("ndp");
  });
} else {
  getAllShopNoFillIcon.forEach((shopNoFillIcon) => {
    shopNoFillIcon.classList.remove("dp");
    shopNoFillIcon.classList.add("ndp");
  });
  getAllShopFillIcon.forEach((shopFillIcon) => {
    shopFillIcon.classList.remove("ndp");
    shopFillIcon.classList.add("dp");
  });
}
//alertGroup (("default","danger","info","success"),("meseege"))
function alertGroup(changeClass, text) {
  let setDiv = document.createElement("div");
  setDiv.classList.add(changeClass);
  setDiv.innerHTML = `<p
  class="closebtn"
  onclick="this.parentElement.parentElement.style.display='none';
  this.parentElement.remove();
  location.reload();"
>
  &times;
</p>
<p class="alert-text">${text}</p>`;
  getAlertGroup.appendChild(setDiv);
  getAlertGroup.style.display = "block";
}
//if loginAccss is null
if (getLoginAccss == null) {
  getLoginIcon.classList.remove("ndp");
  getLoginIcon.classList.add("dp");
  getLoginOutIcon.classList.remove("dp");
  getLoginOutIcon.classList.add("ndp");
  getSideLoginIcon.classList.remove("ndp");
  getSideLoginIcon.classList.add("dp");
  getSideLoginOutIcon.classList.remove("dp");
  getSideLoginOutIcon.classList.add("ndp");
  localStorage.setItem("loginAccss", "no");
}
//nLocker
let nAllLock = document.querySelectorAll(".n-lock");
nAllLock.forEach((nLock) => {
  nLock.addEventListener("click", () => {
    alertGroup("default", "更新中～敬請期待！");
  });
});
