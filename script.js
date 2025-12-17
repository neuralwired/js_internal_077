document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const courseEl = document.getElementById('course');
    const termsEl = document.getElementById('terms');
    const genderEls = document.querySelectorAll('input[name="gender"]');
    
    const errName = document.getElementById('err-name');
    const errEmail = document.getElementById('err-email');
    const errGender = document.getElementById('err-gender');
    const errCourse = document.getElementById('err-course');
    const errTerms = document.getElementById('err-terms');

    const outputDiv = document.getElementById('output');
    const submitBtn = document.getElementById('submitBtn');

    let isValid = true;

    [nameEl, emailEl, courseEl, termsEl].forEach(el => el.classList.remove('input-error'));
    [errName, errEmail, errGender, errCourse, errTerms].forEach(el => el.style.display = 'none');

    const nameValue = nameEl.value.trim();
    if (nameValue === "") {
        nameEl.classList.add('input-error');
        errName.textContent = "Name should not be empty";
        errName.style.display = 'block';
        isValid = false;
    }

    const emailValue = emailEl.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        emailEl.classList.add('input-error');
        errEmail.textContent = "Email should be valid";
        errEmail.style.display = 'block';
        isValid = false;
    }

    let genderValue = null;
    let genderSelected = false;
    genderEls.forEach(radio => {
        if (radio.checked) {
            genderSelected = true;
            genderValue = radio.value;
        }
    });

    if (!genderSelected) {
        errGender.textContent = "Gender must be selected";
        errGender.style.display = 'block';
        isValid = false;
    }

    const courseValue = courseEl.value;
    if (courseValue === "") {
        courseEl.classList.add('input-error');
        errCourse.textContent = "Course must be selected";
        errCourse.style.display = 'block';
        isValid = false;
    }

    if (!termsEl.checked) {
        errTerms.textContent = "Terms checkbox must be checked";
        errTerms.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Processing...";

        let countdown = 5;
        
        outputDiv.innerHTML = `
            <div class="success-container">
                <h3>Registration Successful!</h3>
                <p><strong>Name:</strong> ${nameValue}</p>
                <p><strong>Email:</strong> ${emailValue}</p>
                <p><strong>Gender:</strong> ${genderValue}</p>
                <p><strong>Course:</strong> ${courseValue}</p>
                
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
                    name: nameValue,
                    email: emailValue,
                    gender: genderValue,
                    course: courseValue
                });

                window.location.href = `success.html?${params.toString()}`;
            }
        }, 1000);
    }
});