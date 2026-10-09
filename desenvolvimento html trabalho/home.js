let cartCount = 0;

const buttons = document.querySelectorAll(".buy-button");

const cart = document.getElementById("cartCount");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName =
            button.dataset.product;

        cartCount++;

        cart.textContent = cartCount;

        alert(
            productName +
            " foi adicionado ao carrinho!"
        );

    });

});
