const obras = { //Biblioteca a partir de la constante
    obras: {
        obra1: {
            numero: 1,
            titulo: "Museo de Asesinos Seriales de Mexico",
            imagen: "nombre de la imagen .png",
            descripcion: "Diseño museográfico enfocado en los casos más reconocidos de asesinos seriales mexicanos, con enfoque espacial y visual."
        },
        obra2: {
            numero: 2,
            titulo: "Placas de identificación de espacios",
            imagen: "nombre de la imagen .png",
            descripcion: "Las placas identificatorias proporcionan certeza absoluta al usuario del destino específico"
        },
        obra3: {
            numero: 3,
            titulo: "Sistema de Experiencia en Comedor y Cafetería UAMCua",
            imagen: "nombre de la imagen .png",
            descripcion: "Un sistema digital y visual para mejorar la experiencia del usuario en el área de barra fría del comedor universitario."
        }
    },
    statement: "quien soy, de donde vengo?", 
}

let statement = obras.statement // Se crea una variable que contiene el elemento dentro de la libreria
let about = document.createElement("h1") // Es para indicar que tipo de elemento se va a crear dentro del html
about.innerHTML = statement //
document.getElementsByClassName("ABOUT")[0].appendChild(about) // Este llama a la clase dentro del HTML para jalarlo desde el js

//Tarea: Hacer dinamica la pagina


let contenedorObras = document.getElementsByClassName("obras")[0]; // Selecciona el contenedor class="obras" del HTML

let o1 = obras.obras.obra1; // Esta es solo la partr de la obra 1

let divObra1 = document.createElement("div"); // Indica el titulo que se va a crear dentro del html
divObra1.className = "obra";
divObra1.id = "obra" + o1.numero;

let divImagen1 = document.createElement("div"); // Indica la imagen que se va a crear dentro del html
divImagen1.className = "image obra" + o1.numero;

let divDesc1 = document.createElement("div"); // Indica la descripcion que se va a crear dentro del html
divDesc1.className = "descripcion obra";
divDesc1.innerHTML = `
    <p class="numero.obra">0${o1.numero}</p>
    <p>${o1.descripcion}</p>
    <h2>
        <a href="https://arrieta-garcia.netlify.app/proyecto3" target="_blank">${o1.titulo}</a>
    </h2>
`;

divObra1.appendChild(divImagen1); // Estos llaman a las clases desde el HTML para jalarlos desde el JS
divObra1.appendChild(divDesc1);
contenedorObras.appendChild(divObra1);


let o2 = obras.obras.obra2; // Esta es la 2da Obra

let divObra2 = document.createElement("div");
divObra2.className = "obra";
divObra2.id = "obra" + o2.numero;

let divImagen2 = document.createElement("div");
divImagen2.className = "image obra" + o2.numero;

let divDesc2 = document.createElement("div");
divDesc2.className = "descripcion obra";
divDesc2.innerHTML = `
    <p class="numero.obra">0${o2.numero}</p>
    <p>${o2.descripcion}</p>
    <h2>
        <a href="https://arrieta-garcia.netlify.app/proyecto5" target="_blank">${o2.titulo}</a>
    </h2>
`;

divObra2.appendChild(divImagen2);
divObra2.appendChild(divDesc2);
contenedorObras.appendChild(divObra2);


let o3 = obras.obras.obra3; // Esta es la 3ra Obra

let divObra3 = document.createElement("div");
divObra3.className = "obra";
divObra3.id = "obra" + o3.numero;

let divImagen3 = document.createElement("div");
divImagen3.className = "image obra" + o3.numero;

let divDesc3 = document.createElement("div");
divDesc3.className = "descripcion obra";
divDesc3.innerHTML = `
    <p class="numero.obra">0${o3.numero}</p>
    <p>${o3.descripcion}</p>
    <h2>
        <a href="https://arrieta-garcia.netlify.app/proyecto2" target="_blank">${o3.titulo}</a>
    </h2>
`;

divObra3.appendChild(divImagen3);
divObra3.appendChild(divDesc3);
contenedorObras.appendChild(divObra3);