// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import FocusComponent from '../../../../components/FocusComponent/FocusComponent'
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { CardSwap } from '../../../../components/Cards/CardSwap'

import IMGcomuni from '../../../../assets/module-one/four/comunicacion.jpg'
import IMGilustracion5 from '../../../../assets/module-two/four/ilustracion6.png'
import IMGImplement from '../../../../assets/module-two/four/implementacion.png'
import IMGImplement2 from '../../../../assets/module-two/four/implement.png'
import IMGrecursos from '../../../../assets/module-two/four/Recursos2.jpg'
import IMGDiamond from '../../../../assets/module-two/four/Recursos.webp'
import IMGPlan from '../../../../assets/module-two/four/plan.png'
import IMGMonitoring from '../../../../assets/module-two/four/monitoring.png'
import IMGKPI from '../../../../assets/module-two/four/kpi.png'
import IMGcontrol from '../../../../assets/module-two/four/control.png'

import { Grid2X2, TreeDeciduous, DollarSign } from 'lucide-react';
import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'
import { VideoPlayer } from '../../../../components/VideoPlayer/VideoPlayer'
import { title } from 'framer-motion/client'


function Four() {
  const sections = [
    '4. Principios de la Comunicación Empresarial',,
    '4.1. Asignación de Recursos y Ejecución de Planes',
    '4.1.1 Asignación de Recursos',
    '4.1.2 Ejecución de Planes',
    '4.2. Monitoreo y Control de Estrategias',
    '4.2.1 Monitoreo, indicadores KPIs',,
    '4.2.2 Flexibilidad en el Monitoreo y Control',
    'Video Complementario',
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Implementación de Estrategias'} 
          subtitle={'Unidad 4'} 
          chapter={'4'}
          prevRoute="/module-two/three"
          nextRoute="/module-two/five"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
          <CardTitle  
            title="Implementación de Estrategias"
            subtitle='Conceptos, Implementaciones, Ejemplos'
            className="top-[-200px] left-[0]"
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={' top-[230px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGImplement} className='w-[500px]'/>

          </AnimatedElement>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

            <AnimatedElement 
                type={'slide'}
                slideDirection={'bottom'}
                delay ={0}
                duration={1}
                className={'top-[100px] left-[450px] z-[-0] justify-center flex-center'}
            >
                <CardNote
                title="Implementación de Estrategias"
                content={
                    "La implementación de estrategias es un proceso clave para convertir la planificación estratégica " +
                    "en acciones concretas que generen resultados. Se trata de un conjunto de actividades coordinadas " +
                    "que buscan cumplir con los objetivos estratégicos mediante la asignación de recursos, la ejecución " +
                    "de los planes, y un sistema de monitoreo y control efectivo. La implementación es crucial, ya que " +
                    "una estrategia mal ejecutada puede fallar incluso si fue bien diseñada. Según Grant (2021), 'la " +
                    "implementación efectiva es la clave para el éxito estratégico y requiere una correcta asignación de " +
                    "recursos y mecanismos de seguimiento.'"
                }
                width='500px'
                height=''
                className="bg-white"
                />
            </AnimatedElement>

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={' top-[100px] z-[-2] justify-center flex-center'}
          >
            <img src={IMGImplement2} className='w-[1000px] '/>

          </AnimatedElement>
       
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <CardTitle  
            title="Asignación de Recursos y Ejecución de Planes"
            subtitle="Distribución eficiente y puesta en marcha de estrategias"
            className="top-[-100px] text-gray-800"
            />

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={' top-[350px] z-[-2] justify-center flex-center'}
          >
            <img src={IMGDiamond} className='w-[150px] '/>

          </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            
            <div className='mr-[100px]'>

            <CardNote
            title="Asignación de Recursos y Ejecución de Planes"
            content={
                'La asignación de recursos es la distribución de recursos financieros, humanos, ' +
                'tecnológicos y de tiempo necesarios para la ejecución exitosa de los planes estratégicos. ' +
                'Una asignación correcta asegura que cada área o departamento cuente con los insumos ' +
                'suficientes para realizar las tareas asignadas. Kaplan y Norton (2001) indican que "el éxito ' +
                'de la implementación depende, en gran medida, de cómo se distribuyen los recursos y si ' +
                'estos apoyan las prioridades estratégicas".'
            }
            width="1100px"
            height=""
            className="top-[40px] bg-[#f9f9f9] shadow-lg rounded-lg"
            />

            <div className="flex gap-6 mt-8">
            <CardSwap
                frontContent={
                <>
                    <div className="flex flex-col h-full justify-between items-center">
                    <h3 className="text-lg font-semibold mb-2 text-center">Recursos Financieros</h3>
                    <p className="text-sm text-gray-700 text-center">
                        Los recursos financieros son fundamentales para cualquier organización, ya que permiten financiar proyectos, adquirir tecnología, capacitar empleados, entre otros.
                    </p>
                    <h4 className="text-sm text-gray-600 text-center mt-4">( Tap )</h4>
                    </div>
                </>
                }
                backContent={
                <>
                    <h3 className="text-lg font-semibold mb-2">Ejemplo</h3>
                    <p className="text-gray-700 text-sm">
                    Hill & Jones (2012) señalan que "la correcta distribución del presupuesto en áreas estratégicas clave es vital para maximizar el retorno de la inversión". Por ejemplo, una empresa que desea mejorar su servicio al cliente podría invertir en un software de CRM (Customer Relationship Management) y en la capacitación de su equipo de atención al cliente.
                    </p>
                </>
                }
                width="350px"
                height="250px"
                className="shadow-md"
            />

            <CardSwap
                frontContent={
                <>
                    <div className="flex flex-col h-full justify-between items-center">
                    <h3 className="text-lg font-semibold mb-2 text-center">Recursos Humanos</h3>
                    <p className="text-sm text-gray-700 text-center">
                        La gestión del talento es esencial para ejecutar los planes estratégicos. La calidad del capital humano determina en gran medida el éxito de la implementación.
                    </p>
                    <h4 className="text-sm text-gray-600 text-center mt-4">( Tap )</h4>
                    </div>
                </>
                }
                backContent={
                <>
                    <h3 className="text-lg font-semibold mb-2">Ejemplo</h3>
                    <p className="text-gray-700 text-sm">
                    Johnson et al. (2009) indican que esto incluye no solo la cantidad de empleados, sino también sus habilidades y la motivación para lograr los objetivos. Las organizaciones deben asegurarse de que sus empleados comprendan claramente los planes y estén capacitados para implementarlos.
                    </p>
                </>
                }
                width="350px"
                height="250px"
                className="shadow-md"
            />

            <CardSwap
                frontContent={
                <>
                    <div className="flex flex-col h-full justify-between items-center">
                    <h3 className="text-lg font-semibold mb-2 text-center">Recursos Tecnológicos</h3>
                    <p className="text-sm text-gray-700 text-center">
                        La tecnología es un habilitador crítico en la implementación de estrategias. El uso de tecnologías avanzadas puede generar ventajas competitivas sostenibles.
                    </p>
                    <h4 className="text-sm text-gray-600 text-center mt-4">( Tap )</h4>
                    </div>
                </>
                }
                backContent={
                <>
                    <h3 className="text-lg font-semibold mb-2">Ejemplo</h3>
                    <p className="text-gray-700 text-sm">
                    Según Porter (1985), "el uso de tecnologías avanzadas puede generar ventajas competitivas sostenibles, ya que permite optimizar procesos y reducir costos". Tecnologías como el análisis de datos, la inteligencia artificial y las plataformas de automatización de procesos pueden transformar la implementación estratégica.
                    </p>
                </>
                }
                width="350px"
                height="250px"
                className="shadow-md"
            />
            </div>
            </div>

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={' bottom-[-250px] z-[-2] justify-center flex-center'}
          >
            <img src={IMGrecursos} className='w-[800px] '/>

          </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <div className='mr-[100px]'>
            <CardNote
            title="Ejecución de Planes"
            content={
                'La ejecución efectiva de los planes implica desglosar las estrategias en tareas operativas, ' +
                'establecer plazos y asignar responsables. Este proceso asegura que las actividades se lleven ' +
                'a cabo de manera oportuna y con los recursos necesarios. Mintzberg et al. (2005) señalan que ' +
                '"la ejecución requiere de una coordinación efectiva entre departamentos y una clara asignación de roles y responsabilidades".'
            }
            width="1100px"
            height=""
            className="top-[40px] bg-[#f9f9f9] shadow-lg rounded-lg"
            />

            <div className="flex gap-6 mt-8">
            <CardSwap
                frontContent={
                <>
                    <div className="flex flex-col h-full justify-between items-center">
                    <h3 className="text-lg font-semibold mb-2 text-center">Desglose de Actividades</h3>
                    <p className="text-sm text-gray-700 text-center">
                        Desglosar los planes estratégicos en tareas concretas es una forma de asegurarse de que las acciones se implementen paso a paso.
                    </p>
                    <h4 className="text-sm text-gray-600 text-center mt-4">( Tap )</h4>
                    </div>
                </>
                }
                backContent={
                <>
                    <h3 className="text-lg font-semibold mb-2">Ejemplo</h3>
                    <p className="text-gray-700 text-sm">
                    Un ejemplo claro es la metodología de gestión de proyectos conocida como Gantt Chart, que permite organizar las tareas a lo largo de un cronograma definido.
                    </p>
                </>
                }
                width="350px"
                height="250px"
                className="shadow-md"
            />

            <CardSwap
                frontContent={
                <>
                    <div className="flex flex-col h-full justify-between items-center">
                    <h3 className="text-lg font-semibold mb-2 text-center">Coordinación Interdepartamental</h3>
                    <p className="text-sm text-gray-700 text-center">
                        La comunicación efectiva y la colaboración entre áreas funcionales pueden evitar la duplicación de esfuerzos.
                    </p>
                    <h4 className="text-sm text-gray-600 text-center mt-4">( Tap )</h4>
                    </div>
                </>
                }
                backContent={
                <>
                    <h3 className="text-lg font-semibold mb-2">Ejemplo</h3>
                    <p className="text-gray-700 text-sm">
                    Un plan de desarrollo de un nuevo producto requiere la cooperación entre el equipo de marketing, producción, finanzas y recursos humanos.
                    </p>
                </>
                }
                width="350px"
                height="250px"
                className="shadow-md"
            />

            <CardSwap
                frontContent={
                <>
                    <div className="flex flex-col h-full justify-between items-center">
                    <h3 className="text-lg font-semibold mb-2 text-center">Plazos y Responsabilidades</h3>
                    <p className="text-sm text-gray-700 text-center">
                        Para asegurar la efectividad, cada tarea debe tener plazos claros y responsables asignados.
                    </p>
                    <h4 className="text-sm text-gray-600 text-center mt-4">( Tap )</h4>
                    </div>
                </>
                }
                backContent={
                <>
                    <h3 className="text-lg font-semibold mb-2">Ejemplo</h3>
                    <p className="text-gray-700 text-sm">
                    Thompson & Strickland (1998) señalan que "la responsabilidad directa sobre cada tarea o actividad es clave para garantizar la ejecución exitosa".
                    </p>
                </>
                }
                width="350px"
                height="250px"
                className="shadow-md"
            />
            </div>
            </div>

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={' bottom-[90px] mr-[150px] z-[-2] justify-center flex-center'}
          >
            <img src={IMGPlan} className='w-[800px] '/>

          </AnimatedElement>
    
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
                
            <CardTitle  
            title="Monitoreo y Control de Estrategias"
            subtitle="Evaluación constante para asegurar el éxito estratégico"
            className="top-[-150px]  text-gray-800"
            />

            <AnimatedElement 
                type={'slide'}
                slideDirection={'bottom'}
                delay ={0}
                duration={1}
                className={' top-[320|px] z-[-2] justify-center flex-center'}
            >
            <img src={IMGMonitoring} className='w-[400px] '/>
            </AnimatedElement>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        
            <CardNote
            title="El Monitoreo y Control de Estrategias"
            content={
                'El monitoreo y control permite evaluar el progreso de la implementación, medir resultados ' +
                'y ajustar los planes cuando sea necesario. Un sistema de monitoreo efectivo utiliza ' +
                'indicadores clave de desempeño (KPIs) para medir el éxito en áreas críticas. Kaplan & ' +
                'Norton (1996) introdujeron el concepto de Balanced Scorecard, una herramienta que ' +
                'ayuda a monitorear el rendimiento en cuatro áreas principales: financiera, cliente, procesos ' +
                'internos y aprendizaje.'
            }
            author="Kaplan & Norton, 1996"
            width="1100px"
            height=""
            className="top-[20px] left-[100px] text-gray-800"
            />

            <div className="flex flex-col gap-[20px] mt-[30px]">
            <CardFoldHorizontal
                cards={[
                {
                    content: (
                    <>
                        <div className="flex flex-col justify-between h-full">
                        <h3 className="text-xl font-semibold mb-2 text-center">Indicadores Clave de Desempeño (KPIs)</h3>
                        <p className="text-gray-700 text-center">
                            Los KPIs permiten medir y monitorear el éxito de la implementación estratégica en áreas
                            críticas como finanzas, clientes, procesos internos y aprendizaje organizacional.
                        </p>
                        <div className="flex justify-center mt-4">
                            <h4 className="text-sm text-gray-600">( Tap )</h4>
                        </div>
                        </div>
                    </>
                    ),
                },
                {
                    content: (
                    <>
                        <h3 className="text-xl font-semibold mb-2">Indicadores Financieros</h3>
                        <p className="text-gray-700">
                        Los indicadores financieros, como el retorno sobre la inversión (ROI), el margen de
                        beneficio y el crecimiento de ingresos, son vitales para medir el éxito de la estrategia en
                        términos económicos. Estos indicadores muestran si la estrategia está generando valor para
                        los accionistas.
                        </p>
                    </>
                    ),
                },
                {
                    content: (
                    <>
                        <h3 className="text-xl font-semibold mb-2">Indicadores de Procesos Internos</h3>
                        <p className="text-gray-700">
                        Los indicadores de eficiencia operativa miden aspectos como la productividad, la calidad
                        de los productos o servicios, y la optimización de procesos. Según Kaplan y Norton (2001),
                        "los procesos internos deben alinearse con la estrategia para que la empresa logre sus metas
                        a largo plazo".
                        </p>
                    </>
                    ),
                },
                {
                    content: (
                    <>
                        <h3 className="text-xl font-semibold mb-2">Indicadores de Satisfacción del Cliente</h3>
                        <p className="text-gray-700">
                        La satisfacción del cliente es un indicador clave para medir si la empresa está cumpliendo
                        con las expectativas del mercado. Según Hill & Jones (2012), "un cliente satisfecho es el
                        mejor embajador de una empresa". Estos indicadores incluyen la tasa de retención de
                        clientes, el nivel de satisfacción y la cuota de mercado.
                        </p>
                    </>
                    ),
                },
                {
                    content: (
                    <>
                        <h3 className="text-xl font-semibold mb-2">Indicadores de Aprendizaje y Crecimiento</h3>
                        <p className="text-gray-700">
                        La capacidad de la organización para adaptarse, innovar y mejorar continuamente se mide a
                        través de indicadores de aprendizaje y crecimiento. Estos incluyen la capacitación del
                        personal, la introducción de nuevas tecnologías y el desarrollo de nuevas capacidades
                        organizacionales.
                        </p>
                    </>
                    ),
                },
                ]}
                width="300px"
                height="400px"
                className="top-[40px] ml-[170px] left-[50p1x] "
            />
            </div>

            <AnimatedElement 
                type={'slide'}
                slideDirection={'left'}
                delay ={0.5}
                duration={1}
                className={' top-[280px] left-[60px] z-[-2] justify-center flex-center'}
            >
            <img src={IMGKPI} className='w-[600px] '/>
            </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

            <AnimatedElement 
                type={'slide'}
                slideDirection={'bottom'}
                delay ={0}
                duration={0.8}
                className={'top-[20px] z-[-1]'}
            >
                <img src={IMGilustracion5} className='w-[900px]'/>
                <AnimatedText className={'text-sm text-center text-gray-700 mt-[20px]'} 
                text={'Ilustración 6 - Proceso de Implementación de Estrategias'} 
                type={'topToBottom'}
                delay = {1}
                duration = {0.8}
                />
            </AnimatedElement>  

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        
            <AnimatedElement
                type="slide"
                slideDirection="left"
                delay={0}
                duration={0.8}
                className="top-[20px] left-[150px] ml-[100px]"
            >
                <CardNote
                title="Flexibilidad en el Monitoreo y Control"
                content={
                    'La flexibilidad es crucial en el monitoreo y control de estrategias, ya que permite a las ' +
                    'organizaciones adaptarse a cambios en el entorno. Grant (2021) señala que "las ' +
                    'organizaciones que se adaptan rápidamente a las fluctuaciones del mercado tienen una ' +
                    'ventaja competitiva". El monitoreo constante permite a las empresas ajustar sus planes en ' +
                    'tiempo real, asegurando que sigan siendo relevantes y efectivos.'
                }
                author="Grant, 2021"
                width="800px"
                height=""
                className="bg-gray-50"
                />
            </AnimatedElement>

            <AnimatedElement
                type="slide"
                slideDirection="left"
                delay={0.5}
                duration={0.8}
                className="top-[300px] left-[150px]"
            >
                <CardNote
                title="Ejemplo: Caso de Estudio"
                content={
                    'Un ejemplo claro es la respuesta de muchas empresas a la crisis de COVID-19. La ' +
                    'capacidad de las organizaciones para ajustar rápidamente sus estrategias—como el cambio ' +
                    'a modelos de trabajo remoto, la aceleración de la digitalización y la adopción de nuevas ' +
                    'formas de interacción con clientes—fue clave para su supervivencia.'
                }
                width="400px"
                height="300px"
                className="bg-gray-50 "
                />
            </AnimatedElement>

            <AnimatedElement
                type="slide"
                slideDirection="left"
                delay={1}
                duration={0.8}
                className="top-[300px] left-[750px]"
            >
                <CardNote
                title="Conclusión"
                content={
                    'La implementación de estrategias es un proceso complejo que requiere una planificación ' +
                    'cuidadosa, asignación de recursos, ejecución efectiva y monitoreo continuo. Las ' +
                    'organizaciones que dominan este proceso están mejor posicionadas para alcanzar sus ' +
                    'objetivos y adaptarse a los cambios del entorno. Un enfoque en la eficiencia, coordinación ' +
                    'y monitoreo flexible asegura que las estrategias no solo se implementen con éxito, sino que ' +
                    'generen resultados sostenibles.'
                }
                width="500px"
                height="300px"
                className="bg-gray-50"
                />
            </AnimatedElement>

            <AnimatedElement 
                type={'slide'}
                slideDirection={'bottom'}
                delay ={1.5}
                duration={0.8}
                className={'top-[300px] left-[500px] z-[-1]'}
            >
                <img src={IMGcontrol} className='w-[300px]'/>
            </AnimatedElement>  

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <div className=' absolute top-[100px]'>
            <VideoPlayer videoUrl={'https://www.youtube.com/watch?v=dzh7faTkHCk'} title={'Indicadores KPI'}></VideoPlayer>
            </div>
        </div>

      </ScrollContent>
    </div>
  )
}

export default Four