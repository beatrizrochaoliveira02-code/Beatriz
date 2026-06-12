// ECONOMIA DE ÁGUA

const botaoAgua =
document.getElementById("calcularAgua");

const resultadoAgua =
document.getElementById("resultadoAgua");

botaoAgua.addEventListener("click", function(){

    let litros =
    Math.floor(Math.random() * 500);

    resultadoAgua.innerHTML =
    "Você economizou aproximadamente " +
    litros +
    " litros de água utilizando práticas sustentáveis! 🌎";

});


// QUIZ SUSTENTÁVEL

const quizBtn =
document.getElementById("quizBtn");

const resultadoQuiz =
document.getElementById("resultadoQuiz");

quizBtn.addEventListener("click", function(){

    let resposta = prompt(
    "Qual prática ajuda o agro sustentável?\n\nA) Desmatamento\nB) Irrigação Inteligente\nC) Poluição"
    );

    if(resposta === null){

        resultadoQuiz.innerHTML =
        "⚠️ Quiz cancelado.";

        return;
    }

    resposta =
    resposta.toUpperCase();

    if(resposta === "B"){

        resultadoQuiz.innerHTML =
        "✅ Correto! A irrigação inteligente reduz desperdícios.";

    }else{

        resultadoQuiz.innerHTML =
        "❌ Resposta incorreta. A alternativa correta é B.";

    }

});


// IMPACTO AGRO E CIDADE

const impactoBtn =
document.getElementById("impactoBtn");

const impactoTexto =
document.getElementById("impactoTexto");

impactoBtn.addEventListener("click", function(){

    impactoTexto.innerHTML =
    "🚜 O agro sustentável produz alimentos com menor impacto ambiental e abastece milhões de pessoas nas cidades.";

}); 