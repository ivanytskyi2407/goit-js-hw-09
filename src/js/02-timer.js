// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
    startBtn: document.querySelector('[data-start]'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataseconds: document.querySelector('[data-seconds]'),
}

refs.startBtn.disabled = true;
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// При нажатии на кнопку «Start» начинается отсчет времени до выбранной даты с момента нажатия.

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
          let currentDate = Date.now();

      if (selectedDates[0] <= currentDate) {
        alert('Please choose a date in the future');
        return;
      }
      refs.startBtn.disabled = false;
      
      refs.startBtn.addEventListener('click', () => {
        setInterval(() => {
          let deltaTime = selectedDates[0] - currentDate;
          console.log(convertMs(deltaTime))
      }, 1000);

 })      
},};





flatpickr('#datetime-picker', options);
