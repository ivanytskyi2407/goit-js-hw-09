const formRef = document.querySelector('.form');
let { amount, delay, step } = formRef.elements;

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const amountPromise = Number(amount.value);
  const firstDelay = Number(delay.value);
  const stepDelay = Number(step.value);
}

// function createPromise(position, delay) {
//   preventDefault();
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
