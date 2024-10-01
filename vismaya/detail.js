
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

// Ambil elemen tombol 'Add to Cart' dan 'Buy Now'
const addToCartBtn = document.querySelector('.add-cart-btn');
const buyNowBtn = document.querySelector('.buy-now-btn');

// Tambahkan event listener untuk tombol 'Add to Cart'
addToCartBtn.addEventListener('click', function() {
    // Ubah teks tombol menjadi "Success: Added to Cart"
    addToCartBtn.innerHTML = '<i class="fas fa-check"></i> Success: Added to Cart';
    
    // Nonaktifkan tombol setelah ditambahkan ke keranjang
    addToCartBtn.disabled = true;

    // Mengembalikan teks asli setelah beberapa detik (opsional)
    setTimeout(() => {
        addToCartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to cart';
        addToCartBtn.disabled = false;
    }, 2000); // Kembali ke teks semula setelah 3 detik
});

// Tambahkan event listener untuk tombol 'Buy Now'
buyNowBtn.addEventListener('click', function() {
    // Pindah ke halaman pembayaran (misalnya payment.html)
    window.location.href = 'pembayaran.html';
});