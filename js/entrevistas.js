const paragrafoEntrevista = [...document.querySelectorAll('.entrevistaDescricao')];

const paragrafos = [
    'Aline Paulino Teixeira, psicóloga e neuropsicóloga, falou sobre os desafios que enfrentou como mulher negra em Guanambi. Chegando à cidade há três anos, ela buscava avançar na carreira e realizar sonhos pessoais. Aline compartilhou que, em todos os lugares por onde passou, enfrentou a percepção equivocada e o preconceito devido à sua cor. Ela destacou que, mesmo em contextos de luta antirracista, a presença de mulheres negras em posições de liderança ainda é muito limitada, refletindo uma grande defasagem na representatividade.',

    'Martha de Cássia, professora no Instituto Federal há 28 anos, compartilhou sua jornada de vida em Guanambi e os desafios enfrentados como mulher negra. Ela destacou as dificuldades da infância, quando estudou em uma escola particular majoritariamente branca, onde sofreu discriminação racial. Ao longo de sua carreira, Martha enfrentou preconceitos, mas sempre encontrou força na educação, que considera essencial para a ascensão das mulheres negras. Com uma trajetória marcada por superação e empoderamento, ela enfatiza a importância da autoestima e da educação como ferramentas fundamentais para vencer as adversidades e conquistar espaços de poder. Martha encerra sua fala encorajando mulheres a buscar autoconhecimento e amor próprio, acreditando que o verdadeiro poder vem de dentro.',
    
    'Maria Regina compartilhou sua trajetória como mulher negra, começando em Caeté, onde sempre esteve envolvida com política e causas sociais. Ao se mudar para Guanambi, enfrentou preconceito no trabalho, especialmente no hospital onde atua, e percebeu que sua cor de pele era uma barreira para alcançar cargos de liderança. Apesar das dificuldades, ela segue lutando por visibilidade e reconhecimento para as mulheres negras na cidade. Maria Regina deseja formar um grupo de apoio em seu bairro, com foco em educação e oportunidades políticas, e enfatiza a necessidade de maior apoio do poder público para essas mulheres. Ela espera que iniciativas como essa entrevista ajudem a dar voz a quem raramente é ouvido.',

    'Dona Deth, uma professora aposentada de Guanambi, enfrentou desafios como discriminação racial e pobreza para se tornar uma figura pioneira na comunidade. Começando sua vida vendendo bolos nas ruas, ela se destacou como educadora e foi a primeira mulher negra a ocupar diversos papéis importantes na região, como catequista, fotógrafa e candidata a prefeita. Sempre dedicada à luta por políticas públicas e inclusão social, Dona Deth acredita que a participação política e a educação são essenciais para que jovens negros possam conquistar seu espaço na sociedade. Hoje, ela é respeitada por sua trajetória e continua atuando em prol da comunidade.',

    'Nesta entrevista,  Leidiane fala sobre sua trajetória como mulher negra em Guanambi, cidade onde se mudou após passar em um concurso público. Ela destaca a presença do racismo e do machismo na cidade, mencionando que, por ser uma mulher negra retinta, enfrenta desafios específicos. Leidiane enfatiza o papel da educação como uma ferramenta essencial para o empoderamento,  relatando suas próprias dificuldades para acessar a educação superior. Além disso, ela expressa uma visão positiva sobre o futuro das mulheres em Guanambi, apontando a importância representatividade e da participação ativa na sociedade.',

    'No diálogo, Ana Paula apresentou sua trajetória como mulher negra em Guanambi, ressaltando os desafios que enfrentou devido ao racismo e ao machismo. Ela destacou que, apesar das dificuldades, foi encorajada por sua família a se sentir bonita e capaz desde a infância, o que lhe deu uma base sólida para enfrentar adversidades. Ana Paula compartilhou experiências pessoais de discriminação, incluindo comentários ofensivos no ambiente de trabalho, enfatizando a importância de reconhecer e combater o racismo em diversas áreas da vida.',

    'Durante o bate-papo, os desafios enfrentados por mulheres negras foram discutidos, com ênfase na experiência pessoal da participante. Letycia contou como, desde a infância, foi encorajada a ocupar espaços e a fortalecer sua autoestima, apesar das barreiras sociais e econômicas que privilegiam os homens e restringem as oportunidades, principalmente para mulheres negras. A conversa também explorou a determinação necessária para superar esses desafios, sublinhando a persistência do racismo e a importância de lutar por igualdade e justiça nas oportunidades.',

    'Ao relatar sua experiência em Guanambi, para onde se mudou em 2007 vinda de Salvador, Eliane Barbosa compartilhou sua trajetória como mulher negra na cidade. Ela descreveu o choque cultural que enfrentou, notando diferenças significativas na cultura e na culinária em comparação com Salvador. Apesar de ter sido bem acolhida pela comunidade local, a entrevistada passou por situações de preconceito que até então não havia vivenciado, como questionamentos sobre sua moradia e suposições de que ela trabalhava para outras pessoas, o que a fez perceber a discriminação racial de forma mais evidente em seu novo ambiente.',

    'Na entrevista,  Fabiana compartilhou sua trajetória como mulher negra em Guanambi. Aos 29 anos, ela passou a infância na zona rural e se mudou para a cidade aos 10 anos, quando seu pai continuou trabalhando no campo e sua mãe se tornou empregada doméstica. Sempre estudou em escolas públicas e só começou a considerar a universidade durante o ensino médio, incentivada por colegas que a encorajaram a prestar vestibular. Optou por cursar Comunicação na Universidade Estadual do Sudoeste da Bahia (UESB), ingressando pelo sistema de cotas, uma medida que ela defende. Apesar das dificuldades financeiras e desafios para permanecer na universidade, conseguiu se formar e, ao retornar a Guanambi, enfrentou obstáculos para encontrar um emprego.',

    'Durante a conversa, Ludmilla falou sobre sua experiência como mulher negra em Guanambi. Ela revelou que nunca havia refletido profundamente sobre o impacto de sua identidade racial, em parte devido à falta de letramento racial na sua região. Ludmilla admitiu que, por não ter pensado nessas questões antes, não conseguia separar sua história pessoal de sua identidade racial. Ela mencionou, com uma certa leveza, que sempre se concentrou mais em ser mulher do que em ser negra, e confessou que a pergunta a pegou de surpresa, dificultando a elaboração de uma resposta clara sobre sua trajetória. Durante a entrevista,  Ludmilla se emocionou ao relembrar momentos do passado, e essa introspecção destacou a profundidade de suas experiências e sua contínua jornada de autocompreensão e reconhecimento das questões raciais em sua vida.'
]

