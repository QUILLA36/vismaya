// Simulasi pelacakan dinamis
let currentStep = 1;
const totalSteps = 4;

function updateTimeline() {
    for (let i = 1; i <= totalSteps; i++) {
        const stepElement = document.getElementById(`step${i}`);
        if (i <= currentStep) {
            stepElement.classList.add("active");
        } else {
            stepElement.classList.remove("active");
        }
    }
}

// Simulasi pengembangan langkah pelacakan (mimicking progress over time)
setInterval(() => {
    if (currentStep < totalSteps) {
        currentStep++;
        updateTimeline();
    }
}, 2000);
