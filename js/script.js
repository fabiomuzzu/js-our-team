// 1 - Creiamo l'array di oggetti

let team = [
    {
        name: "Wayne Barnett",
        ruolo: "Founder & CEO",
        image: '<img src="./img/wayne-barnett-founder-ceo.jpg" alt="">',
    },

    {
        name: "Angela Caroll",
        ruolo: "Chief Editor",
        image: '<img src="./img/angela-caroll-chief-editor.jpg" alt="">',
    },

    {
        name: "Walter Gordon",
        ruolo: "Office Manager",
        image: '<img src="./img/walter-gordon-office-manager.jpg" alt="">',
    },

    {
        name: "Angela Lopez",
        ruolo: "Social Media Manager",
        image: '<img src="./img/angela-lopez-social-media-manager.jpg" alt="">',
    },

    {
        name: "Scott Estrada",
        ruolo: "Developer",
        image: '<img src="./img/scott-estrada-developer.jpg" alt="">',
    },

    {
        name: "Barbara Ramos",
        ruolo: "Graphic Designer",
        image: '<img src="./img/barbara-ramos-graphic-designer.jpg" alt="">',
    },
];

// 2 - Creiamo ciclo for per stampare in console ogni membro del team con le informazioni
for(let key in team){
    console.log(team[key]);
}

console.log('________________')
// 3 - Creo ciclo for in per stampare nel dom tutti i dati
for (let i=0; i<team.length; i++){
    let teamInfo = team[i];
    console.log(teamInfo);

    let team_list = document.getElementById('team_list');
    let my_container = document.createElement('div');
    my_container.classList.add('col-4',)

    my_container.innerHTML = `${teamInfo.image}`;
    team_list.appendChild(my_container);
}