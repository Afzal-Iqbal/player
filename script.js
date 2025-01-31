// Add event listeners to all keys
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => playSound(key.dataset.note));
});

// Function to play sound
function playSound(note) {
    // Replace the path below with the path to your music files
    // Example: If your files are in a folder named "notes", use `notes/${note}.mp3`
    const audio = new Audio(`notes/${note}.mp3`); // Add your music files here
    audio.play();
}