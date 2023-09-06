/* 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, 
le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */
const teamContainer = document.getElementById("teams_container");
const teams = [
  {
    name: "Wayne",
    lastName: "Barnett",
    job: "Founder & CEO",
    img: "./asset/img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela",
    lastName: "Caroll",
    job: "Chief Editor",
    img: "./asset/img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter",
    lastName: "Gordon",
    job: "Office Manager",
    img: "./asset/img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela",
    lastName: "Lopez",
    job: "Social Media Manager",
    img: "./asset/img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott",
    lastName: "Estrada",
    job: "Developer",
    img: "./asset/img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara",
    lastName: "Ramos",
    job: "Designer",
    img: "./asset/img/barbara-ramos-graphic-designer.jpg",
  },
];
//elementi del form
const formEl = document.getElementById("form");
const buttonEl = document.querySelector("button");

//stampare in console le informazioni
function arrayTeams(array) {
  for (let i = 0; i < teams.length; i++) {
    const array = teams[i];
    console.log(array);
    for (const key in array) {
      console.log(key);
      console.log(array[key]);
    }
    //stampo in pagina come immagine una stringa
    let markup = ` <div>
   ${array.img} + ${array.name} + ${array.lastName} + ${array.job}
  </div>`;
    //stampare in pagina
    markup = ` <div class="card border-dark mb-4 col-8 ">
  <img src="${array.img}" alt="" />
  <h3 class="p-2">  ${array.name}  ${array.lastName}</h3>
  <span class="p-2">${array.job}</span>
</div>`;
    teamContainer.innerHTML += markup;
  }
}
let newTeam;
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameEl = document.getElementById("name").value;
  const lastNameEl = document.getElementById("lastName").value;
  const workEl = document.getElementById("work").value;
  const imgEl = document.getElementById("image").value;
  newTeam = {
    name: nameEl,
    lastName: lastNameEl,
    job: workEl,
    img: imgEl,
  };
  console.log(nameEl);
  teams.push(newTeam);
  console.log(newTeam);
  arrayTeams(newTeam);
});
