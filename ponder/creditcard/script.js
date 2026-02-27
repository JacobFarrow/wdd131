const paymentMethod = document.getElementById('paymentMethod');
const cardContainer = document.getElementById('creditCardContainer');
const paypalContainer = document.getElementById('paypalContainer');
const form = document.getElementById('checkoutForm');
const errorBox = document.getElementById('errorBox');

paymentMethod.addEventListener('change', (e) => {
    cardContainer.classList.add('hide');
    paypalContainer.classList.add('hide');

    if (e.target.value === 'creditCard') {
        cardContainer.classList.remove('hide');
    } else if (e.target.value === 'paypal') {
        paypalContainer.classList.remove('hide');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorBox.innerText = '';
    let errors = [];

    if (paymentMethod.value === 'creditCard') {
        const num = document.getElementById('cardNumber').value;
        const mm = parseInt(document.getElementById('month').value);
        const yy = parseInt(document.getElementById('year').value) + 2000;
        
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const currentYear = now.getFullYear();

        if (num !== '1234123412341234') {
            errors.push("Card number is not valid");
        }

        if (yy < currentYear || (yy === currentYear && mm < currentMonth)) {
            errors.push("Card is expired");
        }
    }

    if (errors.length > 0) {
        errorBox.innerText = errors.join("\n");
    } else {
        form.innerHTML = "<h2>Thank you for your purchase.</h2>";
    }
});