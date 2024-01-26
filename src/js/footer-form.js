
document.querySelector(".footer-form").addEventListener("submit", 
function(event) {
    event.preventDefault();

    const emailInput = this.elements.email;
  
    const emailValue = emailInput.value.trim();

    if (!emailValue) {
        alert('Field must be filled in');
        return; 
      }
    
      const formData = {
        email: emailValue
      };
    });

// try {
//     const response = await fetch(), {
//         method:'POST',
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify(formData)
//     });

//     if (!response.ok) {
//         throw new Error('Send ok');
//     }

//         const data = await response.json();

//         if (data.success) {
//             alert ('Subscription successful!');
//             this.reset(); 
//         } else {
//             throw new
//             Error('Subscription failed: ' + data.error);
//         }
        
//      } catch (error) {
//     console.error()
//     alert('Failed to subscribe: ' + error.message);
// }
    
// });