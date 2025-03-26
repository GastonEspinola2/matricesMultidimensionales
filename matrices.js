const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// aca se guardan los
let personas = [];

function cargarPersona() {
    rl.question('Ingrese el nombre: ', (nombre) => {
        rl.question('Ingrese el apellido: ', (apellido) => {
            rl.question('Ingrese el DNI: ', (dni) => {

                let telefonos = [];

                // aca se cargan multiples
                function cargarTelefonos() {
                    rl.question('Ingrese un número de teléfono (o escriba "fin" para terminar): ', (telefono) => {
                        if (telefono.toLowerCase() === 'fin') {
                            // se guardan todos los datos 
                            personas.push([nombre, apellido, dni, telefonos]);
                            console.log('Datos cargados con éxito.');
                            mostrarDatos();
                            rl.question('¿Desea cargar otra persona? (s/n): ', (respuesta) => {
                                if (respuesta.toLowerCase() === 's') {
                                    cargarPersona();
                                } else {
                                    rl.close();
                                }
                            });
                        } else {
                            telefonos.push(telefono);
                            cargarTelefonos();
                        }
                    });
                }

                // se cargan los telefonos
                cargarTelefonos();
            });
        });
    });
}

// muestra los datos
function mostrarDatos() {
    console.log('\nDatos cargados:');
    personas.forEach((persona) => {
        console.log(`[${persona[0]}, ${persona[1]}, ${persona[2]}, [${persona[3].join(', ')}]]`);
    });
}

// carga los datos
cargarPersona();
