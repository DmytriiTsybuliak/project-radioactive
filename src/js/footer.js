import axios from 'axios';

const form = document.getElementById('subscriptionForm');
const email = document.getElementById('email');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        alert('Please fill in a valid email address.');
    } else {
        const data = { email: email.value };
        try {
            const response = await axios.post('https://energyflow.b.goit.study/api-docs/#/Subscription', data);

            alert("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.");
            console.log('Server response:', response);
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong, try again');
        }
    }
});
