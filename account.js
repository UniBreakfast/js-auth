const username = localStorage.getItem('currentUser');

if (!kickOutTresspasser()) showUsername();

prepareToLogOut();

function kickOutTresspasser() {
  if (!username) return location.href = 'index.html';
}

function showUsername() {
  const output = document.getElementById('username');
  
  output.value = username;
  body.removeAttribute('hidden');
}

function prepareToLogOut() {
  const logOutBtn = document.getElementById('log-out');
  
  logOutBtn.onclick = logOut;
}

function logOut() {
  localStorage.removeItem('currentUser');
  location.href = 'index.html';
}
