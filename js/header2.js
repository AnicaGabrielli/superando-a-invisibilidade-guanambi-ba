// coletando elementos
const topo = document.querySelector('header');

// titulo e atributos

const tituloLogo = document.createElement('div');

tituloLogo.setAttribute('id', 'tituloLogo');

topo.appendChild(tituloLogo);

// logo do titulo e atributos

const logoTitulo = document.createElement('img');

logoTitulo.setAttribute('src', '../img/logoTitulo.png')

logoTitulo.setAttribute('alt', 'logo com três mulheres negras')

logoTitulo.setAttribute('id', 'logoTitulo');

tituloLogo.appendChild(logoTitulo);

//titulo
const titulo = document.createElement('p');

titulo.setAttribute('id','titulo');

titulo.innerHTML = 'MULHERES NEGRAS: <br> superando a invisibilidade';

tituloLogo.appendChild(titulo);

//  acessos 

const acessos = document.createElement('div')

acessos.setAttribute('id', 'acessos')

tituloLogo.appendChild(acessos);

// links de acesso e atributos

const nomesDosAcessos = ['INÍCIO', 'ENTREVISTAS', 'DADOS', 'CONTATO']

// ids dos inks

const idLink = ['inicio', 'entrevistas', 'dados', 'contato']

/*IMPORTANTE: aqui vai dar um probleminha de acesso porque o index não precisa voltar um página para visitá-lo*/

const urlsAcesso = ['../index.html','../pages/entrevistas.html','../pages/dados.html','../pages/contato.html'];

nomesDosAcessos.map((el, index)=>{
   const linksTopo = document.createElement('a');
   linksTopo.classList.add('linkTopo');
   linksTopo.id = idLink[index];
   linksTopo.innerHTML = el;
   linksTopo.setAttribute('href', urlsAcesso[index])
   acessos.appendChild(linksTopo)
})

// criando menu oculto para responsividade

const menuOculto = document.getElementById('menuOculto');

nomesDosAcessos.map((el, index)=>{
   const linksTopo = document.createElement('a');
   linksTopo.classList.add('linkTopo');
   linksTopo.id = idLink[index];
   linksTopo.innerHTML = el;
   linksTopo.setAttribute('href', urlsAcesso[index]);
   menuOculto.appendChild(linksTopo);   
})

// adcionando menú hamburger

const hamburger = document.createElement('img');

hamburger.setAttribute("src","../img/hamburger.png");

hamburger.id = 'hamburger';

hamburger.setAttribute('alt','menúhaburger');

tituloLogo.appendChild(hamburger);

// adcionando escutador de evento para aparecer menu oculto

let hamburgerAtivo = false;

hamburger.addEventListener('click',()=>{

   if(hamburgerAtivo == false){
      hamburger.style.backgroundColor = 'rgb(196, 134, 83)';
      menuOculto.style.display = 'flex';
      hamburgerAtivo = true;
   }else{
      hamburger.style.backgroundColor = '';
      menuOculto.style.display = 'none';
      hamburgerAtivo = false;
   }
})


