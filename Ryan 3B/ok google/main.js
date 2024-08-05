const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const caixaResultado1 = document.querySelector(".caixa-principal");
const perguntas = [
    {
        enunciado: "O que e o esporte social ?"
         alternativas:[
            
            "esporte social objetiva a inclusão social, visa à participação, ocupa-se com valores, preocupa-se com a socialização, submete-se à ludicidade, orienta-se para a equidade, enfatiza o lazer e resulta em integração."
            
            "favorecerem a consciência corporal, libertam seus limites, aumentam suas potencialidades e desenvolvem o espírito de solidariedade, de cooperação e de respeito coletivo."
        ]
        },
 {
        enunciado: "Qual é a influência do esporte na cultura ?"
        alternativas:[
            "o esporte é parte fundamental da cultura do país tomada como representação da identidade nacional, incorporando na sua prática os valores da sociedade"
        
             "Estimula a boa comunicação e a resolução de conflitos. – Desperta valores essenciais como: amizade, solidariedade, confiança e cooperação. – Ensina a respeitar as limitações físicas e as diferenças culturais entre os indivíduos "
        ]
    },
      {
        enunciado: "o esporte é afetado pela poluição?"
        alternativas:[
            "Com a diminuição da oxigenação dos músculos, a produção de energia também é reduzida, fazendo com que a capacidade de realizar exercícios fique prejudicada"
        "Não o esporte nao e afetado pela poluição"
        
        ]
      },


]

let atual = 0;
let perguntaAtual;
function mostraPerguntas9{
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[0]. enunciado;
}
function mostraPerguntas(){
 if (atual >=perguntas.legth)
 mostraResultado() {
    return}
 }