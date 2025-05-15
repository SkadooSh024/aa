import { products } from "./data.js";

// hiện danh sách sản phẩm
const productList = document.querySelector(".list_product");
products.forEach((product) => {
  const productItem = document.createElement("div");
  productItem.classList.add("col", "l-3", "m-4", "c-6");
    productItem.setAttribute("id", product.id);
    productItem.innerHTML = `
            <a class="product-item" href="detail.html?id=${product.id} class="button"">
                <div class="product-item__img" style="background-image: url(${product.img});"></div>
                <h4 class="product-item__name">${product.name}</h4>
                <div class="product-item__price">
                    <span class="product-item__price-old">${product.price_old}</span>

                    <span class="product-item__price-current">${product.price_current}</span>
                </div>

                <div class="product-item__action">
                    <span class="product-item__like">
                        <i class="far fa-heart"></i>
                    </span>
                    <div class="product-item__rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <span class="product-item__buy" href="#">Mua ngay</span>
                <div class="product-item__origin">
                    <span class="product-item__brand">${product.brand}</span>
                    <span class="product-item__origin-name">${product.origin}</span>
                </div>
            </a>
    `;
  productList.appendChild(productItem);
});

