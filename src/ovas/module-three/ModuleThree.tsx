
import HomeContent from '../../components/HomeContent/HomeConent';
import OptionsContent from '../../components/OptionsContent/OptionsContent';
import IMGmodule from '../../assets/module-three/cover3.jpg'

interface ContentItem {
  id: string;
  title: string;
  route: string; // Añade un campo de ruta
  subitems?: { id: string; title: string }[];
}

interface ObjectivesItem {
  id: string;
  title: string;
}

function ModuleThree() {

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'Introducción a la Innovación y Creatividad',
      route: '/module-three/one',
      subitems: [
        { id: '1.1', title: 'Conceptos y definiciones' },
        { id: '1.2', title: 'Importancia de la innovación en los negocios' }
      ]
    },
    {
      id: '2',
      title: 'Generación de Ideas Innovadoras',
      route: '/module-three/two',
      subitems: [
        { id: '2.1', title: 'Técnicas de brainstorming y mapas mentales' },
        { id: '2.2', title: 'Herramientas para fomentar la creatividad' }
      ]
    },
    {
      id: '3',
      title: 'Evaluación de Ideas Innovadoras',
      route: '/module-three/three',
      subitems: [
        { id: '3.1', title: 'Criterios para evaluar ideas' },
        { id: '3.2', title: 'Selección de las mejores ideas para implementación' }
      ]
    },
    {
      id: '4',
      title: 'Implementación de Nuevas Soluciones',
      route: '/module-three/four',
      subitems: [
        { id: '4.1', title: 'Estrategias para el desarrollo de productos' },
        { id: '4.2', title: 'Lanzamiento y comercialización de innovaciones' }
      ]
    },
    {
      id: '5',
      title: 'Casos de Estudio y Mejores Prácticas',
      route: '/module-three/five',
      subitems: [
        { id: '5.1', title: 'Análisis de ejemplos reales' },
        { id: '5.2', title: 'Implementación de soluciones innovadoras en el mercado' }
      ]
    }
  ];
  
  
  const objectives: ObjectivesItem[] = [
    { id: '1', title: 'Comprender los principios de la innovación y creatividad.' },
    { id: '2', title: 'Desarrollar habilidades para generar y evaluar ideas innovadoras.' },
    { id: '3', title: 'Aplicar métodos creativos para la resolución de problemas.' },
    { id: '4', title: 'Implementar estrategias para llevar nuevas ideas al mercado.' }
  ];
  
  
  const courseInfo = `Este curso está enfocado en fomentar la creatividad e innovación, proporcionando
  técnicas y herramientas para generar y evaluar ideas innovadoras. Los participantes
  aprenderán a aplicar métodos creativos para resolver problemas y estrategias para
  llevar nuevas soluciones al mercado.`;

    
  const sections = ['Sección 1', 'Sección 2', 'Sección 3']

  return (
    <>
      <HomeContent 
      title={'Innovación y Creatividad'}
      email={'imonterrosac@hotmail.com'}
      name={'Iván Javier Monterrosa Castro'}
      hours={48}
      activities={4}>

        <OptionsContent
            content={content}
            objectives={objectives}
            courseInfo={courseInfo}
          />
        <img src={IMGmodule} className='absolute top-[50px] left-[400px] z-[-1] mix-blend-multiply' alt=""/>
      </HomeContent>
    </>
  )
}

export default ModuleThree