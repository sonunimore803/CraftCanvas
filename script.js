// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Initialize cart count from localStorage or set to 0
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    updateCartCount();

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add click event to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Increase the cart count
            cartCount++;
            // Save the new count to localStorage
            localStorage.setItem('cartCount', cartCount);
            // Update the number displayed on the page
            updateCartCount();
            
            // Optional: Show a quick message (you can improve this later)
            alert('Product added to cart!');
        });
    });

    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
    }

});
