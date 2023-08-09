const fotos = [
    "fotos/foto1.jpg",
    "fotos/foto2.png",
];

let fotoAtual = 0;

function trocar() {
    const foto = document.querySelector('body');
    fotoAtual = (fotoAtual + 1) % fotos.length;
    foto.style.backgroundImage = `url('${fotos[fotoAtual]}')`;
}