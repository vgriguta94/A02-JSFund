var game = {
    title: "Green Game",
    isRunning: false,

    switchScreen: function(currentScreen) {
        var screens = document.getElementsByClassName('screen');
        for (var i = 0; i < screens.length; i++) {
            screens[i].style.display = 'none';
        }

        var screenToShow = document.getElementById(currentScreen);
        screenToShow.style.display = 'block';
    },

    toggleRunning: function() {
        this.isRunning = !this.isRunning;
        var playPauseButton = document.getElementById("play-pause");

        if (this.isRunning) {
            playPauseButton.textContent = "Pause";
        } else {
            playPauseButton.textContent = "Play";
        }
    },

    init: function() {
        var titleElement = document.getElementById("game-title");
        titleElement.textContent = this.title;
        var playGameButton = document.getElementById("play-game");
        playGameButton.addEventListener("click", function() {
            game.switchScreen("game-screen");
        });
        var endGameButton = document.getElementById("end-game");
        endGameButton.addEventListener("click", function() {
            game.switchScreen("game-over-screen");
        });
        var playAgainButton = document.getElementById("play-again");
        playAgainButton.addEventListener("click", function() {
            game.switchScreen("game-screen");
        });

        var quitButton = document.getElementById("quit-game");
        quitButton.addEventListener("click", function() {
            game.switchScreen("splash-screen");
        });

        var playPauseButton = document.getElementById("play-pause");
        playPauseButton.addEventListener("click", function() {
            game.toggleRunning();
        });

        
    }
};
document.addEventListener("DOMContentLoaded", function() {
    game.init();
});
