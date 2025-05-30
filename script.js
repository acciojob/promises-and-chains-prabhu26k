//your JS code heredocument.getElementById('userForm').addEventListener('submit', function (e) {
  document.getElementById('userForm').onsubmit = function (e) {
  e.preventDefault();

  const ageInput = document.getElementById('age').value.trim();
  const nameInput = document.getElementById('name').value.trim();

  if (!ageInput || !nameInput) {
    alert("Please enter valid details.");
    return;
  }

  const age = parseInt(ageInput);
  const name = nameInput;

  checkVotingEligibility(age, name)
    .then(message => alert(message))
    .catch(error => alert(error));
};

function checkVotingEligibility(age, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}