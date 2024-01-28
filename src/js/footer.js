document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscriptionForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        if (!form.checkValidity()) {
            alert('Please fill in a valid email address.');
        } else {
            const formData = new FormData(form);

            fetch('https://energyflow.b.goit.study/api-docs/#/Subscriptions', {
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
                alert("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."); // Повідомлення про успішну розсилку
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});
