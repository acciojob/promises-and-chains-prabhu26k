//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const age = document.getElementById('age').value;
  const name = document.getElementById('name').value;

  if (!age || !name) {
    alert("Please enter valid details.");
    return;
  }

  checkVotingEligibility(age, name)
    .then(message => alert(message))
    .catch(error => alert(error));
});

function checkVotingEligibility(age, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4 second delay
  });
}