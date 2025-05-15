const categoryLinks = document.querySelectorAll(".category-list a");

categoryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); 

        const productId = this.getAttribute("data-id");

        const productElement = document.getElementById(`${productId}`);

        if (productElement) {
            productElement.scrollIntoView({
                behavior: "smooth", 
                block: "start", 
            });
        }
    });
});