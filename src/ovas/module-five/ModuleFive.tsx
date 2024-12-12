
import HomeContent from '../../components/HomeContent/HomeConent';
import OptionsContent from '../../components/OptionsContent/OptionsContent';
import IMGmodule from '../../assets/module-five/cover5.png'

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

function ModuleFive() {

  const content: ContentItem[] = [
    {
      id: '1',
      title: 'Introducción al Marketing y Ventas',
      route: '/module-five/one',
      subitems: [
        { id: '1.1', title: 'Conceptos y definiciones' },
        { id: '1.2', title: 'Importancia del marketing y las ventas en los negocios' }
      ]
    },
    {
      id: '2',
      title: 'Identificación y Segmentación del Mercado Objetivo',
      route: '/module-five/two',
      subitems: [
        { id: '2.1', title: 'Técnicas de investigación de mercado' },
        { id: '2.2', title: 'Segmentación y targeting' }
      ]
    },
    {
      id: '3',
      title: 'Estrategias de Promoción y Desarrollo de Marca',
      route: '/module-five/three',
      subitems: [
        { id: '3.1', title: 'Mix de marketing' },
        { id: '3.2', title: 'Estrategias de branding' }
      ]
    },
    {
      id: '4',
      title: 'Gestión de Redes Sociales',
      route: '/module-five/four',
      subitems: [
        { id: '4.1', title: 'Herramientas y técnicas de social media marketing' },
        { id: '4.2', title: 'Medición y análisis de resultados' }
      ]
    },
    {
      id: '5',
      title: 'Técnicas de Ventas Efectivas',
      route: '/module-five/five',
      subitems: [
        { id: '5.1', title: 'Proceso de ventas' },
        { id: '5.2', title: 'Estrategias de negociación y cierre de ventas' }
      ]
    }
  ];
  
  
  const objectives: ObjectivesItem[] = [
    { id: '1', title: 'Comprender los principios del marketing y las ventas.' },
    { id: '2', title: 'Desarrollar habilidades para identificar y segmentar el mercado objetivo.' },
    { id: '3', title: 'Aplicar estrategias de promoción y desarrollo de marca.' },
    { id: '4', title: 'Implementar técnicas efectivas de ventas y gestión de redes sociales.' }
  ];
  
  
  const courseInfo = `Este curso proporciona una comprensión profunda de las estrategias de marketing y ventas,
  incluyendo el desarrollo de marca, segmentación del mercado, promoción y gestión de redes sociales.
  Los participantes aplicarán técnicas de ventas efectivas para mejorar el alcance y el impacto comercial.`;

  
  const sections = ['Sección 1', 'Sección 2', 'Sección 3']

  return (
    <>
      <HomeContent 
      title={'Marketing y Ventas'}
      email={'imonterrosac@hotmail.com'}
      name={'Iván Javier Monterrosa Castro'}
      hours={54}
      activities={4}>

        <OptionsContent
            content={content}
            objectives={objectives}
            courseInfo={courseInfo}
          />
        <img src={IMGmodule} className='w-[800px]  absolute top-[170px] left-[700px] z-[-1] mix-blend-multiply' alt=""/>
      </HomeContent>
    </>
  )
}

export default ModuleFive