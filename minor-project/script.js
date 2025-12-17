document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const outputDiv = document.getElementById('output');
    const submitBtn = document.getElementById('submitBtn');
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;
    const terms = document.getElementById('terms').checked;
    const genderEl = document.querySelector('input[name="gender"]:checked');
    const gender = genderEl ? genderEl.value : null;

    let errors = [];

    if (name === "") errors.push("Name should not be empty");
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) errors.push("Email should be valid");
    
    if (!gender) errors.push("Gender must be selected");
    if (course === "") errors.push("Course must be selected");
    if (!terms) errors.push("Terms checkbox must be checked");

    if (errors.length > 0) {
        outputDiv.innerHTML = `<div class="error-msg"><strong>Errors:</strong><br>${errors.join('<br>')}</div>`;
    } else {
        outputDiv.innerHTML = '';
        
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";

        let countdown = 5;
        
        outputDiv.innerHTML = `
            <div class="success-container">
                <h3>Registration Successful!</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Course:</strong> ${course}</p>
                
                <div class="timer-msg">
                    Redirecting to receipt in <span id="timer">${countdown}</span> seconds...
                </div>
            </div>
        `;

        const intervalId = setInterval(function() {
            countdown--;
            
            const timerEl = document.getElementById('timer');
            if (timerEl) {
                timerEl.textContent = countdown;
            }

            if (countdown <= 0) {
                clearInterval(intervalId);
                
                const params = new URLSearchParams({
                    name: name,
                    email: email,
                    gender: gender,
                    course: course
                });

                window.location.href = `success.html?${params.toString()}`;
            }
        }, 1000);
    }
});