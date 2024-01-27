document.addEventListener('DOMContentLoaded', function () {
   
    const form = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submitButton');

   
    submitButton.addEventListener('click', function (event) {
   
        if (!form.checkValidity()) {
       
            alert('Please fill in a valid email address.');
            event.preventDefault(); 
        } else {
   
            const formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Обробка відповіді від бекенду
                console.log(data);
            })
            .catch(error => {
                // Обробка помилки під час відправлення запиту
                console.error('Error:', error);
            });
        }
    });
});
