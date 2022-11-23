const emptyUserJSON = {
  firstName: "",
  middleName: "",
  lastName: "",
  phone: "",
  email: "",
  token: "",
};
const getUserJSON = (userInput) => {
  if (userInputIsValid(userInput)) {
    return createUserJSON(userInput);
  }
  return false;
};
const userInputIsValid = (userInput) => {
  // User Full name
  if (userInput.fullName === "") {
    alert("The Full name can not be empty!");
    return false;
  }
  if (userInput.fullName.search(/\d+/g) !== -1) {
    alert("The Full name can not include numbers!");
    return false;
  }

  // User phone number
  if (userInput.phone === "") {
    alert("The phone number can not be empty!");
    return false;
  }

  // User email
  if (userInput.email === "") {
    alert("The email can not be empty!");
    return false;
  }

  // Token
  if (userInput.token === "") {
    alert("The token can not be empty!");
    return false;
  }
  return true;
};
const formatUserFullName = (userFullname) => {
  return userFullname.split(" ");
};

const createUserJSON = (userInput) => {
  let userInfoJSON = emptyUserJSON;
  const userFullname = formatUserFullName(userInput.fullName);
  userInfoJSON.firstName = userFullname[0];
  userInfoJSON.middleName = userFullname[1];
  userInfoJSON.lastName = userFullname[2];
  userInfoJSON.phone = userInput.phone;
  userInfoJSON.email = userInput.email;
  userInfoJSON.token = userInput.token;

  return userInfoJSON;
};

export { getUserJSON, emptyUserJSON };
