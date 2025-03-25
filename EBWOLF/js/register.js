<script>
    const form = document.querySelector('.form');
    const password = document.querySelectorAll('input[type="password"]')[0];  // Corregido
    const confirmPassword = document.getElementById('confirm-password');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function(event) {
        if (password.value !== confirmPassword.value) {
            passwordError.style.display = 'block';
            event.preventDefault();  // Evitar el envío del formulario
        } else {
            passwordError.style.display = 'none';
        }
    });
</script>
