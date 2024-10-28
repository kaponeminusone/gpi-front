
import HomeContent from '../../components/HomeContent/HomeConent';
import OptionsContent from '../../components/OptionsContent/OptionsContent';
import './ModuleOne.css'
import One from './Units/One/One';

interface ContentItem {
  id: string;
  title: string;
  subitems?: { id: string; title: string }[];
}

interface ObjectivesItem {
  id: string;
  title: string;
}

function ModuleOne() {

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'Introducción a las Habilidades Empresariales',
      subitems: [
        { id: '1.1', title: 'Conceptos básicos y definiciones' },
        { id: '1.2', title: 'Importancia del liderazgo y la gestión del tiempo' }
      ]
    },
    { id: '2', title: 'Liderazgo y Gestión del Tiempo' },
    { id: '3', title: 'Comunicación Efectiva' },
    { id: '4', title: 'Casos de Estudio y Mejores Prácticas' }
  ];
  
  const objectives: ObjectivesItem[] = [
    { id: '1', title: 'Desarrollar habilidades de liderazgo efectivo' },
    { id: '2', title: 'Mejorar la gestión del tiempo y productividad' },
    { id: '3', title: 'Fortalecer la comunicación empresarial' },
    { id: '4', title: 'Aplicar mejores prácticas en casos reales' }
  ];
  
  const courseInfo = `Este curso está diseñado para desarrollar habilidades empresariales esenciales
  a través de un enfoque práctico y orientado a resultados. Los participantes
  aprenderán conceptos fundamentales y aplicarán su conocimiento en situaciones
  reales del mundo empresarial.`;
  
  const sections = ['Sección 1', 'Sección 2', 'Sección 3']

  return (
    <>
      {/* <HomeContent 
      title={'Desarrollo de Habilidades Empresariales'} 
      email={'imonterrosac@hotmail.com'} 
      name={'Iván Javier Monterrosa Castro'} 
      hours={10} 
      activities={6}>
        <OptionsContent
            content={content}
            objectives={objectives}
            courseInfo={courseInfo}
          />
      </HomeContent> */}
      
      <One></One>
    </>
  )
}

export default ModuleOne