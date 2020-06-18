# Constructor-Word-Guess

Test your knowledge of the 50 States of USA!

* **Game Information**: This is an Advanced Javascript Assignment. Create a command line word guess game using node.js.

1. The game requires `inquirer or prompt` npm packages.


* **Letter.js**: Contains a constructor, Letter. This constructor displays an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. The construcor is define by String, Boolean and fuctions.

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. The construcor is define by Array, for loop and fuctions.


* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

3. `Letter.js` *should not* `require` any other files.

4. `Word.js` *should only* require `Letter.js`

* **Screenshot Images**

![Word_Guess1](https://raw.githubusercontent.com/Jrubi89/Constructor-Word-Guess/master/images/Word_Guess1.PNG)

![Word_Guess2](https://github.com/Jrubi89/Constructor-Word-Guess/blob/master/images/Word_Guess2.PNG?raw=true)