//My age
const MyBirthday = new Date(2003, 1, 21);
const Myage = (new Date() - MyBirthday) / 1000 / 3600 / 24 / 365.25;
document.getElementById("age").innerHTML =
  "Je mi " + Math.floor(Myage) + " let";
