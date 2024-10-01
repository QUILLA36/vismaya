document.addEventListener('DOMContentLoaded', () => {
    const createAccountButton = document.querySelector('.create-account');

    createAccountButton.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah pengiriman form
        window.location.href = 'landing.html'; // Navigasi ke landing page
    });
});

 document.addEventListener('DOMContentLoaded', () => {
            const togglePasswordButton = document.getElementById('togglePassword');
            const passwordInput = document.getElementById('password');

            togglePasswordButton.addEventListener('click', () => {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);

                const icon = togglePasswordButton.querySelector('img');
                icon.src = type === 'password' 
                    ? 'https://img.icons8.com/fluency-systems-filled/20/invisible.png' 
                    : 'https://img.icons8.com/fluency-systems-filled/20/visible.png';
            });

            // Inisialisasi Google Sign-In
            google.accounts.id.initialize({
                client_id: 'YOUR_GOOGLE_CLIENT_ID',  // Ganti dengan Client ID dari Google Cloud Console
                callback: handleCredentialResponse
            });

            // Tambahkan event listener pada tombol Google Sign-In milikmu
            const googleSignInButton = document.getElementById('googleSignInButton');
            googleSignInButton.addEventListener('click', () => {
                google.accounts.id.prompt(); // Memunculkan popup Google Sign-In
            });
        });

        // Google Sign-In Callback function
        function handleCredentialResponse(response) {
            console.log("Encoded JWT ID token: " + response.credential);
            // Kirim token JWT ini ke server backend untuk verifikasi
            // Tambahkan logika untuk mendaftarkan atau mengotentikasi pengguna di backend
        }