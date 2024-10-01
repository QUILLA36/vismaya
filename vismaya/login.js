document.addEventListener('DOMContentLoaded', () => {
    const createAccountButton = document.querySelector('.create-account');

    createAccountButton.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah pengiriman form
        window.location.href = 'landing.html'; // Navigasi ke landing page
    });
});