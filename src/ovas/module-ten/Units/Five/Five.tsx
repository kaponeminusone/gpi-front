// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
//import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElements/AnimatedElements'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
//import FocusComponent from '../../../../components/FocusComponent/FocusComponent'
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { CardSwap } from '../../../../components/Cards/CardSwap'

import IMGcases from '../../../../assets/module-one/five/casos.png'
import IMGpera from '../../../../assets/module-one/five/perabite.webp'
import IMGtabla6_1 from '../../../../assets/module-one/five/tabla6_1.png'
import IMGtabla6_2 from '../../../../assets/module-one/five/tabla6_2.png'
import IMGtabla6_3 from '../../../../assets/module-one/five/tabla6_3.png'
import IMGtabla7_1 from '../../../../assets/module-one/five/tabla7_1.png'
import IMGtabla7_2 from '../../../../assets/module-one/five/tabla7_2.png'
import IMGbrain from '../../../../assets/module-one/five/brain.jpg'

//import { Grid2X2, TreeDeciduous, DollarSign } from 'lucide-react';
//import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'
import CaseStudyActivity from './Acivity'


function Five() {
  const sections = [
    '5.1 Análisis de Ejemplos Reales',
    '5.1.1 Importancia del Análisis de Casos de Estudio',
    ,
    '5.2 Implementación de Soluciones Innovadoras',
    '5.2.1 Definicion, procesos de Innovación y Estrategias',
    ,
    'Actividad',
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Casos de Estudio y Mejores Prácticasa'} 
          subtitle={'Unidad 5'} 
          chapter={'5'}
          prevRoute="/module-ten/four"
          nextRoute="/module-ten"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
          <CardTitle  
            title="Análisis de Ejemplos Reales"
            subtitle='Importancia y Ejemplos'
            className="top-[-220px] left-[0]"
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[240px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGcases} className='w-[250px]'/>

          </AnimatedElement>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

            <AnimatedElement
            type="slide"
            slideDirection="bottom"
            delay={0}
            duration={0.8}
            className="left-[100px] top-[50px]"
            >
            <CardNote
                title="Importancia del Análisis de Casos de Estudio"
                content={
                'El análisis de casos de estudio es una metodología efectiva para comprender cómo se han ' +
                'resuelto problemas específicos en un contexto real. Según Yin (2017), los casos de estudio ' +
                'proporcionan una perspectiva profunda y contextualizada que permite a los profesionales ' +
                'extraer lecciones valiosas aplicables a situaciones similares. Este enfoque permite a los ' +
                'estudiantes y profesionales analizar las decisiones tomadas, evaluar su efectividad y ' +
                'reflexionar sobre posibles alternativas.'
                }
                author="Yin, 2017"
                width="400px"
                height="500px"
                className="bg-[#d9d9d9a4]"
            />
            </AnimatedElement>

            <AnimatedElement
            type="slide"
            slideDirection="bottom"
            delay={0.5}
            duration={0.8}
            className="left-[550px] top-[50px]"
            >
            <CardNote
                content=""
                title="Ejemplos de Casos Reales"
                width="600px"
                height="70px"
                className="bg-[#d9d9d9a4]"
            />
            </AnimatedElement>

            <AnimatedElement
            type="slide"
            slideDirection="bottom"
            delay={1}
            duration={0.8}
            className="left-[550px] top-[140px]"
            >
            <CardNote
                title="Apple Inc. y la Innovación Continua"
                content={
                'Este caso ilustra cómo Apple ha mantenido su liderazgo en el mercado mediante una estrategia de ' +
                'innovación continua. Según Lazonick et al. (2013), la capacidad de Apple para reinventarse constantemente ' +
                'y lanzar productos disruptivos ha sido clave para su éxito sostenido.'
                }
                author="Lazonick et al., 2013"
                width="600px"
                height="250px"
                className=""
            />
            </AnimatedElement>

            <AnimatedElement
            type="slide"
            slideDirection="bottom"
            delay={1.5}
            duration={0.8}
            className="left-[550px] top-[400px]"
            >
            <CardNote
                title="Zara y la Gestión de la Cadena de Suministro"
                content={
                'Zara ha revolucionado la industria de la moda rápida mediante una gestión eficiente de su ' +
                'cadena de suministro. Según Ferdows et al. (2004), la capacidad de Zara para llevar productos ' +
                'desde el diseño hasta las tiendas en menos de dos semanas le ha permitido responder rápidamente ' +
                'a las tendencias del mercado.'
                }
                author="Ferdows et al., 2004"
                width="600px"
                height="250px"
                className=""
            />
            </AnimatedElement>

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'bottom-[-30px] left-[-50px] z-[-3] justify-center flex-center'}
          >
            <img src={IMGpera} className='w-[400px]'/>

          </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            
        <AnimatedElement 
            type={'slide'}
            slideDirection={'right'}
            delay ={0.5}
            duration={1}
            className={'left-[50px] top-[50px] z-[-1] justify-center flex-center'}
          >
            <div className='flex flex-row'>
            <div className='flex flex-col pb-[20px]'>

                <img src={IMGtabla6_1} className='w-[600px] h-[fit-content] mb-[20px]'/>
                    <AnimatedText className={'text-sm text-center text-gray-700'} 
                    text={ 'Tabla 6 - Comparativo: Estrategias de Apple y Zara'} 
                    type={'topToBottom'}
                    delay = {1}
                    duration = {0.8}
                    />
            </div>
              <div className='flex flex-col pb-[20px]'>
                <img src={IMGtabla6_2} className='w-[550px] h-[fit-content]'/>
                <img src={IMGtabla6_3} className='w-[550px] h-[fit-content]'/>
              </div>
            </div>

          </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <CardTitle  
            title="Implementación de Soluciones Innovadoras"
            subtitle='Definición, procesos y estrategias'
            className="top-[-220px] left-[0px]"
            />

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[240px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGcases} className='w-[250px]'/>

          </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
                
            <AnimatedElement
            type="slide"
            slideDirection="bottom"
            delay={0}
            duration={0.8}
            className="left-[100px] top-[50px]"
            >
            <CardNote
                title="Definición y Proceso de Innovación"
                content={
                'La innovación es el proceso de implementar nuevas ideas, productos o procesos para ' +
                'mejorar el desempeño organizacional. Drucker (2007) define la innovación como el ' +
                'esfuerzo deliberado y organizado de aplicar creatividad y conocimiento para generar ' +
                'nuevas soluciones que aporten valor.'
                }
                author="Drucker, 2007"
                width="1100px"
                height="190px"
                className=""
            />
            </AnimatedElement>

            <CardFoldHorizontal
                cards={[
                    {
                        content: (
                        <>
                            <h3 className="text-xl font-semibold mb-2">Estrategias para la Implementación de Soluciones Innovadoras</h3>
                            <p className="text-gray-700 text-sm">
                            La implementación de soluciones innovadoras requiere un enfoque estratégico y bien planificado.
                            </p>
                            <h4 className="text-sm text-gray-600 text-center mt-4">( Tap )</h4>
                        </>
                        ),
                    },
                {
                    content: (
                    <>
                        <h3 className="text-xl font-semibold mb-2">Prototipado y Pruebas</h3>
                        <p className="text-gray-700 text-sm">
                        Antes de lanzar una solución a gran escala, es fundamental desarrollar prototipos y realizar pruebas piloto.
                        Según Thomke (2003), el prototipado permite a las organizaciones experimentar y refinar sus ideas antes de
                        una implementación completa, reduciendo el riesgo de fracaso.
                        </p>
                    </>
                    ),
                },
                {
                    content: (
                    <>
                        <h3 className="text-xl font-semibold mb-2">Adopción de Tecnología</h3>
                        <p className="text-gray-700 text-sm">
                        La tecnología juega un papel crucial en la innovación. Las empresas que adoptan nuevas tecnologías de manera
                        efectiva pueden ganar una ventaja competitiva significativa. Brynjolfsson & McAfee (2014) afirman que la
                        tecnología no solo mejora la eficiencia operativa, sino que también permite la creación de nuevos modelos de negocio.
                        </p>
                    </>
                    ),
                },
                {
                    content: (
                    <>
                        <h3 className="text-xl font-semibold mb-2">Cultura de Innovación</h3>
                        <p className="text-gray-700 text-sm">
                        Fomentar una cultura organizacional que valore la creatividad y la experimentación es esencial para la innovación.
                        Schein (2010) sugiere que una cultura de innovación se construye mediante el apoyo a la iniciativa individual, 
                        la colaboración y la tolerancia al fracaso.
                        </p>
                    </>
                    ),
                },
                ]}
                width="300px"
                height="350px"
                className="left-[50px] top-[50px]"
            />

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            
            <AnimatedElement 
                type={'slide'}
                slideDirection={'right'}
                delay ={0.5}
                duration={1}
                className={'left-[50px] top-[100px] z-[-1] justify-center flex-center'}
            >
                <div className='flex flex-row'>
                    <img src={IMGtabla7_1} className='w-[600px] h-[fit-content] mb-[20px]'/>
                    <img src={IMGtabla7_2} className='w-[600px] h-[fit-content]'/>  
                </div>
                <AnimatedText className={'text-sm text-center text-gray-700'} 
                        text={ 'Tabla 7 - Ciclo de Innovación: Etapas Clave'} 
                        type={'topToBottom'}
                        delay = {1}
                        duration = {0.8}
                        />

            </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <div className='absolute top-[50px]'>
                <CaseStudyActivity
                    width='800px'
                    height=''
                ></CaseStudyActivity>
            </div>
            <AnimatedElement 
                type={'slide'}
                slideDirection={'right'}
                delay ={0}
                duration={0.5}
                className={'left-[0px] top-[100px] z-[-1] justify-center flex-center'}
            >
                <img src={IMGbrain} className='w-[500px] h-[fit-content] mb-[20px]'/>
            </AnimatedElement>
        </div>

      </ScrollContent>
    </div>
  )
}

export default Five