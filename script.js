// Open envelope and show hearts
function toggleEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open'); // Toggle the envelope open/close

    if (envelope.classList.contains('open')) {
        // Add hearts when the envelope is opened
        createHearts();
    }
}

// Create hearts when envelope is opened
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');

    // Create 30 hearts (increased number of hearts)
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️'; // Heart emoji
        heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        heart.style.animationDelay = `${Math.random() * 2}s`; // Random delay
        heartsContainer.appendChild(heart);

        // Remove the heart after the animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Show overlay and paper when clicking on the paper inside the envelope
function showPaperAndOverlay(event) {
    // Prevent the envelope click event from firing when the paper is clicked
    event.stopPropagation();

    const whitePaper = document.createElement('div');
    const overlay = document.createElement('div');

    // Add classes for the white paper and overlay
    whitePaper.classList.add('white-paper');
    overlay.classList.add('overlay');

    // Add content to the white paper
    whitePaper.innerHTML = `
        <h2 class="letter-heading">Happy Birthday Fatima</h2>
        <p class="letter-content">Wish You Many Many Happy Returns Of The Day!</p>
        <p class="letter-content">I wish you a healthy and happy life ahead and may you get cured from all illness and suffering<p>
        <p class="letter-content" style="color:red">With Love Your Dearest Sister Maliha<p>
    `;

    // Append the white paper and overlay to the body
    document.body.appendChild(whitePaper);
    document.body.appendChild(overlay);

    // Display the white paper and overlay
    whitePaper.style.display = 'block';
    overlay.style.display = 'block';

    // Play the music when the paper appears
    const music = document.getElementById('music');
    music.play(); // Play the audio

    // Add event listener to the overlay to close the paper and overlay
    overlay.addEventListener('click', () => {
        whitePaper.style.display = 'none';
        overlay.style.display = 'none';
        music.pause(); // Stop the music when overlay is clicked
        music.currentTime = 0; // Reset music to start
    });
}
