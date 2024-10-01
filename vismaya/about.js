const timeline = document.querySelector('.timeline');
const sections = document.querySelectorAll('.section');
const line = document.querySelector('.line');
let prevScrollY = window.scrollY;
let set = 0;
let full = false;

function scrollHandler() {
    const { scrollY } = window;
    const targetY = scrollY + window.innerHeight / 2; // Position di tengah layar
    const timelineRect = timeline.getBoundingClientRect();
    const dist = targetY - timelineRect.top;

    // Update tinggi garis berdasarkan scroll
    if (dist > 0 && !full) {
        set = Math.min(dist, timeline.offsetHeight);
        line.style.height = `${set}px`;
    }

    // Jika sudah mencapai akhir timeline
    if (dist > timeline.offsetHeight && !full) {
        full = true;
        line.style.height = `${timeline.offsetHeight}px`;
    }

    sections.forEach(item => {
        const rect = item.getBoundingClientRect();

        if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me');
        }
    });

    prevScrollY = scrollY;
}

// Memanggil fungsi saat scroll
scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.3, // 30% dari elemen terlihat sebelum animasi dimulai
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-me');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
