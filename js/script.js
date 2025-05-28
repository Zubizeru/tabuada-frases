// 01 - Selecionando o formulário
const multiplicationForm = document.querySelector("#multiplication-form");
// 02 - Selecionando o campo de número
const numberInput = document.querySelector("#number");
// 03 - Quantas vezes o número será multiplicado?
const multiplicatorInput = document.querySelector("#multiplicator");

// 05 - Limpando os campos "multiplication-title span" e "#multiplication-operations"
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

// Funções
// 06 - Criando a função que cria tabela
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    // Converta number para inteiro
    number = +number;

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;
        const template = `<div class="row">
                <div class="operation">${number} x ${i} </div>
                <div class="result">= ${result}</div>
            </div>`;

        const parser = new DOMParser();
        const htmlParser = parser.parseFromString(template, "text/html");
        const row = htmlParser.querySelector(".row");
        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerText = number;
};

// Eventos
// 04 - Quando clicar no botão de operação calcular, não quero que ele recarregue a página
multiplicationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // número inserido na tabuada
    const multiplicationNumber = numberInput.value;

    // Quantas vezes eu vou calcular o número inserido
    const multiplicatorNumber = +multiplicatorInput.value;

    // Só será executado se ambos os campos estiverem preenchidos
    if (!multiplicationNumber || !multiplicatorNumber) {
        alert("Por favor, preencha ambos os campos.");
        return;
    }
    
    // criar função que cria a tabela
    createTable(multiplicationNumber, multiplicatorNumber);
});
