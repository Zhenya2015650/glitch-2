const send_button = document.querySelector(".bu");

if (send_button) {
    send_button.addEventListener("click", function () {
        alert("Personal data send");
    });
}
// Додавання товару в кошик
const buyButtons = document.querySelectorAll(".buy");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const article = button.parentElement;

        const product = {
            name: article.querySelectorAll("h1")[0].textContent,
            price: article.querySelectorAll("h1")[1].textContent,
            image: article.querySelector("img").src
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        window.location.href = "cart.html";
    });
});

// Відображення кошика
if (window.location.pathname.includes("cart.html")) {
    const cartContainer = document.querySelector("main");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<h2>Cart is empty</h2>";
    } else {
        cart.forEach((item, index) => {
            cartContainer.innerHTML += `
                <article>
                    <img src="${item.image}" width="170" height="170">
                    <h2>${item.name}</h2>
                    <p>${item.price}</p>
                    <button onclick="removeItem(${index})">Видалити</button>
                </article>
            `;
        });

        cartContainer.innerHTML += `
            <br>
            <button class="cart" onclick="clearCart()">Очистити корзину</button>
        `;
    }
}

// Видалити один товар
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// Очистити корзину
function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}
const mySwiper= new Swiper ('.swiper',{
    loop:true,
    slidesPerView:2,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
});