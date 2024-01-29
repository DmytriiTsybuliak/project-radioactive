import axios from 'axios';
const form = document.getElementById('subscriptionForm');
const email = document.getElementById('email');
const pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    try {
        if (pattern.test(email.value)) {
            // dsasd@gmail.com
            await axios.post('https://energyflow.b.goit.study/api/subscription', { email: email.value })
                .then(response => { console.log(response.data.message) })
                .catch(error => { console.log(error.response.data.message) });
        } else {
            alert('Please enter the correct email');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong, try again');
    }
});