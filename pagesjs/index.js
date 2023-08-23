import navbar from "../components/nav.js";
document.getElementById("navbar").innerHTML = navbar()

const display = (data) => {
    data.map((product) => {
      let img = document.createElement("img");
      img.src = product.image;
      let title = document.createElement("h3");
      title.innerHTML = product.title;
      let price = document.createElement("p");
      price.innerHTML = product.price;
      let category = document.createElement("p");
      category.innerHTML = product.category;
      let rating = document.createElement("span");
      rating.innerHTML = product.rating.rate;
      if (product.rating.rate > 4) {
        rating.style.color = "green";
      } else if (product.rating.rate <= 4 && product.rating.rate >= 3) {
        rating.style.color = "yellow";
      } else {
        rating.style.color = "red";
      }
      let btn = document.createElement("button");
      btn.innerHTML ="Buy Now"
      let div = document.createElement("div");
      div.append(img,title,category,price,rating,btn);
      document.getElementById("box2").append(div)
    })
   
  };
  
  const get = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((response) => display(response));
  };
  get();