const users = [];

bringInAuthenticatedUser();
loadUsers();
prepareForm();

function bringInAuthenticatedUser() {
  const username = localStorage.getItem('currentUser');
  
  if (username) return location.href = 'account.html';

  body.removeAttribute('hidden');
}

function prepareForm() {
  let form = document.getElementById("register");
  
  form.onsubmit = handleSubmit;
}

function handleSubmit() {
  const user = {
    name: this.username.value.trim().toLowerCase(),
    password: this.password.value.trim(),
  }

  if (user.name.length < 2) {
    return alert("Username must be at least 2 characters long.");
  }

  if (containSpaces(user.name) || containSpaces(user.password)) {
    return alert("Neither username nor password can contain spaces.");
  }
  
  if (!doMatch(user.password, this.password2.value.trim())) {
    return alert("Passwords do not match.");
  }

  if (isOccupied(user.name)) {
    return alert("Username is already taken.");
  }

  if (user.password.length < 8) {
    const sure = confirm("Are you sure you want to use non-secure password? (Less than 8 characters long)");

    if (!sure) return;
  }
  
  addUser(user);
  saveUsers();

  alert("Registration successful! Please log in.");
}

function addUser(user) {
  users.push(user);
}

function saveUsers() {
  const json = JSON.stringify(users);
  
  localStorage.setItem("users", json);
}

function loadUsers() {
  const json = localStorage.getItem("users");
  
  if (json) {
    users.length = 0;
    users.push(...JSON.parse(json));
  }
}

function containSpaces(str) {
  return str.includes(" ");
}

function doMatch(str1, str2) {
  return str1 === str2;
}

function isOccupied(username) {
  return users.some(user => user.name === username);
}
