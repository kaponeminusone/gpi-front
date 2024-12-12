// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import FocusComponent from '../../../../components/FocusComponent/FocusComponent'

import IMGBrain from '../../../../assets/module-one/brain.jpg'
import IMGClock from '../../../../assets/module-two/one/clock.png'
import IMGGlosary from '../../../../assets/module-two/one/glosary.jpg'
import IMGPlaning from '../../../../assets/module-two/one/planing.jpg'
import IMGPlaning2 from '../../../../assets/module-two/one/planing2.webp'
import IMGtabla1 from '../../../../assets/module-two/one/tabla1.png'
import IMGilustracion1 from '../../../../assets/module-two/one/ilustracion1.png'
import IMGilustracion2 from '../../../../assets/module-two/one/ilustracion2.png'

import { CardSelection } from '../../../../components/Cards/CardSelection'
import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'
import { CardSwap } from '../../../../components/Cards/CardSwap'

import { Plane, Eye, Target, Grid, Globe, GitCompare, Layers, BarChart } from 'lucide-react';
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { VideoPlayer } from '../../../../components/VideoPlayer/VideoPlayer'


function One() {
  const sections = ['1. Introducción a la Planificación Estratégica',,
                    ' 1.1. Definiciones y Conceptos Clave', 
                    '1.1.1 Conceptos',,,
                    ' 1.2. Importancia de la Planificación Estratégica',
                    '1.2.1 Importancia',,,
                    'Video Complementario'
                  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Introducción a la Planificación Estratégica'} 
          subtitle={'Unidad 1'} 
          chapter={'1'}
          prevRoute="/module-two"
          nextRoute="/module-two/two"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
            <CardTitle
            title="Introducción a la Planificación Estratégica"
            subtitle="Planificación Estratégica"
            className="top-[-180px] left-[0]"
            />

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[250px] z-[-1] justify-center flex-center'}
            >
                <img src={IMGClock} className='w-[350px]'/>
            </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
            <CardNote 
            title='Planificación estratégica'
            content={
                'La planificación estratégica es un proceso continuo y dinámico mediante el cual las ' +
                'organizaciones desarrollan una visión a largo plazo y establecen estrategias y tácticas para ' +
                'lograr sus objetivos. Este proceso es clave para mejorar la competitividad y capacidad de ' +
                'adaptación en un entorno cada vez más cambiante. Su propósito no solo es identificar ' +
                'oportunidades y amenazas, sino también evaluar las fortalezas y debilidades internas que ' +
                'influyen en el desempeño organizacional.'
            }
            width="900px"
            height="210px"
            className="top-[50px] left-[100px] bg-[#d9d9d9a4]"
            />

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[200px] z-[-1] justify-center flex-center'}
            >
                <img src={IMGPlaning} className='w-[800px]'/>
            </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

            <CardTitle
            title="Definiciones y Conceptos Clave"
            subtitle="Planificación Estratégica"
            className="top-[-150px] left-[0]"
            />

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[280px] z-[-1] justify-center flex-center'}
            >
                <img src={IMGGlosary} className='w-[300px]'/>
            </AnimatedElement>


        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <div className="flex flex-row flex-wrap gap-[15px] mb-[auto] mr-[130px]">
                <CardSwap
                frontContent={(
                    <div className='flex flex-col justify-center items-center h-full'>
                        <div className="flex flex-col justify-center items-center h-full">
                            <Plane className="w-12 h-12 text-gray-500 hover:text-gray-700 mb-4 transition-colors" /> {/* Ícono representativo */}
                            <h3 className="text-2xl mb-2 text-center">Planificación Estratégica</h3>
                            <p className="text-sm text-gray-600 text-center">
                                "Planificar es llevar tus sueños al papel y luego a la acción."
                            </p>
                        </div>
                        <h4 className="text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                )}
                backContent={(
                    <p className="text-gray-700">
                    Diversos autores han propuesto definiciones de la planificación estratégica. Johnson et al. (2009) la describen como "el proceso de dirección estratégica que implica la definición de objetivos a largo plazo y la elección de acciones que permiten lograr dichos objetivos en función de los recursos disponibles." 
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Johnson et al., 2009'}</p>
                    </p>
                )}
                width="300px"
                height="600px"
                className="absolute"
                />

                <CardSwap
                frontContent={(
                    <div className='flex flex-col justify-center items-center h-full'>
                    <div className="flex flex-col justify-center items-center h-full">
                    <Eye className="w-12 h-12 text-gray-500 hover:text-gray-700 mb-4 transition-colors" /> {/* Ícono representativo */}
                    <h3 className="text-2xl mb-2 text-center">Visión y Misión</h3>
                    <p className="text-sm text-gray-600 text-center">
                        "La visión nos guía; la misión nos impulsa."
                    </p>
                    </div>
                    <h4 className="text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                )}
                backContent={(
                    <p className="text-gray-700">
                    La visión es una declaración de intenciones que expresa el estado deseado para el futuro de la organización. Según Kaplan & Norton (2014), una visión clara proporciona inspiración y sirve como guía para todos los niveles de la organización.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Kaplan & Norton, 2014'}</p>
                    </p>
                )}
                width="300px"
                height="600px"
                className="absolute"
                />

                <CardSwap
                frontContent={(
                    <div className='flex flex-col justify-center items-center h-full'>
                    <div className="flex flex-col justify-center items-center h-full">
                    <Target className="w-12 h-12 text-gray-500 hover:text-gray-700 mb-4 transition-colors" /> {/* Ícono representativo */}
                    <h3 className="text-2xl mb-2 text-center">Objetivos Estratégicos</h3>
                    <p className="text-sm text-gray-600 text-center">
                        "Define tus metas; define tu camino."
                    </p>
                    </div>
                    <h4 className="text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                )}
                backContent={(
                    <p className="text-gray-700">
                    Los objetivos estratégicos son metas específicas y medibles que la organización pretende alcanzar en un período de tiempo definido. Según Lynch (2018), estos objetivos deben ser SMART (específicos, medibles, alcanzables, realistas y limitados en el tiempo).
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Lynch, 2018'}</p>
                    </p>
                )}
                width="300px"
                height="600px"
                className="absolute"
                />

                <CardSwap
                frontContent={(
                    <div className='flex flex-col justify-center items-center h-full'>
                    <div className="flex flex-col justify-center items-center h-full">
                    <Grid className="w-12 h-12 text-gray-500 hover:text-gray-700 mb-4 transition-colors" /> {/* Ícono representativo */}
                    <h3 className="text-2xl mb-2 text-center">Análisis FODA</h3>
                    <p className="text-sm text-gray-600 text-center">
                        "Conoce tus fortalezas y enfrenta tus desafíos."
                    </p>
                    </div>
                    <h4 className="text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                )}
                backContent={(
                    <p className="text-gray-700">
                    El análisis FODA permite identificar los factores internos (fortalezas y debilidades) y externos (oportunidades y amenazas) que pueden afectar el logro de los objetivos.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'T. Hill & Westbrook, 1997'}</p>
                    </p>
                )}
                width="300px"
                height="600px"
                className="absolute"
                />
            </div>
            {/* Segunda fila */}
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

            <div className="flex flex-row flex-wrap gap-[15px] mb-[auto] mr-[130px]">
                <CardSwap
                frontContent={(
                    <div className='flex flex-col justify-center items-center h-full'>
                    <div className="flex flex-col justify-center items-center h-full">
                    <Globe className="w-12 h-12 text-gray-500 hover:text-gray-700 mb-4 transition-colors" /> {/* Ícono representativo */}
                    <h3 className="text-2xl mb-2 text-center">Análisis PESTEL</h3>
                    <p className="text-sm text-gray-600 text-center">
                        "El mundo cambia; tú también debes hacerlo."
                    </p>
                    </div>
                    <h4 className="text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                )}
                backContent={(
                    <p className="text-gray-700">
                    El análisis PESTEL evalúa factores externos desde un enfoque macroeconómico: político, económico, social, tecnológico, ecológico y legal.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Yüksel, 2012'}</p>
                    </p>
                )}
                width="300px"
                height="600px"
                className="absolute"
                />

                <CardSwap
                frontContent={(
                    <div className='flex flex-col justify-center items-center h-full'>
                    <div className="flex flex-col justify-center items-center h-full">
                    <GitCompare className="w-12 h-12 text-gray-500 hover:text-gray-700 mb-4 transition-colors" /> {/* Ícono representativo */}
                    <h3 className="text-2xl mb-2 text-center">Benchmarking</h3>
                    <p className="text-sm text-gray-600 text-center">
                        "Mide, compara y mejora continuamente."
                    </p>
                    </div>
                    <h4 className="text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                )}
                backContent={(
                    <p className="text-gray-700">
                    Es el proceso mediante el cual las organizaciones comparan sus prácticas y procesos con los de las mejores empresas del sector.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Camp, 1989'}</p>
                    </p>
                )}
                width="300px"
                height="600px"
                className="absolute"
                />

                <CardSwap
                frontContent={(
                    <div className='flex flex-col justify-center items-center h-full'>
                    <div className="flex flex-col justify-center items-center h-full">
                    <Layers className="w-12 h-12 text-gray-500 hover:text-gray-700 mb-4 transition-colors" /> {/* Ícono representativo */}
                    <h3 className="text-2xl mb-2 text-center">Cadena de Valor</h3>
                    <p className="text-sm text-gray-600 text-center">
                        "El verdadero valor está en cada eslabón de la cadena."
                    </p>
                    </div>
                    <h4 className="text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                )}
                backContent={(
                    <p className="text-gray-700">
                    Introducida por Porter (1985), la cadena de valor es un modelo que descompone las actividades de una organización para identificar las áreas que generan valor añadido. Este análisis permite a las empresas entender qué partes de sus procesos contribuyen más a su ventaja competitiva.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Porter, 1985'}</p>
                    </p>
                )}
                width="300px"
                height="600px"
                className="absolute"
                />

                <CardSwap
                frontContent={(
                    <div className='flex flex-col justify-center items-center h-full'>
                    <div className="flex flex-col justify-center items-center h-full">
                    <BarChart className="w-12 h-12 text-gray-500 hover:text-gray-700 mb-4 transition-colors" /> {/* Ícono representativo */}
                    <h3 className="text-2xl mb-2 text-center">Balanced Scorecard</h3>
                    <p className="text-sm text-gray-600 text-center">
                        "Lo que se mide, se mejora."
                    </p>
                    </div>
                    <h4 className="text-gray-600 text-center">{'( Tap )'}</h4>
                    </div>
                )}
                backContent={(
                    <p className="text-gray-700">
                    Kaplan & Norton (2014) introdujeron el concepto del Balanced Scorecard, una herramienta de medición que traduce la visión y estrategia en un conjunto de indicadores de desempeño organizacional. Esta herramienta permite monitorizar el progreso de las estrategias en cuatro perspectivas: financiera, clientes, procesos internos y aprendizaje organizacional.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Kaplan & Norton, 2014'}</p>
                    </p>
                )}
                width="300px"
                height="600px"
                className="absolute"
                />
            </div>

        </div>


        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

        <AnimatedElement 
            type={'slide'}
            slideDirection={'right'}
            delay ={0}
            duration={0.8}
            className={' top-[50px] z-[-1]'}
        >
            <img src={IMGtabla1} className='w-[750px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'} 
            text={'Ilustración 2 - Habilidades Esenciales de un Líder'} 
            type={'topToBottom'}
            delay = {4}
            duration = {0.8}
            />
        </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

            <CardTitle
            title="Importancia de la Planificación Estratégica"
            subtitle="Planificación Estratégica"
            className="top-[-150px] left-[0]"
            />

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={0.8}
            className={'top-[300px] z-[-1] justify-center flex-center'}
            >
                <img src={IMGPlaning2} className='w-[300px]'/>
            </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

        <CardNote 
            content={
                'La importancia de la planificación estratégica radica en su capacidad para proporcionar a '+
                'las organizaciones una dirección clara, mejorar la toma de decisiones, optimizar el uso de '+
                'los recursos y adaptarse a los cambios del entorno. A continuación, se detallan algunos de '+
                'los principales beneficios:'
            }
            width="1100px"
            height="120px"
            className="top-[20px] left-[100px] bg-[#d9d9d9a4]"
            />

            <AnimatedElement
            type="slide"
            slideDirection="bottom"
            delay={0}
            duration={1}
            className="mb-4 top-[170px] left-[100px]"
            >
                <CardNote
                    title='Proporciona dirección y enfoque'
                    content={
                    'La planificación estratégica ayuda a las organizaciones a definir claramente su visión y misión, lo que, a su vez, proporciona una dirección clara para todas las decisiones operativas y estratégicas. Como mencionan Bryson (2018) y Porter (1996), este enfoque unificado asegura que todos los miembros de la organización trabajen hacia un objetivo común, lo que reduce las ineficiencias y mejora la cohesión interna.'
                    }
                    author="Bryson, 2018; Porter, 1996"
                    width="350px"
                    height="450px"
                    className="bg-[#d9d9d9a4]"
                />
            </AnimatedElement>

            <AnimatedElement
            type="slide"
            slideDirection="bottom"
            delay={0.5}
            duration={1}
            className="mb-4 top-[170px] left-[470px]"
            >
                <CardNote
                    title='Mejora la toma de decisiones'
                    content={
                    'Según Drucker (2006), la planificación estratégica proporciona un marco sistemático para la toma de decisiones, ya que permite que los líderes empresariales basen sus decisiones en un análisis exhaustivo del entorno interno y externo. Esto minimiza el riesgo de decisiones mal fundamentadas y mejora la capacidad de la organización para adaptarse a los cambios del mercado.'
                    }
                    author="Drucker, 2006"
                    width="350px"
                    height="450px"
                    className="bg-[#d9d9d9a4]"
                />
            </AnimatedElement>

            <AnimatedElement
            type="slide"
            slideDirection="bottom"
            delay={1}
            duration={1}
            className="mb-4 top-[170px] left-[840px]"
            >
                <CardNote
                    title='Optimización de recursos'
                    content={
                    'En entornos empresariales cada vez más competitivos y globalizados, la asignación eficiente de los recursos es clave para el éxito. La planificación estratégica permite a las organizaciones asignar sus recursos de manera óptima, priorizando inversiones en áreas clave que generen mayor valor añadido.'
                    }
                    author="Porter, 1985"
                    width="350px"
                    height="450px"
                    className="bg-[#d9d9d9a4]"
                />
            </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

            <AnimatedElement
            type="slide"
            slideDirection="left"
            delay={0}
            duration={1}
            className="mb-4 top-[20px] left-[50px]"
            >
                <CardNote
                    title='Facilita la adaptación al cambio'
                    content={
                    'En un mundo empresarial en constante evolución, la planificación estratégica es fundamental para anticipar y adaptarse a los cambios del entorno. El uso de herramientas como el análisis PESTEL o FODA permite que las organizaciones detecten tendencias y respondan proactivamente a los desafíos y oportunidades emergentes.'
                    }
                    author="Johnson et al., 2009"
                    width="1200px"
                    height="150px"
                    className="bg-[#d9d9d9a4] text-sm"
                />
            </AnimatedElement>

            <AnimatedElement
            type="slide"
            slideDirection="right"
            delay={0.5}
            duration={1}
            className="mb-4 top-[180px] left-[50px]"
            >
                <CardNote
                    title='Promueve la innovación'
                    content={
                    'Como destaca Hamel (2000), las organizaciones que planifican estratégicamente no solo se centran en optimizar sus operaciones actuales, sino que también buscan constantemente formas de innovar y diferenciarse de la competencia. La innovación es clave para mantenerse relevante en mercados altamente competitivos y en rápida evolución.'
                    }
                    author="Hamel, 2000"
                    width="1200px"
                    height="160px"
                    className="bg-[#d9d9d9a4] text-sm"
                />
            </AnimatedElement>

            <AnimatedElement
            type="slide"
            slideDirection="left"
            delay={1}
            duration={1}
            className="mb-4 top-[350px] left-[50px]"
            >
                <CardNote
                    title='Mejora la evaluación y el control'
                    content={
                    'Kaplan & Norton (2014) señalan que la planificación estratégica facilita la creación de indicadores de rendimiento que permiten a las organizaciones medir el éxito de sus estrategias. Esto incluye no solo indicadores financieros, sino también otros relacionados con la satisfacción del cliente, la eficiencia operativa y la capacidad de aprendizaje organizacional.'
                    }
                    author="Kaplan & Norton, 2014"
                    width="1200px"
                    height="170px"
                    className="bg-[#d9d9d9a4] text-sm"
                />
            </AnimatedElement>

            <AnimatedElement
            type="slide"
            slideDirection="right"
            delay={1.5}
            duration={1}
            className="mb-4 top-[530px] left-[50px]"
            >
                <CardNote
                    title='Refuerza la cultura organizacional'
                    content={
                    'Una planificación estratégica bien comunicada y ejecutada ayuda a consolidar una cultura de compromiso y alineación con los objetivos organizacionales. Según Collins & Porras (2011), una cultura fuerte puede ser un activo clave para las organizaciones, ya que fomenta la lealtad, la colaboración y el sentido de propósito entre los empleados.'
                    }
                    author="Collins & Porras, 2011"
                    width="1200px"
                    height="170px"
                    className="bg-[#d9d9d9a4] text-sm"
                />
            </AnimatedElement>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

        <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={0}
            duration={0.8}
            className={' top-[100px] z-[-1] ml-[-40%]'}
        >
            <img src={IMGilustracion1} className='w-[750px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'} 
            text={''} 
            type={'topToBottom'}
            delay = {1}
            duration = {0.8}
            />
        </AnimatedElement>       

        <AnimatedElement 
            type={'slide'}
            slideDirection={'right'}
            delay ={0}
            duration={0.8}
            className={' top-[160px] z-[-2] ml-[43%]'}
        >
            <img src={IMGilustracion2} className='w-[500px]'/>
            <AnimatedText className={'text-sm text-center text-gray-700'} 
            text={'Ilustración 2 - Relación entre Misión, Visión y Objetivos Estratégicos'} 
            type={'topToBottom'}
            delay = {1}
            duration = {0.8}
            />
        </AnimatedElement>      

        </div>
                    
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

        <div className="mb-[150px]">
            
            <VideoPlayer
                videoUrl="https://www.youtube.com/watch?v=UCFaXHPqynI"
                title="Proceso de Planificación Estratégica"
            />
            </div>

        </div>

      </ScrollContent>
    </div>
  )
}

export default One
