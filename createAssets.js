// cria e mostra os elementos do jogo na tela
function createAssets(scene) {
    // cenario
    scene.add.image(500, 210,"fundo");
    // scene.add.image(500, 479,"plataforma")
    plataforma = scene.physics.add.staticGroup();
    plataforma.create(500, 479,"plataforma")

    // player
    // scene.add.image(500, 434,"player")
    player = scene.physics.add.sprite(500, 250,"player")
    player.setCollideWorldBounds(true);
    player.setBounce(0.2);
    criarAnimations(scene);

    // coletavel star
    let pos = Phaser.Math.FloatBetween(100, 900)
    star = scene.physics.add.sprite(pos, 0,"star")
    star.setCollideWorldBounds(true);
    star.setBounce(0.5);

    // bombas
    bombs = scene.physics.add.group()
    

    // colliders
    scene.physics.add.collider(player, plataforma);

    scene.physics.add.collider(star, plataforma);
    scene.physics.add.collider(player, star, coletarStar);

    scene.physics.add.collider(bombs, plataforma);
    scene.physics.add.collider(bombs, player, gameOver);

    // entradas do teclado
    teclado = scene.input.keyboard.createCursorKeys();

    // Dados do personagem
    let confTexte={
        fontSize:"30px",
        fontFamily:"arial black"
    }
    pontosTXT = scene.add.text( 20, 20,"PONTOS: 0", confTexte)
}
    // coletador
function coletarStar(player, star){
    let pos = Phaser.Math.FloatBetween(100, 900);
    star.setX(pos);
    star.setY(0);
    star.setVelocity(0);

    pontos++
    pontosTXT.setText("PONTOS: "+pontos);

    // geraçao de bombas
    let bos = Phaser.Math.FloatBetween(100, 900)
    let bomba = bombs.create(bos, 0, "bombs");
    bomba.setBounce(1);
    bomba.setCollideWorldBounds(true)
    bomba.setVelocity(50);
}

    function gameOver(player, bombs){
        player.setVisible(false)
        isGameOver = true
        let confTexte={
            fontSize:"30px",
            fontFamily:"arial black"
        }
        player.scene.add.text( 350, 250,"GAMER OVER", confTexte)
        
    }

function criarAnimations(scene){
    let parado = {
        key: "parado",
        frames: [{key: "player", frame: 4}]
    }
    scene.anims.create(parado);

    let left = {
        key: "left",
        frames: scene.anims.generateFrameNumbers("player",{start:0, end:3}),
        frameRate: 10,
        repeat:-1,
    }
    scene.anims.create(left);

    let right = {
        key: "right",
        frames: scene.anims.generateFrameNumbers("player",{start:5, end:8}),
        frameRate: 10,
        repeat:-1,
    }
    scene.anims.create(right);
}