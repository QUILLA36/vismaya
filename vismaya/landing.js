document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('btn-register');
    const loginButton = document.getElementById('btn-login');

    registerButton.addEventListener('click', () => {
        window.location.href = 'regist.html';
    });

    loginButton.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
});

contactLink.addEventListener('click', function() {
    window.location.href = 'landing.html#footer'; // Mengarahkan ke halaman landing dan bagian contact
});

// Event listener untuk setiap item produk
const productItems = document.querySelectorAll('.product-item');

productItems.forEach(item => {
    item.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        window.location.href = `product-detail.html?id=${productId}`;
    });
});
