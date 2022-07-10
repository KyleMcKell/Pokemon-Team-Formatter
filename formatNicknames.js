import readline from 'readline';
import clipboardy from 'clipboardy';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function loop() {
  let pokemon = [];
  let currentNickname = '';
  let currentLocation = '';
  function questionIt() {
    rl.question('Pokemon to ready for nickname ', function (answer) {
      if (answer === '') {
        if (pokemon[pokemon.length - 1] === '') {
          pokemon.pop();
        }
        console.log(pokemon.length);
        const joinedPokemon = pokemon.join('');

        clipboardy.writeSync(joinedPokemon);

        console.log('written to clipboard');
        loop();
        return;
      }
      if (answer[0] === '*') {
        currentNickname = answer.slice(1);
        // currentNickname.trim();
        questionIt();
        return;
      }
      if (answer[0] === '~') {
        currentLocation = answer.slice(1);
        // currentLocation.trim();
        if (currentLocation === 'S. S.  Anne') {
          currentLocation = 'S.S. Anne';
        }
        questionIt();
        return;
      }
      const text = formatForNickname(answer, currentNickname, currentLocation);
      pokemon.push(text);
      questionIt();
    });
  }
  questionIt();
}

function formatForNickname(answer, nickname, location) {
  const splitAnswer = answer.split(' ');

  const name = splitAnswer[0];
  const newName = '(' + name + ')';

  splitAnswer[0] = newName.trim();

  const formattedText = splitAnswer.join(' ');

  const formattedTextWithNickname = `${nickname} - ${location} ${formattedText}\n`;

  return formattedTextWithNickname;
}

loop();
