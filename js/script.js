// 1 - Creiamo l'array di oggetti

let team = [
    {
        name: "Wayne Barnett",
        ruolo: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Angela Caroll",
        ruolo: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },

    {
        name: "Walter Gordon",
        ruolo: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },

    {
        name: "Angela Lopez",
        ruolo: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },

    {
        name: "Scott Estrada",
        ruolo: "Developer",
        image: "scott-estrada-developer.jpg",
    },

    {
        name: "Barbara Ramos",
        ruolo: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    },
];

// 2 - Creiamo ciclo for per stampare in console ogni membro del team con le informazioni
for(let key in team){
    console.log(team[key]);
}


// 3 - Creo ciclo for in per stampare nel dom tutti i dati
for (let key in team){
    document.getElementById('team_list').innerHTML = JSON.stringify(team);
}