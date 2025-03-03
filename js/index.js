// criando os elementos da main

const main = document.querySelector('main');
const introducao = document.createElement('p');
const iframe = document.createElement('iframe');


// inserindo conteúdo em p e adcionando
introducao.id = 'introducao';

introducao.innerHTML = "Toda mulher negra não vivencia suas experiências sozinha. Toda mulher negra brasileira sabe o peso que a sua cor e o seu gênero trazem, sabe as barreiras que, mesmo sem escolher, vai ter que lidar durante a vida, sabe a dureza que é ter que se provar boa o tempo todo e, mesmo assim, não ser o suficiente. Nós, mulheres negras, também sabemos que a mudança não se faz em uma única ação. Sabemos o poder da união e da persistência para transformar a nossa realidade e permitir que possamos ir e vir sem violência e discriminação, sem risco a nossa sobrevivência.  A partir dessa perspectiva, idealizamos esse projeto que buscou essas mulheres na cidade de Guanambi com o intuito de ouví-las e dar maior visibilidade às vivências delas, para que assim mais mulheres possam se reconhecer e fortalecerem a luta feminista e antirracista.";

main.appendChild(introducao);

// inserindo iframe e atributos

iframe.id = 'iframe';
iframe.setAttribute("height", "300px");
iframe.setAttribute("src", "https://www.youtube.com/embed/BwCGXExjFyI?si=8aPAVrDOhnJumx9o");
iframe.setAttribute("title", "YouTube video player");
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
iframe.setAttribute("allowfullscreen", "");

main.appendChild(iframe);