import CatHappy from '../assets/cat-happy.gif';
import CatWalking from '../assets/cat-walking.gif';

const pageOne = {
  image: CatHappy,
  title: 'Bienvenido !',
  subtitle: 'Vamos a hacer unos ejercicios de lengua... ¿Estás listo?'
};

const pageTwo = {
  image: CatWalking,
  title: 'Son 3 juegos en los cuales tenes que completar 3 niveles.',
  subtitle: 'Cuanto más alto sea el nivel que completes, más puntos ganás! Pero también son más difíciles.'
};

const STEPS = [pageOne, pageTwo];

export default STEPS;
