function validateForm() {
    
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    let isValid = true;

    
    const gender = document.getElementById('gender').value.trim();
    const year = document.getElementById('year').value.trim();
    const department = document.getElementById('department').value.trim();
    const section = document.getElementById('section').value.trim();
    const mobileNo = document.getElementById('mobile_no').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const country = document.getElementById('country').value.trim();
    const pincode = document.getElementById('pincode').value.trim();

   
    if (!gender) {
        document.getElementById('gender-error').textContent = 'Gender is required.';
        isValid = false;
        alert('Gender is required');
    }

    if (!year) {
        document.getElementById('year-error').textContent = 'Year is required.';
        isValid = false;
    } else if (isNaN(year) || year < 1 || year > 4) {
        document.getElementById('year-error').textContent = 'Enter a valid year (1-4).';
        isValid = false;
        alert('Enter a valid year (1-4)');
    }

    if (!department) {
        document.getElementById('department-error').textContent = 'Department is required.';
        isValid = false;
        alert('Department is required');
    }

    if (!section) {
        document.getElementById('section-error').textContent = 'Section is required.';
        isValid = false;
        alert('Section is required');
    }

    if (!mobileNo) {
        document.getElementById('mobile_no-error').textContent = 'Mobile Number is required.';
        isValid = false;
        alert('Mobile Number is required');
    } else if (!/^\d{10}$/.test(mobileNo)) {
        document.getElementById('mobile_no-error').textContent = 'Enter a valid 10-digit mobile number.';
        isValid = false;
        alert('Enter a valid 10-digit mobile number');
    }

    if (!email) {
        document.getElementById('email-error').textContent = 'E-Mail ID is required.';
        isValid = false;
        alert('E-Mail ID is required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email-error').textContent = 'Enter a valid email address.';
        isValid = false;
        alert('Enter a valid email address');
    }

    if (!address) {
        document.getElementById('address-error').textContent = 'Address is required.';
        isValid = false;
        alert('Address is required');
    }

    if (!city) {
        document.getElementById('city-error').textContent = 'City is required.';
        isValid = false;
        alert('City is required');
    }

    if (!country) {
        document.getElementById('country-error').textContent = 'Country is required.';
        isValid = false;
        alert('Country is required');
    }

    if (!pincode) {
        document.getElementById('pincode-error').textContent = 'Pincode is required.';
        isValid = false;
        alert('Pincode is required');
    } else if (!/^\d{6}$/.test(pincode)) {
        document.getElementById('pincode-error').textContent = 'Enter a valid 6-digit pincode.';
        isValid = false;
        alert('Enter a valid 6-digit pincode');
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}
