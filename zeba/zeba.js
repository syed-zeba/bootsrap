function handleFormSubmit(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);
    alert(`Username: ${username}\nPassword: ${password}`);
}

// Attach the event handler to the form
document.getElementById('loginForm').addEventListener('submit', handleFormSubmit);