// inserindo textos nos paragrafos

paragrafoEntrevista.map((el,chave)=>{
    el.innerHTML = paragrafos[chave] 
})

// sessão oculta para responsividade

const mainOculta = document.getElementById('mainOculta');


const imagensEntrevista = [
    '../img/aline.png', 
    "../img/marta.png", 
    "../img/regina.png", 
    "../img/deth.png", 
    "../img/leidiane.png", 
    "../img/ana.png", 
    "../img/letycia.png", 
    "../img/eliane.png", 
    "../img/fabiana.png", 
    '../img/ludmila.png'
];
const nomeEntrevistada = [
    'Aline Paulino', 
    'Martha de Cássia', 
    'Regina Araújo', 
    'Dona Deth', 
    'Leidiane',
    'Ana Paula',
    'Letycia Catarine',
    'Eliane Barbosa',
    'Fabiana Santos',
    'Ludmila Paes'
]
const profissaoEntrevistadas =[
    'Psicóloga e Neuropsicóloga',
    'Professora',
    'Técnica administrativa',
    'Professora',
    'Bibliotecária',
    'Presidente da UNEGRO e agente sócio produtiva',
    'Coordenadora do SineBahia',
    'Nutricionista',
    'Jornalista',
    'Professora'
]

const linkVideos = [
    "https://www.youtube.com/embed/W8gIOXHwDds?si=S0cbxrrEhxOCY_-G",
    'https://www.youtube.com/embed/XicgPu0EmTg?si=t0v2cLR8jO4NqT7Q',
    "https://www.youtube.com/embed/59xGv1SGvE0?si=UkxzTJQOIEnbdv0o",
    'https://www.youtube.com/embed/dz_68eLgAyI?si=43cNpqQR_DU4-_5e',
    'https://www.youtube.com/embed/mY0wlnU_i7U?si=z1hyrqo7Ou5G8vSa',
    'https://www.youtube.com/embed/Kpo_3itQ10Y?si=1bZbVWs_f356v8RF',
    'https://www.youtube.com/embed/tWd1hRszpVQ?si=F9RIqEL0kWlUKNhA',
    'https://www.youtube.com/embed/9qE7rlFY1qI?si=oBJigECQrzPm7vp9',
    'https://www.youtube.com/embed/6_r5xXt3CQo?si=UxKfIlkpEcxjgMnR',
    "https://www.youtube.com/embed/Q8x-xiZghno?si=z26b78V5TQKKTNB_"

    ]

let cards = [];

const arrayCards = (elemento,nomeEntrevistada,profissaoEntrevistadas,linkVideos, chave, cards)=>{
    cardEntrevista = `<div class="card" style="width: 18rem; margin-bottom:3%;"> <img src=${elemento} class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">${nomeEntrevistada[chave]}</h5><p class="card-text">${profissaoEntrevistadas[chave]}</p><a href=${linkVideos[chave]} class="btn btn-primary botao" >ASSISTA</a></div></div>`;

    cards.push(cardEntrevista);
}



imagensEntrevista.map((elemento,chave)=>{
    arrayCards(elemento,nomeEntrevistada,profissaoEntrevistadas,linkVideos, chave, cards)

})
mainOculta.innerHTML = cards.join(' ');

