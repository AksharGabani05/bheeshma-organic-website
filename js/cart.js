import nav from "../components/nav2.js";

document.getElementById("nav").innerHTML = nav();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalprice = 0;
cart.map((ele) => {
  totalprice += ele.price * ele.qty * 10;
});
// let show =(value)=>{
//  console.log(value);
//  document.getElementById("cartpage").innerHTML="";
// cart.map((ele, index) => {
// let div = document.createElement("div");
// let image = document.createElement("img");
// image.src = ele.image;
// let title = document.createElement("h3");
// title.innerHTML = ele.title;
// let price = document.createElement("p");
// price.innerHTML = `${ele.price * 10}$`;
// let btn1 = document.createElement("button");
// btn1.innerHTML = "-";
// let btn2 = document.createElement("button");
// price.setAttribute("class", "price");

// let noq = document.createElement("span");
// noq.innerHTML = ele.qty;

//  btn2.setAttribute("class","btn2")
// div.append(image, title, price, btn1, noq, btn2);
// document.getElementById("cartpage").append(div);
// });
// document.querySelector(".code").addEventListener("keypress", (e) => {
//   console.log(e.key);
//   if (e.key == "ENTER") {
//     //   let value = document.querySelector(".code").value;
//     let temp = cart.filter((val) => val.title == NENSI);

//     console.log(temp);
//   }
// });
// }
// show(cart)

// console.log(cart);
// document.querySelector("price").innerHTML=`Total ${totalprice}$`

// console.log(price);
// console.log(totalprice);

{
  /* <section>
<div class="main-div">
<div class="img-div">
<img src="" alt="">
</div>
<div class="texts">
<h3>name</h3>
<p>price</p>
</div>
<div class="plus-minse">
<button>-</button>
<button>-</button>
</div></div>
</section> */
}

// let show=()=>{

// }

let show = (cart) => {
  cart.map((ele, index) => {
    let maindiv = document.createElement("div");
    let imgdiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = ele.image;
    let texts = document.createElement("div");
    let title = document.createElement("h3");
    title.innerHTML = ele.title;
    let minse = document.createElement("button");
    minse.innerHTML = "-";
    let price1 = document.createElement("p");
    price1.innerHTML = `${ele.price * 10}$`;
    let plusminse = document.createElement("div");

    
    let noq = document.createElement("button");
    noq.innerHTML = ele.qty;
    let plus = document.createElement("button");
    plus.innerHTML = "+";

    imgdiv.append(image);
    texts.append(title, price1);
    plusminse.append(minse, noq, plus);
    maindiv.append(imgdiv, texts, plusminse);
    document.getElementById("cartpage").append(maindiv);

    price1.setAttribute("class", "price1");
    maindiv.setAttribute("class", "maindiv");
    imgdiv.setAttribute("class", "imgdiv");
    texts.setAttribute("class", "texts");
    plusminse.setAttribute("class", "plusminse");

    minse.addEventListener("click", () => {
      console.log(ele);
      let qty = cart[index].qty;
      if (qty == 1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));

        console.log(cart);
        window.location.reload();
      } else {
        cart[index].qty -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
      }
    });
    plus.addEventListener("click", () => {
      console.log("test");
      cart[index].qty += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.reload();
    });
  });
};
show(cart);

let show2 = () => {
  let maindiv2 = document.createElement("div");
  let lable = document.createElement("label");
  lable.innerHTML = "PROMO CODE:";
  let lable2 = document.createElement("label");
  lable2.innerHTML = "TOTAL PRICE:";
  let promocode = document.createElement("input");
  promocode.placeholder = "enter your promo code";
  promocode.setAttribute("class", "promocode");
  let disprice = document.createElement("p")
  
  let apply = document.createElement("submit");
  apply.innerHTML = "Apply";
  apply.setAttribute("class", "apply");
  maindiv2.append(lable, promocode, apply);
  document.getElementById("other").append(maindiv2);
  document.getElementById("price").append(lable2, totalprice);

  maindiv2.setAttribute("class", "maindiv2");
  // totalprice.setAttribute("class","totalprice")
  lable.setAttribute("class", "lable");
  promocode.addEventListener("keypress", (e) => {
    // e.key()
    console.log(e.key);
    if (e.key == "Enter") {
      console.log(promocode.value);
      if (promocode.value == "akshar945") {
        totalprice -= (totalprice / 100) * 20;
        console.log(totalprice);
        disprice.innerHTML=`Final price :${totalprice}`
        maindiv2.append(disprice)
        disprice.setAttribute("class","disprice")
      }
    }
  });

  // let price=""

  // for(let i=1;i<totalprice.length;i++){
  // price+=totalprice[i]
  // }
  // document.getElementById("price").append(price);

  
};
show2();


