const inquirer = require('inquirer');
const { writeFile } = require('../utils/files');
const kebabcase = require('kebabcase');

const createBook = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Introduce el nombre del libro: ',
      },
      {
        type: 'input',
        name: 'isbn',
        message: 'Introduce el identificador del libro (ISBN): ',
      },
      //TODO: Como puedo mostrar los autores que tengo registrados.
      {
        type: 'input',
        name: 'author',
        message: '¿Quién es el autor?: ',
      },
      {
        type: 'input',
        name: 'edicion',
        message: 'Año de edición: ',
      },
    ]);
    const slug = kebabcase(answers.name);
    answers.slug = slug;

    await writeFile(slug, 'book', JSON.stringify(answers));
    console.log('libro registrado correctamente');
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};

module.exports = createBook;
