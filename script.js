
//My age
const MyBirthday = new Date(2003,1,21);
const Myage = (new Date()-MyBirthday) /1000 /3600 /24 /365.25;
document.getElementById("age").innerHTML="Je mi "+Math.floor(Myage)+" let";

//PROJECT   grid item factory
function create_grid_item()
{
    //<div class="photo"></div>
    //<div class="project-info"></div>
    //<div class="description"></div>
}

