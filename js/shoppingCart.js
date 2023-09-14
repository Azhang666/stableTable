//get Login Accss
let getLoginAccssShop = localStorage.getItem("loginAccss");
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
//get localStorage input for shopping car
let setProduct = JSON.parse(localStorage.getItem("manyProduct"));
let getForm = document.querySelector(".setProduct");
let priceTotal = 0;
//the function set product in shopping car
function setProductInShopCar(img, title, price) {
  let newProduct = document.createElement("div");
  newProduct.setAttribute("class", "productContent");
  newProduct.innerHTML = `<div class="row align-items-center">
<div class="col-md-3 col-sm-6 col-12">
  <img
    class="productImg"
    src="${img}"
  />
</div>
<div class="col-md-4 col-sm-6 col-12">
  <h2 class="productTitle">${title}</h2>
</div>

<div class="col-md-2 col-12 mb-md-0 mb-3 my-fS">
  數量:
  <select
    name="quantity"
    class="form-select quantity"
    aria-label=".form-select-sm example"
  >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
  </select>
</div>

<div class="col-md-1 col-6 text-md-center text-start">
<i class="bi bi-currency-dollar"></i>  
<span class="productPrice" data-price="${price}"
    >${price}</span
  >
  
</div>
<div class="col-md-2 col-6 text-end">
  <button type="button" class="removeProduct btn btn-danger">
    移除商品
  </button>
</div>
</div>`;
  getForm.appendChild(newProduct);
  reNewPriceTotal();
}
//查詢是否有登入有物件在載入
if (getLoginAccssShop == "no") {
  new AlertGroup("danger", "請先登入!").alertInTheIndex();
} else if (setProduct == null) {
  new AlertGroup("info", "購物車目前是空的").alertInTheProduct();
  reNewPriceTotal();
} else {
  setProduct.forEach((newProduct) => {
    setProductInShopCar(newProduct.img, newProduct.title, newProduct.price);
  });
}
//quantity*price=one Product Price
let getAllSelect = document.querySelectorAll(".quantity");
getAllSelect.forEach((getSelect) => {
  getSelect.addEventListener("change", (e) => {
    let total = 0;
    total =
      Number(getSelect.value) *
      Number(
        e.target.parentElement.parentElement.children[3].children[1].getAttribute(
          "data-price"
        )
      );
    e.target.parentElement.parentElement.children[3].children[1].innerText =
      total;
    reNewPriceTotal();
  });
});
//priceTotal 和判斷購物車是否有物件
let setpriceTotal = document.querySelector(".priceTotal");

function reNewPriceTotal() {
  let setpriceTotal = document.querySelector(".priceTotal");
  let getAllproductPrice = document.querySelectorAll(".productPrice");
  let total = 0;
  getAllproductPrice.forEach((AllproductPrice) => {
    total += Number(AllproductPrice.textContent);
    setpriceTotal.innerText = total;
  });
  if (setpriceTotal.textContent == "") {
    setpriceTotal.innerText = "0";
    localStorage.removeItem("manyProduct");
  }
}

//removeProduct
let removeAllProduct = document.querySelector(".remove-all-product");
let getRmProductBtn = document.querySelectorAll(".removeProduct");
getRmProductBtn.forEach((removeProductBtn) => {
  removeProductBtn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
    reNewLocalStorageOfRemove();
    reNewPriceTotal();
    location.reload();
  });
});
removeAllProduct.addEventListener("click", () => {
  localStorage.removeItem("manyProduct");
  reNewPriceTotal();
  location.reload();
});
function reNewLocalStorageOfRemove() {
  let allProductImg = document.querySelectorAll(".productImg");
  let allProductTitle = document.querySelectorAll(".productTitle");
  let allProductPrice = document.querySelectorAll(".productPrice");
  let allShopCarProduct = [];
  for (let i = 0; i < allProductImg.length; i++) {
    allShopCarProduct.push({
      img: allProductImg[i].src,
      title: allProductTitle[i].textContent,
      price: allProductPrice[i].getAttribute("data-price"),
    });
  }
  localStorage.setItem("manyProduct", JSON.stringify(allShopCarProduct));
}
//check shop car of object and change shop icon
let getProductForUseChange2 = JSON.parse(localStorage.getItem("manyProduct"));
let getAllShopNoFillIcon2 = document.querySelectorAll(".shop-no-fill-icon");
let getAllShopFillIcon2 = document.querySelectorAll(".shop-fill-icon");
if (getProductForUseChange2 == null) {
  getAllShopNoFillIcon2.forEach((shopNoFillIcon) => {
    shopNoFillIcon.classList.remove("ndp");
    shopNoFillIcon.classList.add("dp");
  });
  getAllShopFillIcon2.forEach((shopFillIcon) => {
    shopFillIcon.classList.remove("dp");
    shopFillIcon.classList.add("ndp");
  });
} else if (getProductForUseChange2.length == 0) {
  getAllShopNoFillIcon2.forEach((shopNoFillIcon) => {
    shopNoFillIcon.classList.remove("ndp");
    shopNoFillIcon.classList.add("dp");
  });
  getAllShopFillIcon2.forEach((shopFillIcon) => {
    shopFillIcon.classList.remove("dp");
    shopFillIcon.classList.add("ndp");
  });
  setpriceTotal.innerText = "0";
  localStorage.removeItem("manyProduct");
  location.reload();
}
//pay(Checkout Form) Visibility
let getPayBtn = document.querySelector(".pay");
let getCheckoutFormGroup = document.querySelector(".checkout-form-group");
let getAllInput = document.querySelectorAll(".getInput");
getPayBtn.addEventListener("click", () => {
  if (getProductForUseChange2 == null) {
    new AlertGroup("danger", "購物車裡沒有商品").alertOfNoReload();
  } else {
    getCheckoutFormGroup.style.display = "block";
  }
});
let getCheckoutBtn = document.querySelector(".checkout-btn");
getCheckoutBtn.addEventListener("click", () => {
  for (let i = 0; i < getAllInput.length; i++) {
    if (getAllInput[i].value == "") {
      new AlertGroup("danger", "請輸入完整的付款內容!").alertOfNoReload();
      return;
    }
  }
  getCheckoutFormGroup.style.display = "none";
  localStorage.removeItem("manyProduct");
  new AlertGroup("success", "付款成功!").alertOfReload();
});
let checkoutCancelBtn = document.querySelector(".cancel-btn");
checkoutCancelBtn.addEventListener("click", () => {
  getCheckoutFormGroup.style.display = "none";
  location.reload();
});
