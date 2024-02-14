function submitForm() {
    const formData = {
        id: document.getElementById('id').value,
        password: document.getElementById('password').value,
        name: document.getElementById('name').value,
        birthdate: document.getElementById('birthdate').value,
        gender: document.querySelector('input[name="gender"]:checked').value
    }
}