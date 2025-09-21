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
    password: this.password.value,
  }
  
  if (!doMatch(user.password, this.password2.value)) {
    return alert("Passwords do not match.");
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

function doMatch(a, b) {
  return a === b;
}
