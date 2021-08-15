const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const words = expr.split('**********').map(
      word => splitWord(word).map(
        char => decodeChar(char)
      )
    );
  
    function splitWord(word) {
      const result = [];
      for (let i = 0; i < word.length; i += 10) {
          result.push(word.slice(i, i + 10))
      }
  
      return result;
    }
  
    function decodeChar(char) {
      char = char
        .replace(/11/g, '-')
        .replace(/10/g, '.')
        .replace(/0/g, '');
  
      return MORSE_TABLE[char];
    }
  
    return words.map(word => word.join('')).join(' ');
  }

module.exports = {
    decode
}