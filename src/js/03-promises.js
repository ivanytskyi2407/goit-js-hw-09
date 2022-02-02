function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amout: document.querySelector('input[name="amount"]'),
  submit: document.querySelector('button[type="submit"]'),
};
refs.submit.addEventListener('submit', createPromise);
