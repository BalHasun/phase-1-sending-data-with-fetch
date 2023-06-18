const rando = Math.ceil(Math.random() * 1000);

function submitData(name, email) {
  const formData = {
    id: rando,
    name: name.value,
    email: email.value,
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  fetch("http://localhost:3000/users ", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      alert(error.message);

    })
    .catch(function (error) {
      alert(error.message);
      console.log(error.message);
    });
}
function handleSubimt(event) {
  event.preventDefault();
  const name = document.querySelector("input#userName");
  const email = document.querySelector("input#userEmail");
  submitData(name, email);
}

document.addEventListener("DOMContentLoaded", function () {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", handleSubimt);
});
