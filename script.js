//My age
const MyBirthday = new Date(2003, 1, 21);
const Myage = (new Date() - MyBirthday) / 1000 / 3600 / 24 / 365.25;
document.getElementById("age").innerHTML =
  "Je mi " + Math.floor(Myage) + " let";

//PROJECT   grid item factory
function create_grid_item() {
  //Vytváření nového elementu v grid-item s classname = item      ve kterém budou následujcí elementy
  const plus = document.getElementById("new-grid-item");
  const gridContainer = document.getElementById("grid-container");
  const newDiv = document.createElement("div");
  newDiv.className = "item";
  gridContainer.appendChild(newDiv);
  gridContainer.insertBefore(plus, newDiv);

  //Vytváření nového elementu v item s classname = photo      ve kterém bude photo
  const newPhoto = document.createElement("div");
  newPhoto.className = "photo";
  newDiv.appendChild(newPhoto);

  //Vytváření nového elementu v item s classname = project-info       ve kterém bude krátký popis
  const newProjectInfo = document.createElement("div");
  newProjectInfo.className = "project-info";
  newDiv.appendChild(newProjectInfo);

  //Vytváření nového elementu v item s classname = description        ve kterém bude něco o kontentu
  const newDescription = document.createElement("div");
  newDescription.className = "description";
  newDescription.innerHTML = "tvoje mama";
  newDiv.appendChild(newDescription);
}
