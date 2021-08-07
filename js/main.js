'use strict';

const courses = [
    {
        "name": "Estrellitas de mar",
        "class": "stars",
        "img": "./images/Logos/estrellita.png",
        "content": "Clases de bebes con papas. <br> En esta clase se da en edad temprana el primer contacto con el agua para bebés y niños pequeños, reduciendo su miedo. Bridándole estimulación temprana, flotación, ambientación, adaptación al medio, desplazamiento, todo atreves del juego y la recreación. Puedes esperar muchas canciones y chapoteos mientras tu hijo explora el entorno acuático en nuestras clases de natación para bebés acompañados de su ser querido.",
        "groups": "Grupo 1 Edades: 4 a 8 meses <br>Grupo 2 Edades: 9 meses a 2 años",
    },
    {
        "name": "Tortuguitas",
        "class": "turtles",
        "img": "./images/Logos/tortuguita.png",
        "content": "Una clase de natación para niños que está orientada a la exploración del agua y al desarrollo de la conciencia del niño sobre el entorno acuático mientras aprende los ejercicios de supervivencia en el agua que se utilizan en las lecciones de natación posteriores. El objetivo de las lecciones de natación de estos niños es fomentar la confianza y la autoestima. También nos enfocamos en desarrollar la flotación, inmersión, desplazamiento y la capacidad de responder a nuevos desafíos mientras le damos a tu hijo independencia para explorar el entorno acuático.",
        "groups": "Edades: 2 a 4 años",
    },
    {
        "name": "Pececitos",
        "class": "fishes",
        "img": "./images/Logos/pecesito.png",
        "content": "En esta clase de natación para niños en grupos pequeños, se les presenta a los niños las habilidades de inmersión, propulsión, flotación y desplazamiento para sobrevivir en el agua. Aprendiendo técnicas y habilidades propias de la natación pasando por nuestros diferentes niveles principiante e intermedios ubicando a los alumnos por medio de una evaluación inicial.",
        "groups": "Edades: 5 a 6 años",
    },
    {
        "name": "Pulpitos",
        "class": "octopus",
        "img": "./images/Logos/pulpito.png",
        "content": "Los nadadores se centran en la coordinación correcta de brazos, piernas y respiración en tres estilos: crol, dorso y pecho. Los estudiantes se mueven constantemente en esta clase de natación para niños, impulsando al máximo su aprendizaje en el agua. Contando con 3 niveles Principiantes, Intermedios y Avanzados por medio de una evaluación inicial, los alumnos son ubicados.",
        "groups": "Edades: 7 a 8 años",
    },
    {
        "name": "Orcas",
        "class": "whales",
        "img": "./images/Logos/ballena.png",
        "content": "Dentro de este grupo, contamos con 3 niveles en los cuales, por medio de una evaluación inicial, los alumnos son ubicados. <strong> Principiantes: </strong>donde iniciamos el aprendizaje en el medio acuático. <strong>Intermedios: </strong>donde los nadadores mejorarán la técnica de los estilos crol y dorso e inician estilo pecho. <strong>Avanzados: </strong>donde aparte de los 3 estilos anteriormente mencionados aprenderán el estilo mariposa. Este curso ayudará a tu hijo a desarrollar una buena condición física.",
        "groups": "Edades: 9 a 10 años",
    },
    {
        "name": "Tiburones",
        "class": "sharks",
        "img": "./images/Logos/tiburon.png",
        "content": "Este grupo cuenta con 3 niveles en los cuales, por medio de una evaluación inicial, los alumnos son ubicados. <strong> Principiantes: </strong>Iniciación al medio acuático, aprendiendo los estilos de crol y dorso con técnica gruesa. <strong> Intermedios: </strong>Donde se perfecciona los estilos antes mencionados y se inicia el aprendizaje del estilo pecho y mariposa mejorando su técnica de natación individual. <strong>Avanzados: </strong>con técnicas finas en los 4 estilos se aumenta aún más la distancia recorrida, la resistencia y la velocidad, esta divertida liga desarrolla una competencia saludable y la formación de equipos.",
        "groups": "Edades: 11 a 12 años",
    },
]

const aquaerobics = {
    "name": "Aquaeróbics",
    "class": "aquaerobics",
    "content": "La combinación perfecta música, agua y movimiento con bajo impacto, en esta actividad encontraremos diversión, movimientos, desarrollo de cualidades físicas, las cuales ayudan a tonificar los músculos, la rehabilitación, el mejoramiento sobre la estructura ósea y/o de articulaciones, llevando la actividad al ritmo de la música.",
    "groups": "Actividad exclusiva para mujeres a partir de los 16 años",
}

function paintCourses() {
    let html = "";
    html += "<ul>";
    for (const course of courses) {
        html += "<li>";
        html += `<div class="${course.class + " box"}">`;
        html += `<h3>${course.name}</h3>`;
        html += `<img src="${course.img}" alt="${course.name}">`
        html += `<p>${course.content}</p>`;
        html += `<p>${course.groups}</p>`;
        html += '<a href="#contact"><button>Contáctanos</button></a>'
        html += "</div>"
        html += "</li>";
    };
    html += "<li>";
    html += `<div class="${aquaerobics.class + " box"}">`;
    html += `<h3>${aquaerobics.name}</h3>`;
    html += `<p>${aquaerobics.content}</p>`;
    html += `<p>${aquaerobics.groups}</p>`;
    html += '<a href="#contact"><button>Contáctanos</button></a>'
    html += "</div>"
    html += "</li>";
    html += "</ul>"

    const coursesContainer = document.querySelector(".js-courses-boxes");
    coursesContainer.innerHTML = html;
}

paintCourses();
