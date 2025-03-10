const agradecimento = document.getElementById('agradecimento')
const equipe = document.getElementById('equipe');

agradecimento.innerHTML = 'Primeiramente, expressamos nossa mais profunda gratidão às mulheres negras de Guanambi que participaram desta pesquisa. Agradecemos por terem confiado em nosso trabalho, abrindo suas histórias de vida com coragem e generosidade. Sabemos que o tempo de cada uma de vocês é valioso, e somos imensamente gratos por terem abdicado de parte dele para colaborar conosco. A riqueza de suas narrativas e a força de suas trajetórias foram fundamentais para a construção deste trabalho, e sem suas vozes, ele não teria o mesmo significado.<br>Esse trabalho também é dedicado a todos aqueles que, mesmo diante das adversidades, persistem em suas lutas diárias por justiça, igualdade e reconhecimento. São essas batalhas silenciosas, travadas longe dos holofotes, que movem o mundo na direção de um futuro mais inclusivo e equitativo. Que este estudo possa, de alguma forma, ecoar essas vozes e contribuir para a visibilidade das questões enfrentadas pela comunidade negra de Guanambi e além.<br>Agradecemos especialmente à nossa orientadora, professora Rosangela Figueiredo, cuja sabedoria e dedicação foram inestimáveis ao longo deste processo. Sua orientação criteriosa e seu apoio constante não só guiaram nossa pesquisa, mas também nos inspiraram a buscar sempre a excelência acadêmica e a responsabilidade social. Somos imensamente gratos por sua paciência, seus ensinamentos e por nos mostrar o caminho com tanto empenho e sensibilidade.<br>De forma igualmente especial, agradecemos ao nosso coorientador, professor Woquiton Fernandes, que, além de solicitar este projeto, esteve sempre presente para nos oferecer amparo e valiosos ensinamentos. Seu comprometimento com nossa formação foi essencial para o desenvolvimento deste trabalho, e sua presença foi de grande valor ao longo de nossa jornada acadêmica.<br>A todos vocês, nosso muito obrigado!'


const fotos =[

    '../img/anica.png',
    '../img/nat.png',
    '../img/icaro.png',
    '../img/rosa.png',
    '../img/woquin.png'
]
const nome = [
  
    'Anica Gabrielli',
    'Natália Ribeiro',
    'Ícaro Fernandes',
    'Rosangela Figueiredo',
    'Woquiton Fernandes'
]

const papel =[

    'Desenvolvedora<br>Pesquisadora',
    'Desenvolvedora<br>Pesquisadora',
    'Desenvolvedor<br>Pesquisador',
    'Orientadora',
    'Coorientador'
]

const email =[

    'mailto:20211GBI23I0015@alunos.ifbaiano.edu.br',
    'mailto:20211GBI23I0012@alunos.ifbaiano.edu.br',
    'mailto: 20211GBI23I0042@alunos.ifbaiano.edu.br',
    'mailto:rosangela.miranda@ifbaiano.edu.br',
    'mailto:woquiton.fernandes@ifbaiano.edu.br'
]


let cardContato = [];
let cardsContato;
const arrayCards = (elemento,nome,papel,email, chave, cardContato)=>{
   cardsContato = `<div class="card" style="width: 18rem;margin-bottom: 4%;"> <img src=${elemento} class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">${nome[chave]}</h5><p class="card-text">${papel[chave]}</p><a href=${email[chave]} class="btn btn-primary botao" >EMAIL</a></div></div>`;

    cardContato.push(cardsContato);
}



fotos.map((elemento,chave)=>{
    arrayCards(elemento,nome,papel,email, chave, cardContato)

})

equipe.innerHTML = cardContato.join(' ');