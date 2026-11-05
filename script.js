const storySteps = {
    start: {
        text: "Você acorda dentro de um servidor central. O sistema está instável e precisa de um algoritmo eficiente para ser corrigido. Qual caminho você prefere seguir?",
        choices: [
            { text: "Usar uma busca linear para encontrar o bug", nextStep: "linearSearch" },
            { text: "Usar uma busca binária para ir mais rápido", nextStep: "binarySearch" }
        ]
    },
    linearSearch: {
        text: "A busca linear analisa elemento por elemento. O tempo passa e o servidor superaquece antes de você achar a falha! Fim de jogo.",
        choices: [
            { text: "Tentar Novamente", nextStep: "start" }
        ]
    },
    binarySearch: {
        text: "Excelente! A busca binária divide o problema pela metade a cada passo e encontra o bug em milissegundos. Agora você encontra uma pilha de tarefas travadas.",
        choices: [
            { text: "Resolver usando a regra LIFO (Pilha)", nextStep: "stackSuccess" },
            { text: "Resolver usando a regra FIFO (Fila)", nextStep: "queueFail" }
        ]
    },
    queueFail: {
        text: "Você tentou processar a pilha usando FIFO e causou um estouro de memória (Stack Overflow). Fim de jogo.",
        choices: [
            { text: "Tentar Novamente", nextStep: "start" }
        ]
    },
    stackSuccess: {
        text: "Parabéns! O último a entrar foi o primeiro a sair (LIFO). A estrutura de dados foi liberada e o algoritmo restaurou todo o sistema com sucesso!",
        choices: [
            { text: "Jogar Novamente", nextStep: "start" }
        ]
    }
};

function showStep(stepKey) {
    const step = storySteps[stepKey];
    const storyTextElement = document.getElementById("story-text");
    const choicesBoxElement = document.getElementById("choices-box");

    storyTextElement.innerText = step.text;
    choicesBoxElement.innerHTML = "";

    step.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.addEventListener("click", () => showStep(choice.nextStep));
        choicesBoxElement.appendChild(button);
    });
}

// Inicializa a aventura
showStep("start");