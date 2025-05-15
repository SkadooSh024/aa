// Banner
const listBanner = document.querySelector('.home-list-banner');
const imgs = listBanner.getElementsByTagName('img');
const length = imgs.length; // Số lượng ảnh trong danh sách
let currentIndex = 0; 
setInterval(() => {
    if (currentIndex == length - 1) {
        currentIndex = 0; // Quay lại ảnh đầu tiên nếu vượt quá
        let width = imgs[0].offsetWidth;
        listBanner.style.transform = `translateX(0px)`; // Dịch chuyển sang trái 1 ảnh
    }
    else{
        currentIndex++;
        let width = imgs[0].offsetWidth;
        listBanner.style.transform = `translateX(-${width * currentIndex}px)`; // Dịch chuyển sang trái 1 ảnh
    }
}, 3000);

