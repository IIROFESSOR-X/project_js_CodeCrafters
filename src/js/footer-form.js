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
        console.error(error);
        alert('Failed to subscribe. Please try again later.');
      });
  });







///////////////////////


// document.getElementById('footer-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
  
//     const emailInput = document.getElementById('email');
//     const errorMsg = document.createElement('span');
//     errorMsg.className = 'error-msg';
  
//     if (!this.checkValidity()) {
//       errorMsg.textContent = 'Please enter a valid email address.';
//       emailInput.insertAdjacentElement('afterend', errorMsg);
//       return;
//     }
  
//     // Form data
//     const formData = new FormData(this);
  
//     // Send request to backend
//     fetch('https://energyflow.b.goit.study/api/subscription', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to subscribe. Please try again later.');
//       }
//       return response.json();
//     })
//     .then(data => {
//       alert('Subscription successful!'); // Notify user of successful subscription
//       emailInput.value = ''; // Clear email input
//       errorMsg.remove(); // Remove error message
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       alert('Failed to subscribe. Please try again later.'); // Notify user of error
//     });
//   });