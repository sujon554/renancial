const calendarDays = document.getElementById('calendar-days');
const currentMonthYear = document.getElementById('current-month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const selectedDateElement = document.getElementById('selected-date');
const selectedTimeElement = document.getElementById('selected-time');
const selectedTimeZoneElement = document.getElementById('selected-timezone');
const timeInput = document.getElementById('time-input');
const timeZoneInput = document.getElementById('time-zone');

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let selectedDate = null;
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

// Generate Calendar
function generateCalendar() {
    calendarDays.innerHTML = '';
    currentMonthYear.textContent = `${months[currentMonth]} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1;

    for (let i = 0; i < adjustedFirstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarDays.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        dayElement.addEventListener('click', () => selectDay(dayElement, day));
        calendarDays.appendChild(dayElement);
    }
}

function selectDay(element, day) {
    document.querySelectorAll('.day').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedDate = `${months[currentMonth]} ${day}, ${currentYear}`;
    selectedDateElement.textContent = selectedDate;
}

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
});

// Update Time and Time Zone
timeInput.addEventListener('input', () => {
    selectedTimeElement.textContent = timeInput.value || "None";
});

timeZoneInput.addEventListener('change', () => {
    selectedTimeZoneElement.textContent = timeZoneInput.options[timeZoneInput.selectedIndex].text;
});

// Initialize
generateCalendar();





const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const cards = document.querySelectorAll(".testimonial-card");

    let startIndex = 0;

    function updateCards() {
      cards.forEach((card, index) => {
        if (index >= startIndex && index < startIndex + 3) {
          card.parentElement.style.display = "block";
        } else {
          card.parentElement.style.display = "none";
        }
      });
    }

    prevBtn.addEventListener("click", () => {
      if (startIndex > 0) {
        startIndex--;
        updateCards();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (startIndex < cards.length - 3) {
        startIndex++;
        updateCards();
      }
    });

    // Initialize View
    updateCards();