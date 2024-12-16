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

import IMGFormulacion from '../../../../assets/module-two/three/formulacion.png'
import IMGFormulacion2 from '../../../../assets/module-two/three/formulacion2.jfif'
import IMGDesarrollo from '../../../../assets/module-two/three/desarollo.png'
import IMGObjetivos from '../../../../assets/module-two/three/objetivos.webp'
import IMGObjetivos2 from '../../../../assets/module-two/three/objetivos3.png'
import IMGObjetivos3 from '../../../../assets/module-two/three/objetivos2.jpg'
import IMGestrategia from '../../../../assets/module-two/three/estrategico.jpg'
import IMGPlanes from '../../../../assets/module-two/three/planes.png'
import IMGAcciones from '../../../../assets/module-two/three/accion.jpg'
import IMGBackground from '../../../../assets/module-two/three/backgroud.png'
import IMGIlustracion5 from '../../../../assets/module-two/three/ilustracion5.png'
import IMGUnion from '../../../../assets/module-two/three/union.png'
import IMGTruefalse from '../../../../assets/module-two/three/trufalse.png'


import { Grid2X2, TreeDeciduous, DollarSign } from 'lucide-react';
import Quiz from './Quiz'

function Three() {
  const sections = [
    '3. Formulación de Estrategias',,
    '3.1 Desarrollo de Objetivos Estratégicos (Ampliación)',,
    '3.1.1 Importancia de los Objetivos Estrategicos',,
    '3.2 Creación de Planes de Acción',,
    '3.2.1 Proceso y Estructura de un Plan de Acción',,
    '3.3 La Importancia de la Flexibilidad en los Planes de Acción',
    'Quiz'
  ];
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Formulación de Estrategias'} 
          subtitle={'Unidad 3'} 
          chapter={'3'}
          prevRoute="/module-two/two"
          nextRoute="/module-two/four"
          />
          
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
            title="Formulación de Estrategias"
            subtitle='Desarrollo de objetivos, Creación de planes (Ampliado)'
            className="top-[-200px] "
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'left-[50% - 500px] top-[250px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGFormulacion} className='w-[500px]'/>

          </AnimatedElement>

        </div>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

        <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={0}
            duration={1}
            className={'top-[50px] left-[100px] z-[1] justify-center flex-center'}
          >
          <CardNote
            title="Formulación de Estrategias"
            content={
              'La formulación de estrategias es una de las fases más críticas dentro de la gestión estratégica, ' +
              'ya que define el rumbo que seguirá la organización y cómo alcanzará sus metas. Este proceso involucra ' +
              'la creación de objetivos estratégicos que alinean a toda la organización y la creación de planes de acción, ' +
              'que desglosan dichos objetivos en actividades específicas. Esta fase traduce la visión y misión de la empresa ' +
              'en acciones prácticas y coherentes que permiten obtener ventajas competitivas sostenibles.'
            }
            width="600px"
            height="300px"
            className=" bg-[#d9d9d9a4]"
          />
          </AnimatedElement>
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'right-[0px] bottom-[-200px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGFormulacion2} className='w-[1200px]'/>

          </AnimatedElement>

        </div>

        
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardTitle
            title="Desarrollo de Objetivos Estratégicos"
            subtitle="Ampliación"
            className="top-[-150px] "
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[300px] z-[-1] justify-center flex-center'}
            >
            <img src={IMGDesarrollo} className='w-[300px]'/>

          </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardNote
          title="Objetivos Estratégicos"
          content={
            'Los objetivos estratégicos son fundamentales para el éxito de cualquier organización, ya ' +
            'que proporcionan un marco para tomar decisiones y guiar el comportamiento organizacional. ' +
            'Estos objetivos deben estar alineados con la misión y visión de la organización y ser comunicados ' +
            'a todos los niveles para asegurar su coherencia y comprensión.'
          }
          width="400px"
          height="300px"
          className="top-[150px] bg-[#ffff]"
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[200px] mr-[700px] z-[-1] justify-center flex-center'}
            >
            <img src={IMGObjetivos} className='w-[800px]'/>

          </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        
          <div className='absolute flex items-center justify-center'>

            <CardFoldHorizontal
            cards={[
              {
                content: (
                  <>
                    <div className="flex flex-col items-center justify-center h-full">
                      <h3 className="text-2xl font-bold mb-4 text-center">Importancia de los Objetivos Estratégicos</h3>
                      <p className="text-gray-700 text-sm text-center">
                        Los objetivos estratégicos proporcionan dirección y propósito a largo plazo, asegurando
                        que todas las áreas de la organización trabajen hacia metas comunes y adaptables.
                      </p>
                      <div className="flex flex-col justify-center items-center mt-4">
                        <h4 className="text-sm text-gray-600 text-center">( Tap )</h4>
                      </div>
                    </div>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Relevancia de los Objetivos Estratégicos en la Planificación</h3>
                    <p className="text-gray-700 text-sm">
                      Los objetivos estratégicos definen la dirección y el propósito de la organización a largo plazo. Según Grant (2021), 
                      una organización sin objetivos claros puede enfrentarse a problemas de cohesión y dirección, lo que puede derivar en pérdida de competitividad.
                    </p>
                    <p className="text-gray-700 text-sm mt-2">
                      • <b>Coherencia estratégica:</b> Los objetivos estratégicos aseguran que todas las acciones dentro de la organización estén alineadas con una meta común, eliminando esfuerzos redundantes y asegurando una mayor eficiencia (Porter, 1985).<br/>
                      • <b>Adaptabilidad:</b> Si bien los objetivos estratégicos definen un rumbo claro, también deben permitir cierto grado de flexibilidad. Esto es esencial en entornos volátiles y cambiantes, como lo señala Johnson et al. (2009).
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Ejemplos de Objetivos Estratégicos (Ampliación)</h3>
                    <p className="text-gray-700 text-sm">
                      1. <b>Objetivos financieros:</b> Incrementar las utilidades operativas en un 12% en los próximos tres años, mejorando la eficiencia en la cadena de suministro y reduciendo los costos indirectos en un 5% anual (Thompson & Strickland, 1998).<br/>
                      2. <b>Objetivos de sostenibilidad:</b> Reducir el consumo de energía en las operaciones en un 25% en los próximos cinco años mediante la inversión en tecnología más eficiente y renovable (Kaplan & Norton, 2014).<br/>
                      3. <b>Objetivos de recursos humanos:</b> Mejorar la retención de empleados en un 15% mediante la implementación de programas de desarrollo profesional y bienestar organizacional.<br/>
                      4. <b>Objetivos de innovación:</b> Aumentar el desarrollo de nuevos productos en un 20% en los próximos tres años, destinando el 15% de los ingresos anuales a I+D (Porter, 1985).
                    </p>
                  </>
                ),
              },
            ]}
            width="400px"
            height="500px"
            className=" top-[-100px] ml-[0px]"
          />

          </div>
        
          <AnimatedElement 
            type={'slide'}
            slideDirection={'right'}
            delay ={0}
            duration={1.5}
            className={'bottom-[-60px] right-[0px] z-[-1] justify-center flex-center'}
            >
            <img src={IMGestrategia} className='w-[1200px]'/>

          </AnimatedElement>

        </div>


        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardNote
            title="Características de los Objetivos Estratégicos SMART"
            content=""
            width="600px"
            height="80px"
            className="top-[50px] bg-[#d9d9d9a4]"
          />

          <div className="grid grid-cols-3 gap-6">
            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">Específico</h3>
                  <h4 className="text-sm text-gray-500 mt-2">( Tap )</h4>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Definición Clara</h3>
                  <p className="text-sm text-gray-700">
                    Un objetivo específico define claramente qué se quiere lograr sin ambigüedades.
                  </p>
                </div>
              }
              width="200px"
              height="200px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">Medible</h3>
                  <h4 className="text-sm text-gray-500 mt-2">( Tap )</h4>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Indicadores Claros</h3>
                  <p className="text-sm text-gray-700">
                    Un objetivo debe ser cuantificable a través de indicadores precisos y concretos.
                  </p>
                </div>
              }
              width="200px"
              height="200px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">Alcanzable</h3>
                  <h4 className="text-sm text-gray-500 mt-2">( Tap )</h4>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Realista y Factible</h3>
                  <p className="text-sm text-gray-700">
                    El objetivo debe ser realista y alcanzable con los recursos disponibles.
                  </p>
                </div>
              }
              width="200px"
              height="200px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">Relevante</h3>
                  <h4 className="text-sm text-gray-500 mt-2">( Tap )</h4>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Alineado</h3>
                  <p className="text-sm text-gray-700">
                    El objetivo debe ser relevante y alinearse con los valores y metas estratégicas.
                  </p>
                </div>
              }
              width="200px"
              height="200px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">Tiempo</h3>
                  <h4 className="text-sm text-gray-500 mt-2">( Tap )</h4>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Definido y Urgente</h3>
                  <p className="text-sm text-gray-700">
                    Los objetivos deben tener un tiempo límite definido para su consecución.
                  </p>
                </div>
              }
              width="200px"
              height="200px"
              className="shadow-lg rounded-lg"
            />
          </div>

          <AnimatedElement 
            type={'slide'}
            slideDirection={'right'}
            delay ={0}
            duration={1.5}
            className={'bottom-[-50px] right-[-100px] z-[-1] justify-center flex-center'}
            >
            <img src={IMGObjetivos2} className='w-[800px]'/>

          </AnimatedElement>

          <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={0}
            duration={1.5}
            className={'top-[-50px] left-[-200px] z-[-1] justify-center flex-center'}
            >
            <img src={IMGObjetivos3} className='w-[800px]'/>

          </AnimatedElement>


        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardTitle 
            title="Creación de Planes de Acción" 
            subtitle='Proceso y Estructura'
            className="top-[-150px]" 
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={0.8}
            className={'top-[320px] z-[-1] justify-center flex-center'}
            >
            <img src={IMGPlanes} className='w-[200px]'/>
          </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardNote
            title="¿Qué es un Plan de Acción?"
            content={
              'Un plan de acción es un conjunto de pasos detallados y medibles que una organización ' +
              'sigue para lograr sus objetivos estratégicos. Un buen plan de acción proporciona una guía ' +
              'clara para cada equipo o departamento y asegura que todos los recursos necesarios estén ' +
              'disponibles para cumplir con los plazos establecidos.'
            }
            width="600px"
            height="200px"
            className="top-[100px]"
          />
            
          <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={0.8}
              className={'top-[320px] z-[-1] justify-center flex-center'}
              >
              <img src={IMGAcciones} className='w-[700px]'/>
            </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardNote
          title="Proceso Detallado para la Creación de un Plan de Acción"
          content=""
          width="1100px"
          height="70px"
          className="top-[20px] left-[100px] bg-[#d9d9d9a4]"
          />

        <CardNote
            title="Estructura de un Plan de Acción Eficaz"
            content=""
            width="200px"
            height="130px"
            className="top-[500px] left-[100px] bg-[#d9d9d9a4]"
          />

          <div className="absolute flex flex-row w-full top-[100px] left-[110px] gap-[20px]">
            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">1. Desglose Detallado</h3>
                  <p className="text-sm text-gray-500 mt-2">( Tap )</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Tareas Específicas</h3>
                  <p className="text-sm text-gray-700">
                    Cada objetivo debe desglosarse en tareas específicas para facilitar su asignación y ejecución.
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <b>Ejemplo:</b> Investigación de mercados, acuerdos de distribución y contratación local.
                  </p>
                </div>
              }
              width="200px"
              height="320px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">2. Asignación de Responsabilidades</h3>
                  <p className="text-sm text-gray-500 mt-2">( Tap )</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Responsables y Cronogramas</h3>
                  <p className="text-sm text-gray-700">
                    Cada tarea debe asignarse a responsables con fechas claras para su cumplimiento.
                  </p>
                </div>
              }
              width="200px"
              height="320px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">3. Recursos Específicos</h3>
                  <p className="text-sm text-gray-500 mt-2">( Tap )</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Asignación de Recursos</h3>
                  <p className="text-sm text-gray-700">
                    Asegurar la disponibilidad de presupuestos, personal y tecnología necesarios.
                  </p>
                </div>
              }
              width="200px"
              height="320px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">4. Definición de Plazos</h3>
                  <p className="text-sm text-gray-500 mt-2">( Tap )</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Hitos y Fechas</h3>
                  <p className="text-sm text-gray-700">
                    Establecer plazos específicos e hitos para medir el progreso del plan de acción.
                  </p>
                </div>
              }
              width="200px"
              height="320px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">5. Monitoreo Continuo</h3>
                  <p className="text-sm text-gray-500 mt-2">( Tap )</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Evaluación y Ajustes</h3>
                  <p className="text-sm text-gray-700">
                    Contar con un sistema para medir indicadores de desempeño y realizar ajustes si es necesario.
                  </p>
                </div>
              }
              width="200px"
              height="320px"
              className="shadow-lg rounded-lg"
            />

          </div>

          
          <div className="absolute flex flex-row  top-[460px] left-[350px] gap-[10px]">
            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">1. Descripción de Tareas</h3>
                  <p className="text-sm text-gray-500 mt-2">( Tap )</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Claridad en las Tareas</h3>
                  <p className="text-sm text-gray-700">
                    Cada tarea debe estar claramente definida para evitar ambigüedades.
                  </p>
                </div>
              }
              width="200px"
              height="200px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">2. Recursos Asignados</h3>
                  <p className="text-sm text-gray-500 mt-2">( Tap )</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Especificación de Recursos</h3>
                  <p className="text-sm text-gray-700">
                    Detallar el presupuesto, personal y tecnología asignados para cada tarea.
                  </p>
                </div>
              }
              width="200px"
              height="200px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">3. Plazos e Hitos</h3>
                  <p className="text-sm text-gray-500 mt-2">( Tap )</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Fechas y Progreso</h3>
                  <p className="text-sm text-gray-700">
                    Cada tarea debe tener plazos definidos e hitos para evaluar el progreso.
                  </p>
                </div>
              }
              width="200px"
              height="200px"
              className="shadow-lg rounded-lg"
            />

            <CardSwap
              frontContent={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-lg font-bold text-center">4. Monitoreo y Control</h3>
                  <p className="text-sm text-gray-500 mt-2">( Tap )</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Indicadores Clave</h3>
                  <p className="text-sm text-gray-700">
                    Definir KPIs para medir el progreso financiero, operativo o de satisfacción del cliente.
                  </p>
                </div>
              }
              width="200px"
              height="200px"
              className="shadow-lg rounded-lg"
            />
          </div>

          <AnimatedElement 
              type={'slide'}
              slideDirection={'left'}
              delay ={0}
              duration={0.8}
              className={'left-[0px] z-[-1] justify-center flex-center'}
              >
              <img src={IMGBackground} className='w-[600px]'/>
            </AnimatedElement>
          
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

        <AnimatedElement 
              type={'slide'}
              slideDirection={'left'}
              delay ={0}
              duration={0.8}
              className={'top-[70px] z-[-1] justify-center flex-center'}
              >
              <img src={IMGIlustracion5} className='w-[800px]'/>
              <AnimatedText className={'text-sm text-center text-gray-700'} 
              text={'Ilustración 5 - Estructura de un Plan de Acción Completo'} 
              type={'topToBottom'}
              delay = {1}
              duration = {0.8}
              />
          </AnimatedElement>
          
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

         
            <CardNote
              title="La Importancia de la Flexibilidad en los Planes de Acción"
              content={
                'Un aspecto crítico en la creación de planes de acción es la capacidad de adaptarse a ' +
                'circunstancias imprevistas. Como indica Mintzberg et al. (2005), el entorno empresarial ' +
                'puede ser altamente volátil y los cambios rápidos en el mercado, la tecnología o la ' +
                'regulación pueden requerir ajustes en los planes de acción. La adaptabilidad es esencial ' +
                'para evitar que los planes queden obsoletos.'
              }
              author="Mintzberg et al., 2005"
              width="1100px"
              height="200px"
              className="top-[50px] left-[100px] bg-[#f8f8f8] shadow-lg rounded-lg"
            />

              <AnimatedElement
                type="slide"
                slideDirection="left"
                delay={0.3}
                duration={0.8}
                className="top-[300px] left-[100px]"
              >
                <CardNote
                  title="Ajustes en Tiempo Real"
                  content={
                    'Las organizaciones exitosas implementan sistemas de monitoreo que permiten realizar ' +
                    'ajustes en tiempo real. Por ejemplo, una estrategia que inicialmente parecía acertada ' +
                    'puede volverse irrelevante si las condiciones del mercado cambian.'
                  }
                  author=""
                  width="500px"
                  height="250px"
                  className=""
                />
              </AnimatedElement>

              <AnimatedElement
                type="slide"
                slideDirection="right"
                delay={0.5}
                duration={0.8}
                className="top-[300px] left-[700px]"
              >
                <CardNote
                  title="Aprendizaje Organizacional"
                  content={
                    'Los planes de acción no deben verse como rígidos; las organizaciones deben aprender ' +
                    'de su ejecución, lo que les permitirá ajustar estrategias futuras para ser más eficaces.'
                  }
                  author="Grant, 2021"
                  width="500px"
                  height="250px"
                  className=""
                />
              </AnimatedElement>

              <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={0.8}
              className={' top-[340px] left-[570px] z-[-1] justify-center flex-center'}
              >
              <img src={IMGUnion} className='w-[150px] '/>
    
          </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <Quiz></Quiz>
          <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={0.8}
              className={' top-[-10px] z-[-1] justify-center flex-center'}
              >
              <img src={IMGTruefalse} className='w-[300px] '/>
    
          </AnimatedElement>
        </div>

      </ScrollContent>
    </div>
  )
}

export default Three