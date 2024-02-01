import axios from 'axios';
import iziToast from 'izitoast';

const form = document.getElementById('subscriptionForm');
const email = document.getElementById('email');
const pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  try {
    if (pattern.test(email.value)) {
      // dsasd@gmail.com
      await axios
        .post('https://energyflow.b.goit.study/api/subscription', {
          email: email.value,
        })
        .then(response =>
          iziToast.success({
            title: 'Success',
            message: response.data.message,
          })
        )
        .catch(error =>
          iziToast.error({
            title: 'Error',
            message: error.response.data.message,
          })
        );
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Please enter the correct email!',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong, try again',
    });
  }
});
