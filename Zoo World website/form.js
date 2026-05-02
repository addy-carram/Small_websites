function calcul() {
  let name = document.getElementById("name").value;
  let age = Number(document.getElementById("age").value);
  let nrTickets = Number(document.getElementById("tickets").value);
  let price = Number(document.getElementById("price").value);
  let ticketsType = document.querySelector('input[name="visit"]:checked');
  let visitType = ticketsType ? ticketsType.value : "";
  let animal = document.getElementById("animal").value;
  let guideYesNo = document.getElementById("guide").checked;

  if (!name || !age || !nrTickets || !price || !animal || !ticketsType) {
    alert("Pease fill all the gap");
    return;
  }

  let costTotal = nrTickets * price;

  // checking the age
  let messageAge = age < 18;
  let messageAgeInRezult;
  if (messageAge) {
    messageAgeInRezult = "The child need to be acompanied by a parent";
  } else messageAgeInRezult = " Access is allowed";

  // checking the type of visit
  let visitMessage;
  if (visitType === "familly") {
    visitMessage = "Family discount available!";
  } else if (visitType === "group") {
    visitMessage = "Please notify us about your group in advance.";
  } else {
    visitMessage = "Individual visit — flexible schedule.";
  }

  let greeting = "Hello, " + name + "! Welcome to the zoo.";
  let animalText = "We know you love " + animal + "s — you'll see one today!";

  let div = document.getElementById("rezult");
  div.style.display = "block";
  div.innerHTML =
    "<strong>Visit Summary</strong><br><br>" +
    greeting +
    "<br>" +
    "Name: " +
    name +
    "<br>" +
    "Age: " +
    age +
    " years old<br>" +
    "Favourite animal: " +
    animal +
    "<br>" +
    "Visit type: " +
    visitType +
    "<br>" +
    "Guide requested: " +
    (guideYesNo ? "Yes" : "No") +
    "<br>" +
    "Total cost: $" +
    costTotal +
    " (" +
    nrTickets +
    " x $" +
    price +
    ")<br>" +
    "Status: " +
    (messageAge ? "Minor" : "Adult") +
    "<br>" +
    messageAgeInRezult +
    "<br>" +
    visitMessage +
    "<br><br>" +
    "<em>" +
    animalText +
    "</em>";
}

function resetForm() {
  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let nrTickets = document.getElementById("tickets");
  let price = document.getElementById("price");
  let animal = document.getElementById("animal");
  let guideYesNo = document.getElementById("guide");

  name.value = "";
  age.value = "";
  nrTickets.value = "";
  price.value = "";
  animal.value = "";
  guideYesNo.checked = false;

  let radios = document.querySelectorAll('input[name="vizita"]');
  radios.forEach(function (r) {
    r.checked = false;
  });

  let content = document.getElementById("rezult");
  content.style.display = "none";
  content.innerHTML = "";
}
