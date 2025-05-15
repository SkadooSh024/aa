import { products } from "./data.js";

// Lấy id sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"), 10);
const product = products.find((p) => p.id === productId);

// Tìm thấy sản phẩm thì hiển thị chi tiết sản phẩm
if (product) {
  const productDetail = document.querySelector(".product-detail-item");
  productDetail.innerHTML = `
        <div class="col l-6 m-12 c-12">
            <div class="product-detail__img" style="background-image: url(${product.img});"></div>
        </div>
        <div class="col l-6 m-12 c-12">
            <div class="product-detail__content">
                <h1 class="product-detail__heading">${product.name}</h1>
                <div class="product-detail__price">
                    <p class="product-detail__price-new">Giá: ${product.price_current}</p>
                    <p class="product-detail__price-old">${product.price_old}</p>
                </div>
                <div class="product-detail__quantity">
                    <label class="quantity_label" for="">Số lượng: </label>
                    <button class="decrease-btn" type="button"><i class="fa-solid fa-minus"></i></button>
                    <input class="quantity" type="text" value="1">
                    <button class="increase-btn" type="button"><i class="fa-solid fa-plus"></i></button>
                </div>
                <button class="product-detail__btn">Thêm vào giỏ hàng</button>
                <h1 class="product-detail__sub-heading">Đặc điểm nổi bật</h1>
                <p class="product-detail__description">
                  ${product.description}
                </p>
                <h1 class="product-detail__sub-heading">Chất liệu - Thông số - Tiện lợi</h1>
                <p class="product-detail__description">
                ${product.specification}
                </p>

        </div>
    `;
} else {
  const productDetail = document.querySelector(".product-detail-item");
  productDetail.innerHTML = `<p>Product not found</p>`;
}

// Tăng giảm số lượng sản phẩm
const decrease = document.querySelector('.decrease-btn');
const increase = document.querySelector('.increase-btn');
const quantityInput = document.querySelector('.quantity'); 

// Sự kiện giảm số lượng
decrease.addEventListener('click', function () {
    let currentQuantity = parseInt(quantityInput.value, 10);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});

// Sự kiện tăng số lượng
increase.addEventListener('click', function () {
    let currentQuantity = parseInt(quantityInput.value, 10); 
    quantityInput.value = currentQuantity + 1; 
});