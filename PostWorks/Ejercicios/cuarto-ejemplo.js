const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = async () => {
  console.log('foo');
  //bar();
  setTimeout(bar, 0);
  // baz();
  const data = await new Promise((resolve, reject) => {
    resolve('should be right after baz, before bar');
  });
  console.log(data);
  baz();
};

foo();

//async await - primera vez en C sharp de windows para hacerlo bloquenate o no bloqueante y fue adoptado por javascript
//para utilizar await debo seleccionar el scope al que aplicará el async
