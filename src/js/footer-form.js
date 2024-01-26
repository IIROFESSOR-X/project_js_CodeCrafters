import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document
  .querySelector('.footer-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = this.elements.email;
    const emailValue = emailInput.value.trim();

    if (!emailValue) {
      alert('Field must be filled in');
      return;
    }

    const formData = { email: emailValue };

    fetch('https://energyflow.b.goit.study/api/subscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          iziToast.success({
            position: 'topRight',
            message: 'Subscription successful!',
          });
          this.reset();
        } else {
          throw new Error('Subscription failed: ' + data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to subscribe. Please try again later.');
      });
  });

//             const state = this.elements['state'].value;

//             const notificationPromise = new Promise((resolve, reject) => {
//               setTimeout(() => {
//                   if (state === emailInput) {
//                     resolve(delay);
//                   } else {
//                     reject(delay);
//                   }
//                 }, delay);
//               });

//             notificationPromise
//               .then(() => {
//                 iziToast.success({ message: `Successfully!` });

//               })
//               .catch(() => {
//                 iziToast.error({ message: `Not successful!` });

//               });
//               this.reset();

//         });
