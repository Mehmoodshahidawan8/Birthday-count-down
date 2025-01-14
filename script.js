// script.js

let birthdayDate = new Date("2025-04-15T00:00:00"); // Default: April 15, 2025, 00:00

// Function to calculate remaining time
function updateCountdown() {
  const now = new Date();
  const timeDifference = birthdayDate - now;

  // If the birthday has passed this year, calculate for next year
  if (timeDifference < 0) {
    birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerText = `Time remaining until my next birthday!`;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Function to show date and time input form
function showDateInput() {
  document.getElementById("date-input").style.display = "block";
}

// Function to handle date and time input change
function changeBirthdayDate() {
  const newBirthdayDate = document.getElementById("birthday-date").value;
  const newBirthdayTime = document.getElementById("birthday-time").value;

  // Check if both date and time are provided
  if (newBirthdayDate && newBirthdayTime) {
    // Combine date and time into a single string for the Date object
    const newDateTime = newBirthdayDate + "T" + newBirthdayTime;
    birthdayDate = new Date(newDateTime); // Update the birthday date and time

    // Hide the date input form and update countdown
    document.getElementById("date-input").style.display = "none";
    updateCountdown();
  } else {
    alert("Please enter both a date and time.");
  }
}

// Event listeners
document.getElementById("change-date-btn").addEventListener("click", showDateInput);
document.getElementById("submit-date-btn").addEventListener("click", changeBirthdayDate);

// Initial countdown update
updateCountdown();
setInterval(updateCountdown, 1000); // Update every second
