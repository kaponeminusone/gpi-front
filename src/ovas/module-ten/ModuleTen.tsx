import HomeContent from '../../components/HomeContent/HomeConent';
import OptionsContent from '../../components/OptionsContent/OptionsContent';
import IMGmodule from '../../assets/module-ten/inicio-10.png'


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
  
  function ModuleTen() {
  
    const content: ContentItem[] = [
      {
        id: '1',
        title: 'Introducción a la Ética Habilidades Empresariales',
        route: '/module-ten/one',
        subitems: [
          { id: '1.1', title: 'Conceptos y definiciones' },
          { id: '1.2', title: 'Importancia de la ética y la responsabilidad social en los negocios' }
        ]
      },
  
      { id: '2', title: 'Prácticas Comerciales Éticas', 
        route: '/module-ten/two',
        subitems: [
          { id: '2.1', title: 'Identificación de dilemas éticos' },
          { id: '2.2', title: 'Estrategias para la toma de decisiones éticas' }
        ]
      },
  
      { id: '3', title: 'Cumplimiento Normativo', 
        route: '/module-ten/three',
        subitems: [
          { id: '3.1', title: 'Legislación y regulaciones aplicables' },
          { id: '3.2', title: 'Herramientas para el cumplimiento normativo' }
        ] },
  
      { id: '4', title: 'Responsabilidad Social Corporativa', 
        route: '/module-ten/four',
        subitems: [
          { id: '4.1', title: 'Planificación y ejecución de programas de RSC' },
          { id: '4.2', title: 'Medición y comunicación de resultados' }
        ]
       },
  
       { id: '5', title: 'Casos de Estudio y Mejores Prácticas', 
        route: '/module-ten/five',
        subitems: [
          { id: '5.1', title: 'Análisis de ejemplos reales' },
          { id: '5.2', title: 'Implementación de estrategias exitosas' }
        ]
       }
    ];
    
    const objectives: ObjectivesItem[] = [
      { id: '1', title: 'Comprender los principios de la ética empresarial y la responsabilidad social' },
      { id: '2', title: 'Desarrollar habilidades para identificar y aplicar prácticas comerciales éticas' },
      { id: '3', title: 'Aplicar técnicas para el cumplimiento normativo' },
      { id: '4', title: 'Aplicar mejores prácticas en casos reales' }
    ];
    
    const courseInfo = `Este curso está diseñado para promocionar las prácticas 
    comerciales éticas, cumplimiento normativo, y responsabilidad social corporativa 
    para contribuir positivamente al entorno social y ambiental.
`;
    
    return (
      <>
        <HomeContent 
        title={'Ética Empresarial Y Responsabilidad Social'} 
        email={'imonterrosac@hotmail.com'} 
        name={'Iván Javier Monterrosa Castro'} 
        hours={54} 
        activities={4}>
          <OptionsContent
              content={content}
              objectives={objectives}
              courseInfo={courseInfo}
            />
          <img src={IMGmodule} className='absolute top-[180px] left-[800px] z-[-1]' alt=""/>
        </HomeContent>
      </>
    )
  }
  
  export default ModuleTen