$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        let valid = true;

        // Check if all required fields are filled
        $('input, select').each(function () {
            if ($(this).val() === '') {
                valid = false;
                alert('Please fill all the fields');
                return false;
            }
        });

        return valid; // Allow submission if valid
    });
});
