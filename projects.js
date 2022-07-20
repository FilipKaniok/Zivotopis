document.addEventListener("DOMContentLoaded", create_grid_item);
//atribut pro měnění id itemu
var IdItem = 0;

//PROJECT   grid item factory
function create_grid_item() {
  //Vytváření nového elementu v grid-item s classname = item      ve kterém budou následujcí elementy
  const plus = document.getElementById("new-grid-item");
  const gridContainer = document.getElementById("grid-container");
  const newDiv = document.createElement("div");
  newDiv.className = "item";
  newDiv.id = "item" + IdItem;
  gridContainer.appendChild(newDiv);
  gridContainer.appendChild(plus);
  gridContainer.insertBefore(newDiv, plus);

  //Vytváření nového elementu v item s id = photo      ve kterém bude photo

  const newPhotoGrid = document.createElement("form");
  newPhotoGrid.id = "photoGrid";
  newDiv.appendChild(newPhotoGrid);
  const newImage = document.createElement("img");
  newImage.id = "ImgOutput";
  newImage.src = "#";
  newPhotoGrid.appendChild(newImage);
  const newPhoto = document.createElement("input");
  newPhoto.type = "file";
  newPhoto.id = "photoInp";
  newPhoto.onchange = "loadFile(event)";
  newPhoto.accept = "image/png, image/gif, image/jpeg";
  newPhoto.onchange = "loadFile(event)";
  newPhotoGrid.appendChild(newPhoto);

  //Vytváření nového elementu v item s id = project-info       ve kterém bude krátký popis
  const newProjectInfo = document.createElement("input");
  newProjectInfo.id = "project-info";
  newDiv.appendChild(newProjectInfo);

  //Vytváření nového elementu v item s id = tag-name       ve kterém budou tag tlačítka
  const newTags = document.createElement("input");
  newTags.id = "tag-name";
  newDiv.appendChild(newTags);

  //Vytváření nového elementu v item s id = description        ve kterém bude něco o kontentu
  const newDescription = document.createElement("input");
  newDescription.id = "description";
  newDiv.appendChild(newDescription);

  //Vytváření nového tlačítka s id = newdeleteBtn      po zmáčknutí odstraní jeden item z gridu

  //Vytváření nového tlačítka s id = newsaveBtn      po zmáčknutí uloží hodnoty a vytvoří nový item s těmito hodnotami
  const newSaveBtn = document.createElement("button");
  newSaveBtn.className = "Save-DeleteBtn";
  newSaveBtn.innerHTML = "Save";
  //newSaveBtn.onclick(save_project);
  newDiv.appendChild(newSaveBtn);

  photoInp.onchange = (evt) => {
    const [file] = photoInp.files;
    if (file) {
      ImgOutput.src = URL.createObjectURL(file);
      console.log(file);
      console.log(FileList);
    }
  };
  IdItem++;
}

function save_project() {
  const savedPhoto = document.createElement("img");
  savedPhoto.id = "photoGrid";
  savedDiv.appendChild(newPhoto);

  const savedProjectInfo = document.createElement("h3");
  savedProjectInfo.innerHTML = newProjectInfo.innerHTML;
  savedProjectInfo.id = "project-info";
  newDiv.appendChild(newProjectInfo);

  const savedDescription = document.createElement("p");
  savedDescription.innerHTML = newDescription.innerHTML;
  savedDescription.id = "description";
  newDiv.appendChild(newDescription);

  //Vytváření nového tlačítka s id = newdeleteBtn      po zmáčknutí odstraní jeden item z gridu
  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.className = "Save-DeleteBtn";
  newDeleteBtn.innerHTML = "Delete";
  //newDeleteBtn.onclick(delete_project);
  newDiv.appendChild(newDeleteBtn);

  IdItem++;
}

function delete_project() {}
