import Handlebars from 'handlebars';
import testimonialTemplate from './templates/testimonial.hbs?raw';

const testimonials = [
  {
    title: "El mejor servicio que he recibido!",
    message: "Gracias a todo el equipo por hacer esta experiencia inolvidable. 10/10!",
    name: "Luis Martinez",
    role: "Ingeniero en Sistemas",
    image: "https://picsum.photos/200"
  },
  {
    title: "Super recomendado!",
    message: "El mejor servicio que he recibido. Muchas gracias a todos.",
    name: "Laura Black",
    role: "Product Manager",
    image: "https://picsum.photos/300"
  }
];

const template = Handlebars.compile(testimonialTemplate);

document.getElementById('app').innerHTML = testimonials.map(t => template(t)).join('');
