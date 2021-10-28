const inquirer = require('inquirer');
const { writeFile } = require('../utils/files');

const createAccount = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Introduce el nombre del autor: ',
      },
      {
        type: 'input',
        name: 'identifier',
        message: 'Introduce el identificador del autor: ',
      },
    ]);
    await writeFile(answers.username, 'author', JSON.stringify(answers));
    console.log('Autor registrado correctamente');
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};

module.exports = createAccount;
