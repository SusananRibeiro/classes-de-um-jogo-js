// Classe Heroi que representa um herói de uma aventura
class Heroi {
    // Construtor para inicializar as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para exibir a mensagem de ataque
    atacar() {
        let ataque;

        // Verifica o tipo do herói e define o ataque correspondente
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

// Exemplo de uso da classe
const meuHeroi = new Heroi('Gandalf', 100, 'mago');
meuHeroi.atacar(); // Saída: "O mago atacou usando usou magia"
