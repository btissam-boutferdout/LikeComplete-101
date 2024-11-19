const Product = [
  {
    image: "imges/1.jpg",
    name: {
      big: "Pink Flowers",
      small: "Delicate and enchanting",
    },
    price: {
      old: 6912,
      new: 5999,
    },
  },
  {
    image: "imges/2.jpg",
    name: {
      big: "Bouquet Classique",
      small: "floewrs romantic",
    },
    price: {
      old: 5912,
      new: 4999,
    },
  },
  {
    image: "imges/3.jpg",
    name: {
      big: "Bouquet Purple",
      small: "Elegant and regal",
    },
    price: {
      old: 8298,
      new: 5099,
    },
  },
  {
    image: "imges/4.jpg",
    name: {
      big: "Fuchia Pink",
      small: "Fleurs rose simple",
    },
    price: {
      old: 5512,
      new: 3999,
    },
  },
  {
    image: "imges/5.jpg",
    name: {
      big: "Imagination vibes",
      small: "cute colors",
    },
    price: {
      old: 6950,
      new: 5993,
    },
  },
  {
    image: "imges/6.jpg",
    name: {
      big: "Bouquet Romantic",
      small: "Flowers passion",
    },
    price: {
      old: 9912,
      new: 8999,
    },
  },
  {
    image: "imges/7.jpg",
    name: {
      big: "Blue flowers",
      small: "emanate a tranquil and calming aura",
    },
    price: {
      old: 8921,
      new: 7998,
    },
  },
  {
    image: "imges/8.jpg",
    name: {
      big: "Light blue flowers",
      small: ">essence of serenity and freshness",
    },
    price: {
      old: 6500,
      new: 5599,
    },
  },
];
//console.log(Product);
//Generate Html
let ProductHtml = "";
Product.forEach((Product) => {
  ProductHtml += `
  <div class="mather-div js-product-grid">
        <img class="img-div" src="${Product.image}" />
        <p class="para-div"><strong>${Product.name.big} </strong></p>
        <p class="para-gray">${Product.name.small}</p>
        <p>
          <del class="old-price">${Product.price.old / 100}MAD</del>
          <span class="new-price"><strong>${
            Product.price.new / 100
          }MAD</strong></span>
        </p>
        <button class="button-div">View Details</button>
      </div>
  `;
});
//console.log(ProductHtml);
document.querySelector(".js-product-grid").innerHTML = ProductHtml;
