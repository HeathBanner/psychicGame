# Psychic Game

[Click to play!](https://heathbanner.github.io/psychicGame/)

The Psychic Game was homework assignment #3 within my Boot Camp at UNCC. 

The user, on load, is to guess a letter (a or b) by pressing a key on their keyboard. The letter to guess is randomized.

> var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

 letters in the english alphabet. Once a letter is pressed, it is then logged with the "Guesses" box and a point is lost within the "Guess Left" box. You will start out with 10 total guesses. This will refresh if you either run out of guesses or correctly guess the letter.

If the user guesses correctly, they will be awarded a "Win" and will be reflected within the "Wins" box. If they are to guess incorrectly, the letter will be logged and the "Guesses Left" box will lose a point. The game will continue so long as you're will to continously press a or b.