
import HomeContent from '../../components/HomeContent/HomeConent';
import OptionsContent from '../../components/OptionsContent/OptionsContent';
import IMGmodule from '../../assets/module-two/cover2.jpg'

import { FloatingPDFViewerButton } from '../../components/PDFViewer/FloatingPDFViewerButton';
import module2Document from '../../assets/module-two/module_2_document.pdf';

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

function ModuleTwo() {

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'Introducción a la Planificación Estratégica',
      route: '/module-two/one',
      subitems: [
        { id: '1.1', title: 'Definiciones y conceptos clave' },
        { id: '1.2', title: 'Importancia de la planificación estratégica' }
      ]
    },
    {
      id: '2',
      title: 'Análisis Estratégico',
      route: '/module-two/two',
      subitems: [
        { id: '2.1', title: 'Herramientas de análisis externo e interno' },
        { id: '2.2', title: 'Identificación de oportunidades y amenazas' }
      ]
    },
    {
      id: '3',
      title: 'Formulación de Estrategias',
      route: '/module-two/three',
      subitems: [
        { id: '3.1', title: 'Desarrollo de objetivos estratégicos' },
        { id: '3.2', title: 'Creación de planes de acción' }
      ]
    },
    {
      id: '4',
      title: 'Implementación de Estrategias',
      route: '/module-two/four',
      subitems: [
        { id: '4.1', title: 'Asignación de recursos y ejecución de planes' },
        { id: '4.2', title: 'Monitoreo y control de estrategias' }
      ]
    },
    {
      id: '5',
      title: 'Evaluación y Control Estratégico',
      route: '/module-two/five',
      subitems: [
        { id: '5.1', title: 'Evaluación del desempeño' },
        { id: '5.2', title: 'Ajustes y mejoras continuas' }
      ]
    }
  ];
  
  const objectives: ObjectivesItem[] = [
    { id: '1', title: 'Comprender los principios de la planificación estratégica.' },
    { id: '2', title: 'Desarrollar habilidades para la creación de planes estratégicos efectivos.' },
    { id: '3', title: 'Aplicar herramientas y técnicas de análisis estratégico.' },
    { id: '4', title: 'Evaluar casos de estudio para identificar mejores prácticas en la planificación estratégica.' }
  ];
  
  
  const courseInfo = `Este curso está diseñado para enseñar métodos y herramientas clave
  para desarrollar planes estratégicos que impulsen el crecimiento y la sostenibilidad de los negocios.
  A través de clases teóricas, estudios de caso y ejercicios prácticos, los estudiantes aprenderán
  cómo analizar, formular, implementar y evaluar estrategias empresariales efectivas.`;

  
  const sections = ['Sección 1', 'Sección 2', 'Sección 3']

  return (
    <>
      <HomeContent 
      title={'Planificación Estratégica'}
      email={'imonterrosac@hotmail.com'}
      name={'Iván Javier Monterrosa Castro'}
      hours={54}
      activities={4}>
        <OptionsContent
            content={content}
            objectives={objectives}
            courseInfo={courseInfo}
          />
        <img src={IMGmodule} className='absolute top-[100px] left-[500px] z-[-1] mix-blend-multiply' alt=""/>
        <FloatingPDFViewerButton
          pdfUrl={module2Document}
          title="Module 2 Document"
          className='absolute bottom-[40px] right-[40px]'
        />
      </HomeContent>
    </>
  )
}

export default ModuleTwo