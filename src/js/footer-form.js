import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document
  .querySelector('.footer-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = this.elements.email;
    const emailValue = emailInput.value.trim();

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailValue)) {
      iziToast.success('Field must be filled in');
      return;
    }

    const formData = { email: emailValue };

    fetch('https://energyflow.b.goit.study/api/subscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          iziToast.success({
            position: 'topRight',
            message: 'Subscription successful!',
          });
          this.reset();
        }
      })

     
      .catch(error => {
        console.error(error);
        iziToast.error('Sorry! Failed to subscribe.');
        this.reset();
      });
  });
