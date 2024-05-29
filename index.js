// Declarar variáveis para armazenar o nome e a experiência (XP) do herói
let nomeHeroi = "Victor"; // Você pode substituir por qualquer nome
let experienciaHeroi = 7500; // Você pode substituir por qualquer valor de XP

// Variável para armazenar o nível do herói
let nivelHeroi = "";

// Estrutura de decisão para determinar o nível do herói
if (experienciaHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (experienciaHeroi >= 1000 && experienciaHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (experienciaHeroi >= 5001 && experienciaHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else if (experienciaHeroi >= 10001) {
    nivelHeroi = "Radiante";
}

// Exibir a mensagem final
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
