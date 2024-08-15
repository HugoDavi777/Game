// funçao responsavel pelo caregamento dos splites
function preloadAssets(scene){
    console.log(scene);

    // cenario
    scene.load.image("fundo", "./assets/fundo.png")

    // plataforma
    scene.load.image("plataforma", "./assets/plataforma.png")

    // player
    scene.load.spritesheet("player", "./assets/player.png", {
        frameWidth: 32,
        frameHeight: 48
    });

    // coletavel
    scene.load.image("star", "./assets/star.png");

    // bombas
    scene.load.image("bombs", "./assets/bomb.png");

}  