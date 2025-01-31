let globe = document.getElementById("snowglobe");
	
// Declare particles
let particles;

function calculateAcceleration(event) {
    const {x, y, z} = event.accelerationIncludingGravity;
    const accelerationMagnitude = Math.sqrt(x * x + y * y + z * z);
    return accelerationMagnitude;
}

tsParticles.loadJSON('particles', 'particles.json')
    .then(function () {
        particles = tsParticles.domItem(0);

        particles.pause();

        globe.addEventListener("click", () => {
            shakeItUp();
        });

        window.addEventListener("devicemotion", (event) => {
            // Calculate the magnitude every time
            const acceleration = calculateAcceleration(event);
  
            // Compare the magnitude to threshold.
            if (acceleration > 23) {
              shakeItUp()
            }

        });
    });

function shakeItUp() {
    particles.play();
    
    // Only include this code if you're making the shake animation
    globe.classList.add("shake")
    setTimeout(() => {globe.classList.remove("shake")}, 1100)
}