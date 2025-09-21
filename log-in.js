const users = [{name: 'admin', password: '123'}];

bringInAuthenticatedUser();
loadUsers();
prepareForm();

function bringInAuthenticatedUser() {
  const username = localStorage.getItem('currentUser');
  
  if (username) return location.href = 'account.html';

  body.removeAttribute('hidden');
}

function prepareForm() {
  let form = document.getElementById("log-in");
  
  form.onsubmit = handleSubmit;
}

function handleSubmit() {
  const username = this.username.value.trim().toLowerCase();
  const password = this.password.value.trim();

  if (!checkUser(username, password)) {
    return alert("Invalid username or password.");
  }

  grantPassage(username);
}

function grantPassage(username) {
  localStorage.setItem("currentUser", username);
  
  location.href = "account.html";
}

function checkUser(username, password) {
  for (const user of users) {
    if (user.name === username) {
      return user.password === password;
    }
  }

  return false;
}

function loadUsers() {
  const json = localStorage.getItem("users");
  
  if (json) {
    users.length = 0;
    users.push(...JSON.parse(json));
  }
}
