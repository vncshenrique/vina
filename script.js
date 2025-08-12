const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Maracanã está lotado, uma atmosfera elétrica para a final da Libertadores: Vasco da Gama contra o rival Flamengo. O apito inicial ecoa. Qual a postura inicial do Vasco nos primeiros 15 minutos?",
        alternativas: [
            {
                texto: "O Vasco inicia o jogo pressionando alto, buscando o gol rapidamente.",
                afirmacao: "O Vasco começou com intensidade, tentando sufocar o Flamengo. Os primeiros minutos foram de muita marcação e disputas acirradas no meio-campo."
            },
            {
                texto: "O Vasco adota uma postura mais cautelosa, estudando o adversário e fechando os espaços.",
                afirmacao: "O Vasco preferiu a prudência no início, organizando bem a defesa e esperando por chances nos contra-ataques. O Flamengo tentava construir, mas encontrava um bloqueio cruzmaltino."
            }
        ]
    },
    {
        enunciado: "O primeiro tempo termina sem gols, com chances para ambos os lados, mas nenhuma clara. No segundo tempo, o Flamengo volta pressionando forte, criando perigo. Como o Vasco se defende para não sofrer o gol?",
        alternativas: [
            {
                texto: "O goleiro vascaíno se agiganta e faz defesas espetaculares, salvando o time repetidamente.",
                afirmacao: "No segundo tempo, o goleiro vascaíno se agigantou, realizando defesas acrobáticas que levantaram a torcida e evitaram o gol rubro-negro em momentos cruciais."
            },
            {
                texto: "A zaga vascaína se fecha com raça, bloqueando todos os chutes e afastando o perigo da área.",
                afirmacao: "A linha defensiva do Vasco se mostrou inabalável. Zagueiros e volantes se doavam em cada lance, bloqueando chutes e interceptando passes, frustrando as investidas flamenguistas."
            }
        ]
    },
    {
        enunciado: "Aos 35 minutos do segundo tempo, em um rápido contra-ataque, o camisa 10 do Vasco recebe a bola na intermediária. Ele tem espaço para criar. Qual a jogada que ele decide fazer?",
        alternativas: [
            {
                texto: "Ele lança a bola em profundidade para o atacante correr e finalizar.",
                afirmacao: "O camisa 10 vascaíno, com visão de jogo espetacular, lançou uma bola precisa em profundidade. O atacante, em velocidade, invadiu a área pela direita."
            },
            {
                texto: "Ele dribla dois marcadores e faz um cruzamento perfeito na cabeça do centroavante.",
                afirmacao: "Com um drible desconcertante, o maestro vascaíno deixou dois marcadores para trás, limpou a jogada e cruzou a bola com perfeição na segunda trave, buscando o centroavante."
            }
        ]
    },
    {
        enunciado: "A bola chegou para o camisa 9 do Vasco! Ele se antecipou ao zagueiro e cabeceou para o gol! A bola estufa as redes! É GOL DO VASCO! O Maracanã explode em delírio vascaíno! O que acontece nos minutos finais, com o Flamengo desesperado em busca do empate?",
        alternativas: [
            {
                texto: "O Vasco recua e se defende com tudo, resistindo à pressão até o apito final.",
                afirmacao: "Com a vantagem no placar, o Vasco se fechou ainda mais, suportando a pressão sufocante do Flamengo. Cada bola afastada era uma vitória, cada desarme um alívio. A defesa vascaína, heroica, não deu espaços."
            },
            {
                texto: "O Vasco ainda tenta um segundo gol em outro contra-ataque, para selar a vitória e não dar chances ao rival.",
                afirmacao: "Mesmo com o gol, o Vasco manteve a postura inteligente, buscando um contra-ataque rápido para selar a vitória. O Flamengo se lançava ao ataque, mas a defesa cruzmaltina estava irretocável."
            }
        ]
    },
    {
        enunciado: "O apito final soa! O Vasco é Campeão da Libertadores em cima do Flamengo no Maracanã! Como a torcida vascaína e os jogadores celebram este momento histórico e inesquecível?",
        alternativas: [
            {
                texto: "A festa toma conta do Maracanã, com jogadores e torcedores celebrando em êxtase, e se espalha pelas ruas do Rio de Janeiro.",
                afirmacao: "A explosão de alegria é total! O Maracanã é tomado por uma festa inesquecível. Jogadores e torcedores se abraçam e choram, enquanto o grito de 'É CAMPEÃO!' ecoa por todo o estádio. A Cruz de Malta brilha intensamente no Rio de Janeiro, com a festa se espalhando por cada esquina da cidade! É a glória eterna, é o Vasco Campeão da América!"
            },
            {
                texto: "Os jogadores e a comissão técnica correm para o abraço no centro do campo, enquanto a torcida canta o hino sem parar, em uma emoção contagiante e histórica.",
                afirmacao: "A cena é emocionante! No centro do Maracanã, jogadores e comissão técnica se unem em um abraço coletivo histórico, celebrando o título mais importante de suas carreiras. A torcida canta o hino com todas as forças, e a euforia toma conta de São Januário e de todos os vascaínos. O Vasco é, mais uma vez, o Rei da América!"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; // Acumula as afirmações para formar a história

function mostraPergunta() {
    // Se todas as perguntas foram respondidas, mostra o resultado final
    if (atual >= perguntas.length) {
        caixaPerguntas.textContent = ""; // Limpa a pergunta
        caixaAlternativas.innerHTML = ""; // Limpa as alternativas
        caixaResultado.style.display = "block"; // Mostra a caixa de resultado
        textoResultado.textContent = historiaFinal; // Exibe a história final
        return; // Sai da função
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas anteriores antes de criar novas
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.classList.add('botao-alternativa'); // Adiciona a classe para estilização
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    // Adiciona a afirmação da opção escolhida à história final, com um espaço
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++; // Avança para a próxima pergunta
    mostraPergunta(); // Chama a próxima pergunta ou mostra o resultado final
}

// Inicia o jogo quando a página é carregada
mostraPergunta();
