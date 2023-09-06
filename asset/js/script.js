/* 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, 
le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe */
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

//stampare in console le informazioni
for (let i = 0; i < teams.length; i++) {
  const people = teams[i];
  console.log(people);
  for (const key in people) {
    console.log(key);
    console.log(people[key]);
  }
  //stampo in pagina come immagine una stringa
  const markup = ` <div>
   ${people.img} + ${people.name} + ${people.lastName} + ${people.job}
  </div>`;
  teamContainer.innerHTML += markup;
}
