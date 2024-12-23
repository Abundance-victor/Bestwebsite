document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${item.src}" alt="${item.alt}">
      </div>
    `;
    document.body.appendChild(modal);

    // Close modal
    modal.querySelector('.close').addEventListener('click', () => {
      modal.remove();
    });
  });
});

// Modal styling
const style = document.createElement('style');
style.innerHTML = `
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    position: relative;
  }
  .modal-content img {
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 10px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }
`;
document.head.appendChild(style);
// Step 1: Find the button and body
const toggleButton = document.getElementById('theme-toggle'); // Get the button
const body = document.body; // Get the body

// Step 2: Check if a theme is saved (from previous visits)
const savedTheme = localStorage.getItem('theme'); // Check saved theme
if (savedTheme) {
  body.classList.add(savedTheme); // Apply the saved theme
}

// Step 3: Add a click event to the button
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode'); // Switch between light and dark mode

  // Save the current theme to localStorage
  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
  localStorage.setItem('theme', currentTheme);
});
function updateClockAndDate() {
  const now = new Date();

  // Format the time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  
  // Format the date
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const day = now.getDate();
  const month = monthNames[now.getMonth()];
  const dayOfWeek = dayNames[now.getDay()];
  const dateString = `${day} ${month} ${dayOfWeek}`;

  // Update the HTML elements
  document.getElementById('clock').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

// Update every second
setInterval(updateClockAndDate, 1000);
updateClockAndDate(); // Initial call
// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when scrolled down 20px from the top
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};