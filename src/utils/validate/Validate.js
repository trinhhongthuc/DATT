export const validateText = (text, setErr) => {
  let regFirstName = /^[a-zA-Z]+((['. -_][a-zA-Z1-9 ])?[a-zA-Z1-9]*)*$/;
  if (regFirstName.test(text.trim())) {
    setErr(true);
    return true;
  } else {
    setErr(false);
    return false;
  }
};

export const validateNumber = (number, setErr) => {
  let regFirstName = /(^[1-9]+[1-9]+)/;
  if (regFirstName.test(number)) {
    setErr(true);
    return true;
  } else {
    setErr(false);
    return false;
  }
};

export const validateEmail = (email, setErrEmail) => {
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,24}))$/;
  if (email == "") {
    setErrEmail(false);
    return false;
  }
  if (regEmail.test(email)) {
    setErrEmail(true);
    return true;
  } else {
    setErrEmail(false);
    return false;
  }
};
