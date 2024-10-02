const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A música é uma forma de arte que transcende fronteiras, culturas e gerações. Desde os tempos mais antigos, ela tem sido uma linguagem universal que expressa emoções,conta histórias e conecta pessoas.Cada canção tem o poder de evocar memórias e sentimentos profundos seja durante um momento de alegria, tristeza ou reflexão.Além  disso, a diversidade de gêneros e estilos musicais nos permite explorar diferentes ritmos e melodias, cada um trazendo algo único para nossas vidas. Pensando nisso você acha que a música é importante para nosso dia a dia?",
        alternativas: [
            {
                texto: "Acredito que sim! A música nos inspira e pode até aumentar a criatividade.",
                afirmacao: "Sim."
            },
            {
                texto: "Na verdade, não acho que a música seja tão importante assim.Para mim, é apenas um complemento, e posso viver bem sem ela.",
                afirmacao: "Não."
            },
        ]
    },
    {
        enunciado: "A música tem o poder de nos transportar para diferentes momentos e emoções e as playlists são uma forma incrível de capturar essas experiências.Pensando nisso, qual a sua playlist favorita?",
        alternativas: [
            {
                texto: "Uma playlist de músicas para malhar, que me motiva a ficar ativa.",
                afirmacao: "Sim."
            },
            {
                texto: "Uma playlist de músicas relaxantes, perfeita para momentos de descanso.",
                afirmacao: "Não."
            },
        ]
    },
    {

        enunciado: "Nos últimos anos, as redes sociais se tornaram uma parte fundamental das nossas vidas, e isso inclui a maneira como consumimos e interagimos com a música. Com plataformas como instagra, tiktok e twiter, os artistas tem uma nova forma de se conectar diretamente com seus fãs, compartilhando não só músicas, mas também histórias pessoais e processos criativos.Além disso,as redes sociais permitem que os ouvintes descubram novas músicas e artistas de maneira mais rápida e acessível.Diante desse cenário, você acredita que as redes sociais mudaram significadamente a forma como consumimos e interagimos com a música? ",
        alternativas: [
            {
                texto: "Sim, as redes sociais mudaram muito a forma como consumimos música. Elas facilitam a descoberta de novos artistas e permitem que os fãs interajam diretamente com seus ídolos.",
                afirmacao: "Sim."
            },
            {
                texto: "Não, eu acho que as redes sociais não mudaram tanto assim.Embora elas ajudem na divulgação, muitas vezes a qualidade da música se perde em meio a tanta informação, e isso pode ser confuso para os ouvintes.",
                afirmacao: "Não."
            },
         ]
    },
    {
        enunciado: "A música sempre teve um papel significativo na sociedade, mas com o avanço da tecnologia e o acesso facilitado a diferentes estilos e gêneros, sua influência no comportamento, das pessoas se tornou ainda mais evidente.Por exemplo, canções mais alegres, podem animar as pesssoas e incentivar comportamentos mais sociais.Diante disso, você acha que a música realmente tem o poder de influenciar o comportamento das pessoas?",
        alternativas: [
            {
                texto: "Sim, eu acredito que a música pode influenciar muito o comportamento das pessoas.Ela tem o poder de provocar emoções.",
                afirmacao: "Sim."
            },
            {
                texto: "Não, acho que causa um impacto tão grande no comportamento.As decisões e ações das pessoas são mais influenciadas por fatores sociais e pessoais, e não a música.",
                afirmacao:"Não."
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}