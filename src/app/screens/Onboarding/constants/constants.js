import CatHappy from '../assets/cat-happy.gif';
import CatWalking from '../assets/cat-walking.gif';

const pageOne = {
  image: CatHappy,
  title: 'Bienvenido !',
  subtitle: 'Vamos a hacer unos ejercicios de matemática... Estas listo ?'
};

const pageTwo = {
  image: CatWalking,
  title: 'Son 3 juegos en los cuales tenes que completar 3 niveles.',
  subtitle: 'Cuanto mas alto sea el nivel que completes, mas puntos ganas ! Pero también son mas difíciles.'
};

const STEPS = [pageOne, pageTwo];

export default STEPS;
