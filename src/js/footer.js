import axios from 'axios';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscriptionForm');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            alert('Please fill in a valid email address.');
        } else {
            const formData = new FormData(form);

            try {
                const response = await axios.post('https://energyflow.b.goit.study/api-docs/#/Subscriptions', formData);
                
                alert("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.");
                console.log('Server response:', response);
            } catch (error) {
                console.error('Error:', error);
                alert('Something went wrong, try again');
            }
        }
    });
});


    