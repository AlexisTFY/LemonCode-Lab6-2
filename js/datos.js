// Generador Aleatorio

var randomPick = (n, min, max) => {
  var numbers = [];
  while (numbers.length < n) {
    const range = max - min + 1;
    var randomNumber = Math.floor(Math.random() * range) + min;
    if (numbers.indexOf(randomNumber) === -1) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

//Probando la función
console.log("Generico:", randomPick(10, 1, 100));
console.log("Apuesta automática de la primitiva", randomPick(6, 1, 49)); 
console.log("Escoge combinación de bolas de billar", randomPick(15, 1, 15)); 
console.log("Tirada aleatoria de un dado", randomPick(1, 1, 6));


// ************************************************************************** //

// Enigma v1

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,' ";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm ";

var encryptV1 = text => {
  var result = [];
  for (letter of text) {
    var index = search(plainAlphabet, letter);
    result += encryptedAlphabet[index];
  }
  return result;
}

var decryptV1 = text => {
  var result = [];
  for (letter of text) {
    var index = search(encryptedAlphabet, letter);
    result += plainAlphabet[index];
  }
  return result;
}

var search = (array, target) => {
  for (var i = 0; i < array.length; i++) {
  if (array[i] === target) return i;
  }
  return -1;
  };

var normalText = document.getElementById('normalText');
var encryptedText = document.getElementById('encryptedText');

var encryptButtonAction = () => {
  encryptedText.value = encryptV1(normalText.value.toLowerCase());
}

var decryptButtonAction = () => {
  normalText.value = decryptV1(encryptedText.value.toLowerCase());
}

document.getElementById('btn-encrypt').addEventListener('click', encryptButtonAction);
document.getElementById('btn-decrypt').addEventListener('click', decryptButtonAction);
  
// ************************************************************************** //

// Enigma v2

var encryptV2 = text => {
  var result = [];
  for (letter of text) {
    var index = plainAlphabet.indexOf(letter);
    result += encryptedAlphabet[index];
  }
  return result;
}

var decryptV2 = text => {
  var result = [];
  for (letter of text) {
    var index = encryptedAlphabet.indexOf(letter);
    result += plainAlphabet[index];
  }
  return result;
}
console.log(' - - Enigma v2 - - ');
console.log(decryptV2("b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)"));

