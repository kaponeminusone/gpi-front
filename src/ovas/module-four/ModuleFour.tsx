
import HomeContent from '../../components/HomeContent/HomeConent';
import OptionsContent from '../../components/OptionsContent/OptionsContent';
import IMGmodule from '../../assets/module-four/cover4.png'

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

function ModuleFour() {

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'Introducción a la Gestión Financiera',
      route: '/module-four/one',
      subitems: [
        { id: '1.1', title: 'Conceptos y definiciones' },
        { id: '1.2', title: 'Importancia de la gestión financiera en los negocios' }
      ]
    },
    {
      id: '2',
      title: 'Presupuestos y Análisis Financiero',
      route: '/module-four/two',
      subitems: [
        { id: '2.1', title: 'Elaboración de presupuestos' },
        { id: '2.2', title: 'Técnicas de análisis financiero' }
      ]
    },
    {
      id: '3',
      title: 'Gestión de Flujo de Efectivo',
      route: '/module-four/three',
      subitems: [
        { id: '3.1', title: 'Estrategias para la gestión del flujo de efectivo' },
        { id: '3.2', title: 'Identificación de problemas y soluciones' }
      ]
    },
    {
      id: '4',
      title: 'Fuentes de Financiamiento',
      route: '/module-four/four',
      subitems: [
        { id: '4.1', title: 'Tipos de financiamiento' },
        { id: '4.2', title: 'Selección de la fuente adecuada' }
      ]
    },
    {
      id: '5',
      title: 'Estrategias para la Rentabilidad y el Crecimiento Financiero',
      route: '/module-four/five',
      subitems: [
        { id: '5.1', title: 'Análisis de rentabilidad' },
        { id: '5.2', title: 'Planificación para el crecimiento financiero' }
      ]
    }
  ];
  
  
  const objectives: ObjectivesItem[] = [
    { id: '1', title: 'Comprender los principios de la gestión financiera.' },
    { id: '2', title: 'Desarrollar habilidades para la elaboración de presupuestos y análisis financiero.' },
    { id: '3', title: 'Aplicar técnicas de gestión de flujo de efectivo y fuentes de financiamiento.' },
    { id: '4', title: 'Evaluar estrategias para la rentabilidad y el crecimiento financiero.' }
  ];
  
  
  const courseInfo = `Este curso aborda los aspectos clave de la gestión financiera, incluyendo
  presupuestos, análisis financiero, gestión del flujo de efectivo y estrategias
  de financiamiento. Los participantes aprenderán a evaluar la rentabilidad y
  a planificar el crecimiento financiero a través de estudios de caso y ejercicios prácticos.`;

  
  const sections = ['Sección 1', 'Sección 2', 'Sección 3']

  return (
    <>
      <HomeContent 
      title={'Gestión Financiera'}
      email={'imonterrosac@hotmail.com'}
      name={'Iván Javier Monterrosa Castro'}
      hours={60}
      activities={5}>

        <OptionsContent
            content={content}
            objectives={objectives}
            courseInfo={courseInfo}
          />
        <img src={IMGmodule} className='absolute w-[800px] top-[120px] left-[700px] z-[-1] mix-blend-multiply' alt=""/>
      </HomeContent>
    </>
  )
}

export default ModuleFour