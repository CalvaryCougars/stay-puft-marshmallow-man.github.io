// Game State
  game.currentState = INITIAL;
}
 // Game State
  switch (game.currentState) {
    case INITIAL:
      // DRAW INITIAL SCREEN
          break;

    // Game State
  switch (game.currentState) {
    case INITIAL:
      // DRAW INITIAL SCREEN
      game.drawInitialScreen();
      break;

    case GAME_PLAYING:
      // DRAW GAME PLAYING SCREEN
            break;
    case GAME_OVER:
      // DRAW GAME OVER SCREEN
          break;
  }

  FlappyMonster.prototype.drawInitialScreen = function() {
  // Base
  var game = this;
}

// Start Game
  window.requestAnimationFrame(function() {
    game.runGameLoop();
  });

// Draw

  // Background
  game.context.fillStyle = 'black';
  game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

  // Text
  game.context.fillStyle = 'white';
  game.context.font = '36px Arial';
  game.context.fillText('GAME PLAYING', game.canvas.width / 2 - 100, game.canvas.height / 2);
};
