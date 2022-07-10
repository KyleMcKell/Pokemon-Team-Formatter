import readline from 'readline';
import clipboardy from 'clipboardy';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function loop() {
  let pokemon = [];
  function inquire() {
    rl.question('Pokemon to format ', function (answer) {
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
      const text = formatShowdownImport(answer);
      pokemon.push(text);
      inquire();
    });
  }
  inquire();
}

function formatShowdownImport(answer) {
  const name = formatName(answer);
  const level = formatLevel(answer);
  const { nature, ability } = formatNatureAndAbility(answer);
  const item = formatItem(answer);
  const moves = formatMoves(answer);
  const evs = formatEVs(answer);
  const ivs = formatIVs(answer);

  // console.log('name', name);
  // console.log('level', level);
  // console.log('nature', nature);
  // console.log('ability', ability);
  // console.log('item', item);
  // console.log('moves', moves);

  if (nature === '' && ability === '') {
    const formattedText = `${name} ${item}\n${level}\n${moves}\n\n`;
    return formattedText;
  }

  if (nature === '') {
    const formattedText = `${name} ${item}\n${ability}\n${level}\n${moves}\n\n`;
    return formattedText;
  }

  if (ability === '') {
    const formattedText = `${name} ${item}\n${level}\n${nature}\n${moves}\n\n`;
    return formattedText;
  }

  if (ivs !== '') {
    const formattedText = `${name} ${item}\n${level}\n${ivs}\n${nature}\n${ability}\n${moves}\n\n`;
    return formattedText;
  }

  if (evs !== '') {
    const formattedText = `${name} ${item}\n${level}\n${evs}\n${nature}\n${ability}\n${moves}\n\n`;
    return formattedText;
  }

  const formattedText = `${name} ${item}\n${ability}\n${level}\n${nature}\n${moves}\n\n`;

  return formattedText;
}

function formatName(answer) {
  const splitAnswer = answer.split('Lv.');
  const name = splitAnswer[0];
  if (name.includes('Mr.')) {
    const nameSplit = name.split('.');
    const nameCombinedBack = nameSplit.join('. ');
    const nameTrim = nameCombinedBack.trim();
    return nameTrim;
  }
  if (name.includes('Tapu')) {
    const nameSplit = name.split('Tapu');
    const tapuName = nameSplit[1];
    const tapuNameTrim = tapuName.trim();
    const fullTapuName = `Tapu ${tapuNameTrim}`;
    const nameCombinedBack = nameSplit[0] + fullTapuName;
    const nameTrim = nameCombinedBack.trim();
    return nameTrim;
  }
  return name.trim();
}

function formatLevel(answer) {
  const splitAnswerFromFront = answer.split('Lv.');
  const splitAll = splitAnswerFromFront[1].split('');
  if (splitAll[0] === '0') {
    const level = `Level: 5`;
    return level;
  }
  const levelNumber = splitAll[0] + splitAll[1];
  const level = `Level: ${levelNumber}`;
  return level;
}

function formatNatureAndAbility(answer) {
  const onlyNatureAndAbility = answer.split('{');

  if (onlyNatureAndAbility.length === 1) {
    return { nature: '', ability: '' };
  }

  const natureAndAbility = onlyNatureAndAbility[1];

  const onlyNature = natureAndAbility.split('|')[0];
  const natureTrim = onlyNature.trim();

  const onlyAbility = natureAndAbility.split('|')[1];

  const abilitySplit = onlyAbility.split('}')[0];
  const abilityTrim = abilitySplit.trim();

  const ability = `Ability: ${abilityTrim}`;
  if (natureTrim === '?' || natureTrim === '') {
    return { nature: '', ability };
  }
  const nature = natureTrim + ' Nature';
  return { nature, ability };
}

function formatItem(answer) {
  const item = answer.split('@');
  if (item.length === 2) {
    const fullItem = item[1];
    const itemSplit = fullItem.split(':')[0];
    const itemTrim = itemSplit.trim();
    const itemText = `@ ${itemTrim}`;
    return itemText;
  }
  return '';
}

function formatMoves(answer) {
  const moves = answer.split(':')[1];
  const movesTrim = moves.split('{')[0];
  const movesArray = movesTrim.split(',');
  const movesArrayFormatted = movesArray.map((move, i) => {
    const trimmedMove = move.trim();
    return `- ${trimmedMove}${i === movesArray.length - 1 ? '' : '\n'}`;
  });
  const movesFormatted = movesArrayFormatted.join('');
  return movesFormatted;
}

function formatEVs(answer) {
  if (answer.includes('<')) {
    const splitAnswer = answer.split('<');
    const trimBack = splitAnswer[1].split('>')[0];
    const trimBackTrim = trimBack.trim();
    const evArray = trimBackTrim.split(',');
    const joinedEvArray = evArray.join(' / ');
    const evs = `EVs: ${joinedEvArray}`;
    return evs;
  }
  return '';
}

function formatIVs(answer) {
  if (answer.includes('/')) {
    const splitAnswer = answer.split('/');
    const trimBack = splitAnswer[1].split('/')[0];
    const trimBackTrim = trimBack.trim();
    const ivArray = trimBackTrim.split(',');
    const joinedIvArray = ivArray.join(' / ');
    const ivs = `IVs: ${joinedIvArray}`;
    return ivs;
  }
  return '';
}

loop();
