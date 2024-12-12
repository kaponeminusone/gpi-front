
import HomeContent from '../../components/HomeContent/HomeConent';
import OptionsContent from '../../components/OptionsContent/OptionsContent';
import './ModuleOne.css'
import One from './Units/One/One';
import IMGmodule from '../../assets/module-one/module1.png'

import { FloatingPDFViewerButton } from '../../components/PDFViewer/FloatingPDFViewerButton';
import module1Document from '../../assets/module-one/module_1_document.pdf';

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

function ModuleOne() {

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'Introducción a las Habilidades Empresariales',
      route: '/module-one/one',
      subitems: [
        { id: '1.1', title: 'Conceptos básicos y definiciones' },
        { id: '1.2', title: 'Importancia del liderazgo y la gestión del tiempo' }
      ]
    },

    { id: '2', title: 'Liderazgo y Gestión del Tiempo', 
      route: '/module-one/two',
      subitems: [
        { id: '2.1', title: 'Técnicas de Liderazgo Efectivo' },
        { id: '2.2', title: 'Estrategias para la Gestión Eficiente del Tiempo' }
      ]
    },

    { id: '3', title: 'Resolución de Problemas', 
      route: '/module-one/three',
      subitems: [
        { id: '3.1', title: 'Métodos de Identificación y Análisis de Problemas' },
        { id: '3.2', title: 'Herramientas para la Toma de Decisiones' }
      ] },

    { id: '4', title: 'Comunicación Efectiva', 
      route: '/module-one/four',
      subitems: [
        { id: '4.1', title: 'Principios de la Comunicación Empresarial' },
        { id: '4.2', title: 'Técnicas de Presentación y Negociación' }
      ]
     },

     { id: '5', title: 'Casos de Estudio y Mejores Prácticas', 
      route: '/module-one/five',
      subitems: [
        { id: '5.1', title: 'Análisis de Ejemplos Reales' },
        { id: '5.2', title: 'Implementación de Soluciones Innovadoras' }
      ]
     }
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
      <HomeContent 
      title={'Desarrollo de Habilidades Empresariales'} 
      email={'imonterrosac@hotmail.com'} 
      name={'Iván Javier Monterrosa Castro'} 
      hours={10} 
      activities={5}>
        <OptionsContent
            content={content}
            objectives={objectives}
            courseInfo={courseInfo}
          />
        <img src={IMGmodule} className='absolute top-[170px] left-[700px] z-[-1]' alt=""/>
        <FloatingPDFViewerButton
          pdfUrl={module1Document}
          title="Module 1 Document"
          className='absolute bottom-[40px] right-[40px]'
        />
      </HomeContent>
    </>
  )
}

export default ModuleOne