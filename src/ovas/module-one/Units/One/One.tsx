// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import FocusComponent from '../../../../components/FocusComponent/FocusComponent'

import IMGdruker from '../../../../assets/module-one/Drucker.png'
import IMGlider from '../../../../assets/module-one/lider.png'
import IMGdirection from '../../../../assets/module-one/direction.png'
import IMGModule1_3 from '../../../../assets/module-one/module1-3.png'
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'
import { CardSwap } from '../../../../components/Cards/CardSwap'

import { CalendarDays, Clock, LayoutGrid } from 'lucide-react';
import Quiz from './Quiz'


function One() {
  const sections = ['1.1 Conceptos y definiciones',
                    ' 1.1.1 Descubre las Habilidades', 
                    '1.2 Importancia del Liderazgo y la Gestión del Tiempo',
                    ' 1.2.1 Descubre las Teorias de Liderazgo',
                    ' 1.2.2 Gestión del Tiempo y Tecnicas Avanzadas',
                    ' Quiz de Liderazgo'
                  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Introducción a las Habilidades Empresariales'} 
          subtitle={'Unidad 1'} 
          chapter={'1'}/>
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        
        <FocusComponent>
          {/* TODO: Cambiar el content par recibir un <p></p> para añadir estilos de letra <strong> etc..*/}
          <CardThinking 
              content={'Las habilidades empresariales representan' + 
                        'un conjunto integral de competencias que permiten' + 
                        'a los individuos y organizaciones operar de manera' + 
                        'eficiente, adaptarse a los cambios del mercado y fomentar'+
                        ' el crecimiento sostenido'}
              author='Drucker, 2007b'
              width='400px'
              height='200px'  
              className='top-[20px] left-[180px] child:bg-[#d9d9d9a4]'
            />
            {/* TODO: Conseguir el PNG, para incluirlo en el FOCUS*/}
        <img src={IMGdruker} alt="" className='absolute top-[170px] left-[-50px] w-[600px]'/>  
        </FocusComponent>
        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[500px] top-[180px] z-[-1]'}
        >
          <img src={IMGlider} className='w-[700px]'/>
        </AnimatedElement>
        <CardNote 
            content={'Estas habilidades incluyen, pero no se limitan a,' +
              'la capacidad de liderazgo, toma de decisiones, gestión del' +
              'tiempo, y comunicación efectiva, todas esenciales para' +
              'alcanzar los objetivos organizacionales y enfrentar los' +
              'desafíos en un entorno empresarial competitivo'}
            author='Kartajaya et al., 2018'
            width='400px'
            height='220px'  
           className='top-[40px] left-[800px] bg-[#d9d9d9a4]'
          />
      
        </div>

        <div className="bg-secondary text-secondary-foreground p-8 h-screen flex flex-col items-center">
            
            {/* TODO: Enviar como child las cards*/}   
          <CardFoldHorizontal 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-4xl mb-2 text-center">Descubre las Habilidades</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Habilidades Conceptuales</h3>
                <p className="text-gray-700">
                  Estas habilidades permiten a los líderes y gerentes comprender y 
                  analizar situaciones complejas, identificar patrones y relaciones 
                  entre diferentes elementos de la organización, y tomar decisiones 
                  estratégicas informadas. 
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Mintzberg et al., 1997'}</p  >
                  Los líderes con fuertes habilidades conceptuales pueden visualizar la organización 
                  en su totalidad, anticipar cambios en el entorno externo e interno, y 
                  desarrollar estrategias que alineen los recursos de la organización 
                  con sus objetivos a largo plazo.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Daft et al., 2013'}</p>
                </p>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Habilidades Interpersonales</h3>
                <p className="text-gray-700">
                  Estas habilidades, a menudo denominadas habilidades blandas, 
                  son críticas para la construcción y el mantenimiento de relaciones 
                  laborales efectivas.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Salovey et al., 2004'}</p>
                  La capacidad de comunicarse claramente, resolver conflictos, y trabajar en equipo
                  son elementos centrales de estas habilidades.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Salovey & Mayer, 1990'}</p>
                  La inteligencia emocional, que incluye la empatía y la autoconciencia,
                  es también una competencia esencial en esta categoría.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Goleman, 2005'}</p>
                </p>
              </>)},
              {content: (<div>
                <h3 className="text-xl font-semibold mb-2">Habilidades Técnicas</h3>
                <p className="text-gray-700">
                  Estas habilidades son fundamentales para el desempeño 
                  de tareas específicas dentro de una organización.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Katz, 2009'}</p>
                  Involucran el conocimiento y la capacidad de utilizar 
                  herramientas, procesos y técnicas especializadas relacionadas 
                  con la industria en la que opera la empresa.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Zietlow et al., 2011'}</p>
                </p>
              </div>)}
            ]}
            width={'350px'}
            height={'500px'}
            className='absolute top-[10px] left-[10px]' // Agregado: border-radius, background, shadow
          />
        </div>
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
            
          <AnimatedElement 
              type={'slide'}
              slideDirection={'right'}
              delay ={0}
              duration={1}
              className={'top-[20px] left-[200px] z-[11]'}
              >
            <CardNote 
            content={'El liderazgo en el contexto empresarial no '+
            'solo se refiere a la capacidad de un individuo para '+
            'guiar a un equipo, sino que también involucra la habilidad '+
            'de inspirar, motivar y crear un entorno que fomente el '+
            'crecimiento personal y profesional de los empleados.'}
            author={'Burns, 2012'}
            width='1000px'
            height='120px'  
            className='bg-[#d9d9d9a4]'
            />
            </AnimatedElement>
            
            <AnimatedElement 
              type={'slide'}
              slideDirection={'left'}
              delay ={1}
              duration={1}
              className={'top-[160px] left-[200px] z-[10]'}
              >
            <CardNote 
            content={'Un líder eficaz debe ser capaz de equilibrar las '+
              'necesidades de la organización con las de los individuos, '+
              'asegurando que los empleados se sientan valorados y apoyados.'}
            author={'Northouse, 2021'}
            width='1000px'
            height='120px'  
            className='bg-[#d9d9d9a4]'
            />
            </AnimatedElement>
            
            <AnimatedElement 
              type={'popup'}
              slideDirection={'bottom'}
              delay ={4}
              duration={2}
              className={'top-[300px] left-[700px] z-[13]'}
              >
              <CardSelection
                question="¿Consideras importantes las habilidades empresariales para tu desarrollo profesional?"
                options={[
                  {
                    label: "Aún no sé",
                    content: "¡No hay problema! Tómate tu tiempo para reflexionar sobre la pregunta.",
                  },
                  {
                    label: "Sí",
                    content: "¡Excelente! Has identificado correctamente la importancia de las habilidades empresariales.",
                  },
                  {
                    label: "No",
                    content: "Te invitamos a explorar más sobre cómo las habilidades empresariales pueden beneficiar tu desarrollo profesional.",
                  },
                ]}
                width={'500px'}
                height={'200px'}
                className='absolute'
              />
            </AnimatedElement>

            <AnimatedElement 
              type={'slide'}
              slideDirection={'top'}
              delay ={0}
              duration={1}
              className={'left-[50px] top-[180px] z-[-1]'}
              >
              <img src={IMGdirection} className='w-[700px]'/>
            </AnimatedElement>
        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
                
            <CardFoldChained 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-4xl mb-2 text-center">Descubre las Teorias de Liderazgo</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (
              <>
                <div className='flex flex-col h-full'>
                <h3 className="text-xl font-semibold mb-2">Teoría de los Rasgos</h3>
                <p className="text-gray-700">
                  Esta teoría postula que ciertos rasgos inherentes de personalidad, como 
                  la inteligencia, la confianza en sí mismo, y la sociabilidad, predisponen 
                  a las personas a ser líderes efectivos. Sin embargo, investigaciones posteriores 
                  han demostrado que el liderazgo es más complejo y depende de una combinación de 
                  factores contextuales y rasgos personales.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Zaccaro, 2007'}</p>
                </p>
                </div>
              </>)},
              {content: (<>
                <div className='flex flex-col h-full'>
                  <h3 className="text-xl font-semibold mb-2">Transformacional</h3>
                  <p className="text-gray-700">
                    Desarrollada por <span className="text-gray-500">{'(Bass & Avolio, 1994)'}</span>, 
                    esta teoría enfatiza el liderazgo que busca transformar a los seguidores al 
                    inspirarlos a ir más allá de sus intereses personales y alinearse con los 
                    objetivos de la organización. Los líderes transformacionales son capaces de 
                    generar un alto nivel de compromiso y lealtad a través de la visión compartida, 
                    la estimulación intelectual, y el apoyo individualizado.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Bass & Riggio, 2006'}</p>
                  </p>
                </div>
              </>)},
              {content: (<>
                <div className='flex flex-col h-full'>
                  <h3 className="text-xl font-semibold mb-2">Teoría del Liderazgo Situacional</h3>
                  <p className="text-gray-700">
                  Según esta teoría, no existe un estilo único de liderazgo que sea efectivo en 
                  todas las situaciones. En su lugar, los líderes deben adaptarse al nivel de 
                  madurez y competencia de sus seguidores, así como a las demandas de la situación 
                  específica.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Hersey et al., 1996'}</p>
                  </p>
                </div>
              </>)}
            ]}
            width={'900px'}
            height={'190px'}
            className='absolute top-[-30px] left-[10px]'
            />
        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
            
        <CardNote 
            content={'La gestión efectiva del tiempo es una habilidad '+
              'esencial para cualquier líder o gerente. Una buena '+
              'gestión del tiempo no solo mejora la productividad '+
              'personal, sino que también optimiza los recursos de '+
              'la organización y asegura que los proyectos se '+
              'completen dentro de los plazos establecidos.'}
            author='Morgenstern, 2004'
            width='1200px'
            height='120px'  
           className='top-[20px] left-[100px] bg-[#d9d9d9a4]'
          />

        <AnimatedElement 
          type={'slide'}
          slideDirection={'bottom'}
          delay ={0}
          duration={1}
          className={'top-[160px] left-[100px]'}
        >
          <CardSwap 
            frontContent={(
              <>
                <div className='flex flex-col justify-center items-center h-full'>
                  <CalendarDays className="w-12 h-12 text-black-500 mb-4" /> {/* Icono */}
                  <h3 className="text-2xl mb-2 text-center">Matriz de Eisenhower</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
                <h3 className="text-xl font-semibold mb-2">Matriz de Eisenhower</h3>
                <p className="text-gray-700">
                  Esta herramienta, también conocida como la matriz de la gestión 
                  del tiempo, ayuda a los líderes a priorizar las tareas según su 
                  urgencia e importancia.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Miled, 2023'}</p>
                  Las tareas se clasifican en cuatro cuadrantes: Urgente e importante, 
                  Importante pero no urgente, Urgente pero no importante, y No urgente y no importante.
                  <br/>
                  Esta matriz ayuda a los líderes a concentrarse en las tareas que 
                  realmente importan y a delegar o eliminar las tareas menos relevantes.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Covey & Fernández, 2015'}</p>
                </p>
              </>
            )}
            width='380px'
            height='420px'  
            className='absolute'
          />
        </AnimatedElement>
          
        <AnimatedElement 
          type={'slide'}
          slideDirection={'bottom'}
          delay ={0.3}
          duration={1}
          className={'top-[160px] left-[490px]'}
        >
          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <Clock className="w-12 h-12 text-black-500 mb-4" /> {/* Icono */}
                  <h3 className="text-2xl mb-2 text-center">Técnica Pomodoro</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Técnica Pomodoro</h3>
                  <p className="text-gray-700">
                  Según esta teoría, no existe un estilo único de liderazgo que sea efectivo en 
                  todas las situaciones. En su lugar, los líderes deben adaptarse al nivel de 
                  madurez y competencia de sus seguidores, así como a las demandas de la situación 
                  específica.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Hersey et al., 1996'}</p>
                  </p>
              </>
            )}
            width='380px'
            height='420px'  
           className='absolute'
          />
        </AnimatedElement>
          
        <AnimatedElement 
          type={'slide'}
          slideDirection={'bottom'}
          delay ={0.6}
          duration={1}
          className={'top-[160px] left-[880px]'}
        > 
        <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
              <LayoutGrid className="w-12 h-12 text-black-500 mb-4" /> {/* Icono */}
                  <h3 className="text-2xl mb-2 text-center">Time Blocking</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Time Blocking</h3>
                  <p className="text-gray-700">
                  Esta técnica involucra la planificación del día en bloques de 
                  tiempo dedicados a tareas específicas. Ayuda a reducir la 
                  multitarea y permite a los líderes concentrarse en una sola 
                  tarea a la vez, mejorando así la calidad del trabajo y 
                  reduciendo el estrés.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Newport, 2016'}</p>
                  </p>
              </>
            )}
            width='380px'
            height='420px'  
           className='absolute'
          />
        </AnimatedElement> 
        </div>
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <Quiz></Quiz>
          <img src={IMGModule1_3} className='absolute z-[-1] top-[0px] left-[-70px] w-[600px]'/>
        </div>
      </ScrollContent>
    </div>
  )
}

export default One