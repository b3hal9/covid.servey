const form = document.getElementById("stop");

const validateInputs = (e) => {
  // e.preventDefault();
  const fullname = document.getElementById("name");
  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const age = document.getElementById("age");
  const checkEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const data = {
    name: fullname.value,
    email: email.value,
    address: address.value,
    age: age.value,
  };

  if (data.name.trim().length < 3) {
    alert("Name must be greater than 3");
  } else if (data.email < 5 || !checkEmail.test(data.email)) {
    alert("Invalid Email Address");
  } else if (data.age < 18) {
    alert("UNder Age");
  }

  getSymptoms();
  getPrecautions();
};

form.onclick = validateInputs;

let getSymptoms = () => {
  const ck = document.querySelectorAll("#symptoms");

  for (let i = 0; i < ck.length; i++) {
    if (ck[i].checked == true && ck[i].value !== "None of the above") {
      alert("Please visit nearest hospital");
      return true;
    } else if (ck[i].checked == true && ck[i].value === "None of the above") {
      alert("Stay home");
      return true;
    }
  }

  alert("You havenot checked any boxes. ");
  return false;
};

let getPrecautions = () => {
  const pk = document.querySelectorAll("#precautions");

  for (let i = 0; i < pk.length; i++) {
    if (pk[i].checked == true) {
      return true;
    }
  }

  alert("You havenot checked any boxes. ");
  return false;
};
