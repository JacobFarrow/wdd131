document.getElementById('creditCardForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cardNumber = document.getElementById('cardNumber').value;
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt("20" + document.getElementById('year').value);
    const feedback = document.getElementById('feedback');

    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    feedback.textContent = "";

    if (cardNumber !== '1234123412341234') {
        feedback.textContent = "❌ Invalid Card Number.";
        feedback.style.color = "red";
        return;
    }

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        feedback.textContent = "❌ The card is expired.";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent = "✅ Success! Your payment has been processed.";
    feedback.style.color = "green";
    this.reset();
});