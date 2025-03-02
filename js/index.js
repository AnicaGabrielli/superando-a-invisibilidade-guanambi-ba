// criando os elementos da main

const main = document.querySelector('main');
const introducao = document.createElement('p');
const iframe = document.createElement('iframe');


// inserindo conteúdo em p e adcionando
introducao.id = 'introducao';

introducao.innerHTML = "Descubra a força da representatividade feminina! Nosso Projeto Integrador visa destacar e celebrar as mulheres negras líderes em Guanambi. Explore conosco como suas trajetórias e realizações inspiram mudanças e promovem a igualdade de gênero e raça. Junte-se a nós nessa jornada de reconhecimento e visibilidade. Juntas, podemos construir um futuro mais inclusivo e diversificado!";

main.appendChild(introducao);

// inserindo iframe e atributos

iframe.id = 'iframe';
iframe.setAttribute("height", "260px");
iframe.setAttribute("src", "https://www.youtube.com/embed/BwCGXExjFyI?si=8aPAVrDOhnJumx9o");
iframe.setAttribute("title", "YouTube video player");
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
iframe.setAttribute("allowfullscreen", "");

main.appendChild(iframe);