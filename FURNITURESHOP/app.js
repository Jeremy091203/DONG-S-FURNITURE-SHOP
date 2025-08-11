const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuItem");

// Product data
const products = [
  {
    id: 1,
    title: "Modular Fabric Sofa with Extendable Seat COLLECTION",
    price: 1599,
    colors: [
      { code: "skyblue", img: "img/Product/屏幕截图 2025-08-10 162607.png" },
    ],
  },
  {
    id: 2,
    title: "Fabric / Leather Armchair",
    price: 1049,
    colors: [
      { code: "gray", img: "img/Product/屏幕截图 2025-08-10 163525.png" },
    ],
  },
  {
    id: 3,
    title: "Modern Coffee Table",
    price: 899,
    colors: [
      { code: "gray", img: "img/Product/D689-50-ANGLE-SW-P1-KO.png" },
    ],
  },
  {
    id: 4,
    title: "Queen Bed",
    price: 3499,
    colors: [
      { code: "gray", img: "img/Product/Forli-Queen-Cassia-04-1-768x768.png" },
    ],
  },
  {
    id: 5,
    title: "Outdoor Lounge Set",
    price: 1299,
    colors: [
      { code: "black", img: "img/Product/Patio_3-Piece_Outdoor_Lounge_Set.png" },
    ],
  },
];

let currentIndex = 0;
let choosenProduct = products[currentIndex];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
let currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Update color options
function updateColorOptions() {
  currentProductColors = document.querySelectorAll(".color");
  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index]?.code || "#ccc";
    const newColor = color.cloneNode(true);
    color.parentNode.replaceChild(newColor, color);

    newColor.addEventListener("click", (() => {
      return () => {
        currentProductImg.src = choosenProduct.colors[index].img;
      };
    })(index));
  });
}

// Update product section
function updateProduct(index) {
  choosenProduct = products[index];
  currentProductTitle.textContent = choosenProduct.title;
  currentProductPrice.textContent = "RM" + choosenProduct.price;
  currentProductImg.src = choosenProduct.colors[0].img;
  updateColorOptions();
}

// Initialize with the first product
updateProduct(currentIndex);

// Menu item click: change slide and product
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    updateProduct(index);
  });
});

// Size selection (if any)
if (currentProductSizes) {
  currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((s) => {
        s.style.backgroundColor = "white";
        s.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
}

// Optional: Prev/Next buttons (if you add them)
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;
    updateProduct(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % products.length;
    wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;
    updateProduct(currentIndex);
  });
}

// Payment modal (if defined in your HTML/CSS)
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

if (productButton && payment && close) {
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
    payment.scrollIntoView({ behavior: "smooth" });
  });

  close.addEventListener("click", () => {
    payment.style.display = "none";
  });
}
