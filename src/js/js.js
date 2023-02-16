const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-fixed");
});

/**Galeria */

const botaoAlbuns = document.querySelectorAll('#albuns button');
const galerias = document.querySelectorAll('#galeria .galeria');

for (let i = 0; i < botaoAlbuns.length; i++) {
    botaoAlbuns[i].addEventListener('click', function () {
        const album = this.dataset.album;
        for (let j = 0; j < galerias.length; j++) {
            if (galerias[j].classList.contains(album)) {
                galerias[j].style.display = 'block';
            } else {
                galerias[j].style.display = 'none';
            }
        }
        document.body.classList.add('no-scroll');
        document.querySelector('#galeria').style.display = 'block';
    });
}

const botaoFechar = document.querySelectorAll('#galeria .fechar');

for (let i = 0; i < botaoFechar.length; i++) {
    botaoFechar[i].addEventListener('click', function () {
        document.body.classList.remove('no-scroll');
        document.querySelector('#galeria').style.display = 'none';
    });
}






$(document).ready(function () {
    // Quando uma imagem da galeria for clicada
    $(".galeria-imagem").click(function () {
        // Cria uma cópia da imagem clicada
        var img = $(this).clone();
        // Define a classe "ampliada" para a cópia da imagem
        img.addClass("ampliada");
        // Cria um fundo escuro com a classe "overlay"
        var overlay = $("<div class='overlay'></div>");
        // Adiciona a cópia da imagem e o fundo escuro ao corpo do documento
        $("body").append(img).append(overlay);
        // Quando o fundo escuro for clicado, remove a imagem e o fundo escuro
        overlay.click(function () {
            img.remove();
            overlay.remove();
        });
    });
});
