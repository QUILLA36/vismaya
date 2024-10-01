contactLink.addEventListener('click', function() {
    window.location.href = 'landing.html#footer'; // Mengarahkan ke halaman landing dan bagian contact
});

let currentIndex = 0;

function slide(direction) {
    const cards = document.getElementById('cardContainer');
    const totalCards = cards.children.length;
    const cardWidth = cards.children[0].offsetWidth + 20; // 20 adalah margin (10px di setiap sisi)

    // Update currentIndex
    currentIndex += direction;

    // Cek batasan
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalCards - 1) {
        currentIndex = totalCards - 1;
    }

    // Geser tampilan
    cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function showCardDetail(image) {
    // Implementasi untuk menampilkan detail kartu
    console.log('Showing details for', image);
}
