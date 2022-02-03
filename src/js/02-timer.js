// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let timerId = null;
let time = 0;

const refs = {
  dateTimePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notify.warning('Please choose a date in the future');
      return;
    }
    time = selectedDates[0];
  },
};

refs.startBtn.addEventListener('click', startTimer);

function startTimer() {
  timerId = setInterval(() => {
    let currentDate = Date.now();
    let deltaTime = time - currentDate;
    let { days, hours, minutes, seconds } = convertMs(deltaTime);

    refs.dataDays.textContent = `${days}`;
    refs.dataHours.textContent = `${hours}`;
    refs.dataMinutes.textContent = `${minutes}`;
    refs.dataSeconds.textContent = `${seconds}`;

    refs.dateTimePicker.disabled = true;
    refs.startBtn.disabled = true;

    if (deltaTime < 1000) {
      refs.dateTimePicker.disabled = false;
      refs.startBtn.disabled = false;
      clearInterval(timerId);
    }
  }, 1000);
}

flatpickr(refs.dateTimePicker, options);
