const inquirer = require('inquirer');
const { writeFile } = require('../utils/files');

const createAccount = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Introduce el nombre: ',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Introduce nombre del usuario: ',
      },
      {
        type: 'input',
        name: 'password',
        message: 'Introduce tu contraseña: ',
      },
    ]);
    await writeFile(answers.username, 'user', JSON.stringify(answers));
    console.log('Usuario registrado correctamente');
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};

module.exports = createAccount;
