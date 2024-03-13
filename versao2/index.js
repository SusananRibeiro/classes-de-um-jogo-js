const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// Classe Heroi que representa um herói de uma aventura
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // Método para exibir a mensagem de ataque
    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'atacou';
        }
        // Exibe a mensagem completa
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

rl.question("Qual é o seu nome? ", function (nome) {
    rl.question("Qual a sua idade? ", function (idade) {
        rl.question("Qual é o tipo do herói (mago, guerreiro, monge ou ninja)? ", function (tipo) {
            const meuHeroi = new Heroi(nome, idade, tipo);
            meuHeroi.atacar();
            rl.close();
        });
    });
});