const cssProperties = [];

const sortCssProperties = (properties) => {
  return properties.sort();
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = () => {
  readline.question('Digite uma propriedade CSS ou SAIR para sair: ', (property) => {
    if (property === 'SAIR') {
      console.log('Propriedades CSS ordenadas de A-Z:');
      console.log(sortCssProperties(cssProperties));
      readline.close();
    } else {
      cssProperties.push(property);
      input();
    }
  });
};

input();
