function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      const id = object.id;
      document.body.innerHTML += `<p>New user ID: ${id}</p>`;
    })
    .catch(function (error) {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}

function handleSubmit(event) {
  event.preventDefault();
  const nameInput = document.querySelector("input#userName");
  const emailInput = document.querySelector("input#userEmail");
  const name = nameInput.value;
  const email = emailInput.value;
  submitData(name, email);
}

document.addEventListener("DOMContentLoaded", function () {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", handleSubmit);
});
