var readline = require("readline-sync")
let i = 0
var nome = '';
while (i <= 50) {
    console.log("+------ Passagens Aéreas ------+")
    console.log("|                              |")
    console.log("|    1 - Comprar Passagem      |")
    console.log("|    2 - Consultar Voos        |")
    console.log("|    3 - Mapa de Assentos      |")
    console.log("|    4 - Emitir Ticket         |")
    console.log("|    0 - Encerrar Programa     |")
    console.log("|                              |")
    console.log("+------------------------------+")
    var pergunta = readline.question("Digite sua escolha: ")
    switch (pergunta) {
        case "1":
            console.log("+------ Passagens Aéreas ------+")
            console.log("Você está em -> Comprar Passagem")
            var nome = readline.question("Nome: ")
            var sobrenome = readline.question("Sobrenome: ")
            var idade = readline.question("Idade: ")
            var idades = parseInt(idade)
            var assento = readline.question("Assento: ")
            var origem = readline.question("Origem: ")
            var destino = readline.question("Destino: ")
            console.log("+------ Passagens Aéreas ------+")
            console.log("Você está em -> Comprar Passagem")
            console.log("*Resumo da Compra*")
            console.log("+------ Passagens Aéreas ------+")
            console.log("Cliente: " + nome + sobrenome)
            console.log("Idade: " + idades)
            console.log("Assento: " + assento)
            console.log("Voo: " + origem + " X " + destino)
            console.log("Valor: R$3500")
            break;
        case "2":
            console.log("+------ Passagens Aéreas ------+")
            console.log("Você está em -> Consulta de Voos")
            console.log("Origem         X         Destino")
            console.log("--------------------------------")
            console.log("Presidente Prudente       Dublin")
            console.log("Presidente Prudente       New York")
            console.log("Presidente Prudente       São Paulo")
            console.log("Presidente Prudente       Rio de Janeiro")
            break;
        case "3":
            console.log("+------ Passagens Aéreas ------+")
            console.log("Você está em -> Mapa de Assentos")
            var fileira1 = "";
            var fileira2 = "";
            for (let y = 1; y <= 12; y++) {
                if (assento == "A" + y) {
                    fileira1 += " X "
                    fileira2 += "B" + y + " "
                }
                else if (assento == "B" + y) {
                    fileira1 += " X "
                    fileira2 += "A" + y + " "
                }
                else {
                    fileira1 += "A" + y + " "
                    fileira2 += "B" + y + " "
                }
            }
            console.log(fileira1)
            console.log(fileira2)
            break;
        case "4":
            if (nome.length > 0) {
                console.log("+------ Passagens Aéreas ------+")
                console.log("Você está em -> Emitir Ticket")
                console.log(" OBRIGADO POR VIAJAR CONOSCO ")
                console.log("Cliente: " + nome + " " + sobrenome)
                console.log("Idade: " + idades + " Assento: " + assento)
                console.log("Origem/Destino: " + origem + " -> " + destino)
                console.log("Status do Voo: Confirmado")
            }
            else {
                console.log("Você ainda não comprou sua passagem.")
            }
            break;
        case "0":
            i = 51
            break;
    }
}