document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscriptionForm');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            alert('Please fill in a valid email address.');
            event.preventDefault();
        } else {
            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.message) {
                    alert(data.message);
                } else {
                    console.warn('Response does not contain a message field:', data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});
