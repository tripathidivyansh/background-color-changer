const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please provide a valid height.';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please provide a valid weight.';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let status = '';

        if (bmi < 18.6) {
            status = 'Underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            status = 'Normal Weight';
        } else {
            status = 'Overweight';
        }

        const message = document.createElement('div');
        message.classList.add('pop-up-message', 'fixed', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2', 'bg-black', 'bg-opacity-70', 'text-white', 'p-5', 'rounded-lg', 'text-lg', 'text-center', 'font-semibold', 'animate-fade-out');
        message.innerHTML = `Your BMI: ${bmi} - Status: ${status}`;

        result.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 3000);
    }
});
