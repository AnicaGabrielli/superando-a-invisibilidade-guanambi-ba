// pegar o fotter, criar elementos e adcionar exto
const footer = document.querySelector('footer');

const paragrafo = document.createElement('p');

paragrafo.innerHTML = 'Projeto Integrador &copy;2024 <br> Mulheres Negras em Guanambi: Da Invisibilidade ao Espaço de Poder | Criado por: Ânica Gabrielli, Ícaro Fernandes e Natália Ribeiro';

footer.appendChild(paragrafo);

