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
let nameEl = document.getElementById("name");
const lastNameEl = document.getElementById("lastName");
const workEl = document.getElementById("work");
const imgEl = document.getElementById("image");
//array nuovo
let newTeam;

//stampare in console le informazioni

for (let i = 0; i < teams.length; i++) {
  const people = teams[i];
  console.log(people);
  for (const key in people) {
    console.log(key);
    console.log(people[key]);
  }

  createElement(people);
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  ///inserire un nuovi elementi oggetti
  newTeam = {
    name: nameEl.value,
    lastName: lastNameEl.value,
    job: workEl.value,
    img: imgEl.value,
  };
  teams.push(newTeam);
  console.log(newTeam);
  //alerta
  if (!isNaN(nameEl.value && lastNameEl.value && workEl.value)) {
    alert("Non puoi inserire numeri");
  } else {
    createElement(newTeam);
  }
  nameEl.value = "";
  lastNameEl.value = "";
  workEl.value = "";
  imgEl.value = "";
});

//funzione per creare le card del team
function createElement(array) {
  let markup = ` <div>
  ${array.img} + ${array.name} + ${array.lastName} + ${array.job}
 </div>`;
  //stampare in pagina
  markup = ` <div class="card border-dark mb-4 col-12 col-md-4 col-lg-3 " >
 <img src="${array.img}" alt="" class="card-img-top"  />
 <h3 class="p-2">  ${array.name}  ${array.lastName}</h3>
 <span class="p-2">${array.job}</span>
</div>`;

  teamContainer.innerHTML += markup;
}
