
import HomeContent from '../../components/HomeContent/HomeConent';
import OptionsContent from '../../components/OptionsContent/OptionsContent';
import IMGmodule from '../../assets/module-six/cover6.png'

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

function ModuleSix() {

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'Introducción al Desarrollo de Productos/Servicios',
      route: '/module-six/one',
      subitems: [
        { id: '1.1', title: 'Conceptos y definiciones' },
        { id: '1.2', title: 'Importancia del desarrollo de productos/servicios en los negocios' }
      ]
    },
    {
      id: '2',
      title: 'Investigación de Mercado',
      route: '/module-six/two',
      subitems: [
        { id: '2.1', title: 'Métodos de recolección de datos' },
        { id: '2.2', title: 'Análisis de mercado' }
      ]
    },
    {
      id: '3',
      title: 'Diseño de Productos/Servicios',
      route: '/module-six/three',
      subitems: [
        { id: '3.1', title: 'Técnicas de diseño y desarrollo' },
        { id: '3.2', title: 'Herramientas de prototipado' }
      ]
    },
    {
      id: '4',
      title: 'Pruebas y Validación de Productos/Servicios',
      route: '/module-six/four',
      subitems: [
        { id: '4.1', title: 'Métodos de pruebas y validación' },
        { id: '4.2', title: 'Feedback y mejora continua' }
      ]
    },
    {
      id: '5',
      title: 'Lanzamiento y Comercialización',
      route: '/module-six/five',
      subitems: [
        { id: '5.1', title: 'Estrategias de go-to-market' },
        { id: '5.2', title: 'Planificación de lanzamientos' }
      ]
    }
  ];
  
  
  const objectives: ObjectivesItem[] = [
    { id: '1', title: 'Comprender los principios del desarrollo de productos y servicios.' },
    { id: '2', title: 'Desarrollar habilidades para la investigación de mercado y el diseño de productos.' },
    { id: '3', title: 'Aplicar técnicas para el desarrollo de prototipos y pruebas.' },
    { id: '4', title: 'Implementar estrategias para el lanzamiento exitoso al mercado.' }
  ];
  
  
  const courseInfo = `Este curso proporciona un enfoque práctico para el desarrollo de productos y servicios,
  incluyendo métodos de investigación de mercado, diseño, prototipado y estrategias
  para un lanzamiento exitoso. A través de estudios de caso y talleres, los participantes
  aprenderán a crear soluciones innovadoras y sostenibles para el mercado.`;

  
  const sections = ['Sección 1', 'Sección 2', 'Sección 3']

  return (
    <>
      <HomeContent 
      title={'Desarrollo de Productos/Servicios'}
      email={'imonterrosac@hotmail.com'}
      name={'Iván Javier Monterrosa Castro'}
      hours={54}
      activities={4}>

        <OptionsContent
            content={content}
            objectives={objectives}
            courseInfo={courseInfo}
          />
          <div ></div>
            <img src={IMGmodule} className='w-[700px] absolute top-[170px] left-[700px] z-[-1] mix-blend-multiply' alt=""/>
      </HomeContent>
    </>
  )
}

export default ModuleSix