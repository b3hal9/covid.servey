const form = document.getElementById("stop");

const validateInputs = (e) => {
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
  //error types
  let Merror = document.getElementById("Merror");
  let Nerror = document.getElementById("Nerror");
  let Aerror = document.getElementById("Aerror");

  if (data.name !== "" && data.name.trim().length < 3) {
    Nerror.style.display = "initial";
    Nerror.innerHTML = "Name must be greater than 3";
    e.preventDefault();
    return false;
  } else if (
    data.email !== "" &&
    (data.email < 5 || !checkEmail.test(data.email))
  ) {
    Merror.style.display = "initial";
    Merror.innerHTML = "Invalid Email Address";
    e.preventDefault();
    return false;
  } else if (data.age !== "" && data.age < 18) {
    Aerror.style.display = "initial";
    Aerror.innerHTML = "You are under Aged.";
    e.preventDefault();
    return false;
  }

  let validateSym = getSymptoms();
  let validatePre = getPrecautions();
  if (validatePre == false || validateSym == false) {
    e.preventDefault();
  } else if (validateSym == "1") {
    alert("Please visit Nearby Hospital");
  } else if (validateSym == true) {
    alert("Stay Home & Stay Safe");
  }
};

form.onclick = validateInputs;

let getPrecautions = () => {
  const pk = document.querySelectorAll("#precautions");
  const pkerror = document.getElementById("pkerror");

  for (let i = 0; i < pk.length; i++) {
    if (pk[i].checked == true) {
      return true;
    }
  }

  pkerror.style.display = "initial";
  pkerror.innerHTML = "No checkbox selected.";
  return false;
};

let getSymptoms = () => {
  const ck = document.querySelectorAll("#symptoms");
  const ckerror = document.getElementById("ckerror");

  for (let i = 0; i < ck.length; i++) {
    if (ck[i].checked == true && ck[i].value !== "None of the above") {
      return 1;
    } else if (ck[i].checked == true && ck[i].value === "None of the above") {
      return true;
    }
  }
  ckerror.style.display = "initial";
  ckerror.innerHTML = "No checkbox selected.";
  return false;
};
