bringInAuthenticatedUser();

function bringInAuthenticatedUser() {
  const username = localStorage.getItem('currentUser');
  
  if (username) return location.href = 'account.html';

  body.removeAttribute('hidden');
}
