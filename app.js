const propmt = require('prompt-sync')({sigint:true});

const nombre = propmt('como te llamas? ');

let keepRunning = true;

while(keepRunning) {
    const res = propmt(`Cuál es tu respuesta ${nombre}? `)

    if(res === 'exit'){
        console.log('Adios')
        keepRunning = false;
    }
}