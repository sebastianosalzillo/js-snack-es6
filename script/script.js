const bici = [
    { nome: 'Bici A', peso: 8.5 },
    { nome: 'Bici B', peso: 7.2 },
    { nome: 'Bici C', peso: 9.1 },
    { nome: 'Bici D', peso: 6.8 }
];



function trovaBiciLeggera(biciArray) {
    let biciLeggera = biciArray[0];


    for (let i = 1; i < biciArray.length; i++) {

        if (biciArray[i].peso < biciLeggera.peso) {
            biciLeggera = biciArray[i];
        }
    }
    return biciLeggera;

}


const biciConPesoMinore = trovaBiciLeggera(bici);
console.log("La bici con il peso minore è:", biciConPesoMinore);

const squadre = [
    { nome: 'Juventus', punti: 0, falliSubiti: 0 },
    { nome: 'Milan', punti: 0, falliSubiti: 0 },
    { nome: 'Inter', punti: 0, falliSubiti: 0 },
    { nome: 'Napoli', punti: 0, falliSubiti: 0 }
];

function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = generaNumeroCasuale(20, 100);     
    squadre[i].falliSubiti = generaNumeroCasuale(10, 50); 
}



const squadreFalliSubiti = squadre.map(squadra => {
    return { nome: squadra.nome, falliSubiti: squadra.falliSubiti };
});

console.log("Squadre con punti e falli subiti casuali:", squadre);
console.log("Nuovo array con nome e falli subiti:", squadreFalliSubiti);


