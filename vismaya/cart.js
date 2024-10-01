const applyButton = document.querySelector('.apply-button');
const checkoutButton = document.querySelector('.checkout-button');

applyButton.addEventListener('click', updateCartTotal);
checkoutButton.addEventListener('click', () => {
    window.location.href = 'pembayaran.html';
});

function updateCartTotal() {
    const quantities = document.querySelectorAll('.quantity');
    const prices = document.querySelectorAll('.price');
    let subtotal = 0;

    quantities.forEach((input, index) => {
        const quantity = parseInt(input.value) || 0; // Default to 0 if NaN
        const price = parseFloat(prices[index].innerText.replace('$', ''));
        const currentSubtotal = quantity * price;

        subtotal += currentSubtotal;
        prices[index].closest('tr').querySelector('.subtotal').innerText = `$${currentSubtotal.toFixed(2)}`;
    });

    // Update subtotal and total
    document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
    const shipping = 5.00; // Fixed shipping cost
    const total = subtotal + shipping;
    document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
}

document.querySelector('.apply-button').addEventListener('click', function() {
    const voucherInput = document.querySelector('.voucher-input').value;
    const voucherStatus = document.querySelector('.voucher-status');

    if (voucherInput !== "") {
        voucherStatus.textContent = "Voucher Active"; // Show the message
        voucherStatus.style.color = "green"; // Change text color to green for a positive message
        
        // Set a timer to remove the message after 5 seconds
        setTimeout(() => {
            voucherStatus.textContent = ""; // Clear the message
        }, 5000); // 5000 milliseconds = 5 seconds
    } else {
        voucherStatus.textContent = "Please enter a valid voucher code"; // Error message
        voucherStatus.style.color = "red"; // Change text color to red for an error

        // Clear the message after 5 seconds
        setTimeout(() => {
            voucherStatus.textContent = ""; // Clear the error message
        }, 5000);
    }
});
