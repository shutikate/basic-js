class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {

    if (!key || !message || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let encryptString = '';
    message = message.toUpperCase();
    let messageWithoutSpaces = message.split(' ').join('');
    key = key.padEnd(messageWithoutSpaces.length, key).toUpperCase();
    let numberOfLettersInAlphabet = 26;

    for(let i = 0; i < messageWithoutSpaces.length; i++) {
      if (messageWithoutSpaces[i].codePointAt() < 65 || messageWithoutSpaces[i].codePointAt() > 90 ) {
        encryptString += messageWithoutSpaces[i];
      }
      else {
        let shift = key.codePointAt(i) - 'A'.codePointAt();
        let indexOfMessageLetter = messageWithoutSpaces.codePointAt(i) - 'A'.codePointAt();
        let encryptLetter = String.fromCodePoint('A'.codePointAt() + (indexOfMessageLetter + shift) % numberOfLettersInAlphabet);
        encryptString += encryptLetter;
      }
    }

    let indexOfSpaces = [];
    let result = encryptString.split('');
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        indexOfSpaces.push(i);
      }
    }

    for (let i = 0; i < indexOfSpaces.length; i++) {
       result.splice(indexOfSpaces[i], 0, ' ');
    }

    return this.type === true ? result.join('') : result.reverse().join('');
  }
  decrypt(encryptedMessage, key) {

    if (!key || !encryptedMessage || encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let decryptString = '';
    encryptedMessage = encryptedMessage.toUpperCase();
    let messageWithoutSpaces = encryptedMessage.split(' ').join('');
    key = key.padEnd(messageWithoutSpaces.length, key).toUpperCase();
    let numberOfLettersInAlphabet = 26;

    for(let i = 0; i < messageWithoutSpaces.length; i++) {
      if (messageWithoutSpaces[i].codePointAt() < 65 || messageWithoutSpaces[i].codePointAt() > 90 ) {
        decryptString += messageWithoutSpaces[i];
      }
      else {
        let shift = key.codePointAt(i) - 'A'.codePointAt();
        let indexOfMessageLetter = messageWithoutSpaces.codePointAt(i) - 'A'.codePointAt();
        let decryptLetter = String.fromCodePoint('A'.codePointAt() + (indexOfMessageLetter - shift + numberOfLettersInAlphabet) % numberOfLettersInAlphabet);
        decryptString += decryptLetter;
      }
    }

    let indexOfSpaces = [];
    let result = decryptString.split('');
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] === ' ') {
        indexOfSpaces.push(i);
      }
    }

    for (let i = 0; i < indexOfSpaces.length; i++) {
       result.splice(indexOfSpaces[i], 0, ' ');
    }

    return this.type === true ? result.join('') : result.reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
