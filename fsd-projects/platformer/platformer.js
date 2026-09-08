$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms
    createPlatform(50, 650, 200, 20);
    createBadPlatform(0, 730, 1400, 20,);
    createPlatform(500, 600, 100, 20);
    createPlatform(580, 500, 20, 100);
    createPlatform(600, 500, 300, 20);
    createPlatform(900, 500, 20, 100);
    createPlatform(900, 600, 100, 20);
    createPlatform(980, 500, 20, 100);
    createPlatform(1000, 500, 400, 20);
    createPlatform(500, 380, 300, 20);
    createPlatform(900, 380, 200, 20);
    createPlatform(800 ,390, 100, 10);
    createPlatform(200, 350, 100, 20);
    createPlatform(200, 220, 100, 20);
    createBadPlatform(800, 380, 100, 10);
    createPlatform(500, 200, 200, 20);
    createPlatform(800, 200, 300, 20);
    createFakePlatform(700, 200, 100, 20);
    createPlatform(1200, 150, 100, 20);


    
    // TODO 3 - Create Collectables
    createCollectable("diamond", 1230, 100, 0.5, 0.7);
    createCollectable("diamond", 930, 500, 0.5, 0.7);
    createCollectable("diamond", 230, 300, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("right", 510, 3000);
    createCannon("bottom", 350, 1500)
    createCannon("top", 600, 2600)
    createCannon("top", 800, 2900)
    createCannon("top", 960, 3200)
    
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
