// funçao responsavel pelo caregamento dos splites
function preloadAssets(scene){
    console.log(scene);

    // cenario
    scene.load.image("fundo", "fundo.png")

    // plataforma
    scene.load.image("plataforma", "plataforma.png")

    // player
    scene.load.spritesheet("player", "player.png", {
        frameWidth: 32,
        frameHeight: 48
    });

    // coletavel
    scene.load.image("star", "star.png");

    // bombas
    scene.load.image("bombs", "bomb.png");

}  