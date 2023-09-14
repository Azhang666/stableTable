//alert group
let getAlertGroupShop = document.querySelector(".alertGroup");
class AlertGroup {
  constructor(changeClass, text) {
    this.changeClass = changeClass;
    this.text = text;
  }
  //alertGroup (("default","danger","info","success"),("meseege"))
  alertOfReload() {
    let setDiv = document.createElement("div");
    setDiv.classList.add(this.changeClass);
    setDiv.innerHTML = `<p
  class="closebtn"
  onclick="this.parentElement.parentElement.style.display='none';
  this.parentElement.remove();
  location.reload();"
>
  &times;
</p>
<p class="alert-text">${this.text}</p>`;
    getAlertGroupShop.appendChild(setDiv);
    getAlertGroupShop.style.display = "block";
  }
  alertOfNoReload() {
    let setDiv = document.createElement("div");
    setDiv.classList.add(this.changeClass);
    setDiv.innerHTML = `<p
    class="closebtn"
    onclick="this.parentElement.parentElement.style.display='none';
    this.parentElement.remove();"
  >
    &times;
  </p>
  <p class="alert-text">${this.text}</p>`;
    getAlertGroupShop.appendChild(setDiv);
    getAlertGroupShop.style.display = "block";
  }
  alertInTheIndex() {
    let setDiv = document.createElement("div");
    setDiv.classList.add(this.changeClass);
    setDiv.innerHTML = `<p
    class="closebtn"
    onclick="this.parentElement.parentElement.style.display='none';
    this.parentElement.remove();
    location.href='/index.html';"
  >
    &times;
  </p>
  <p class="alert-text">${this.text}</p>`;
    getAlertGroupShop.appendChild(setDiv);
    getAlertGroupShop.style.display = "block";
  }
  alertInTheProduct() {
    let setDiv = document.createElement("div");
    setDiv.classList.add(this.changeClass);
    setDiv.innerHTML = `<p
    class="closebtn"
    onclick="this.parentElement.parentElement.style.display='none';
    this.parentElement.remove();
    location.href='/product.html';"
  >
    &times;
  </p>
  <p class="alert-text">${this.text}</p>`;
    getAlertGroupShop.appendChild(setDiv);
    getAlertGroupShop.style.display = "block";
  }
  alertForCheckOut() {
    let setDiv = document.createElement("div");
    setDiv.classList.add(this.changeClass);
    setDiv.innerHTML = `<p
    class="closebtn"
    onclick="this.parentElement.parentElement.style.display='none';
    this.parentElement.remove();
    location.href='/product.html';"
  >
    &times;
  </p>
  <p class="alert-text">${this.text}</p>`;
    getAlertGroupShop.appendChild(setDiv);
    getAlertGroupShop.style.display = "block";
  }
}
//mainSideNav
function openProduct(event, product) {
  // Declare all variables
  let i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(product).style.display = "block";
  event.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//shopping cart
let shoppingCartBtn = document.querySelectorAll(".productShop");
//get product cantenct
let getManyProduct;
if (JSON.parse(localStorage.getItem("manyProduct")) == null) {
  getManyProduct = [];
} else {
  getManyProduct = JSON.parse(localStorage.getItem("manyProduct"));
}
shoppingCartBtn.forEach((shoppingCartBtn) => {
  shoppingCartBtn.addEventListener("click", (e) => {
    let getLoginAccssShop = localStorage.getItem("loginAccss");
    if (getLoginAccssShop == "no") {
      let getAHref = document.querySelector(".returnforindex");
      new AlertGroup("danger", "請先登入!").alertOfReload();
    } else {
      let getProduct = {};
      getProduct["img"] = e.target.parentElement.children[0].src;
      getProduct["title"] = e.target.parentElement.children[1].textContent;
      getProduct["price"] =
        e.target.parentElement.children[3].children[1].textContent;
      getManyProduct.push(getProduct);
      localStorage.setItem("manyProduct", JSON.stringify(getManyProduct));
      //check shop car of object and change shop icon
      let getProductForUseChange = JSON.parse(
        localStorage.getItem("manyProduct")
      );
      let getAllShopNoFillIcon =
        document.querySelectorAll(".shop-no-fill-icon");
      let getAllShopFillIcon = document.querySelectorAll(".shop-fill-icon");
      if (getProductForUseChange == null) {
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
      new AlertGroup("info", "已加入購物車").alertOfNoReload();
    }
  });
});
//main side for madia Visibility
let mainSideForMadia = document.querySelector(".main-side-for-madia");
let mainSideNavBtn = document.querySelector(".ctrl-main-side");
let cancleMainSide = document.querySelector(".cancle-main-side");
let getMainSideCtrl = document.querySelector(".main-side-for-madia-ctrl");
let screenY = 0;
mainSideNavBtn.addEventListener("click", () => {
  mainSideForMadia.style.display = "block";
  getMainSideCtrl.style.display = "none";
});
cancleMainSide.addEventListener("click", () => {
  mainSideForMadia.style.display = "none";
  getMainSideCtrl.style.display = "block";
});
let lastKnownScrollPosition = 0;
let ticking = false;
function doVisibility() {
  mainSideForMadia.style.display = "none";
  getMainSideCtrl.style.display = "block";
}
document.addEventListener("scroll", function () {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doVisibility();
      ticking = false;
    });

    ticking = true;
  }
});
