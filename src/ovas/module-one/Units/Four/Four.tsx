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
import IMGcomuni2 from '../../../../assets/module-one/four/comunicacion2.png'
import IMGtabla5_1 from '../../../../assets/module-one/four/tabla5_1.png'
import IMGtabla5_2 from '../../../../assets/module-one/four/tabla5_2.png'
import IMGtransmitir from '../../../../assets/module-one/four/transmitir.jpg'
import IMGpublic from '../../../../assets/module-one/four/publico.jpg'
import IMGTrur from '../../../../assets/module-one/four/truefalse.png'

import { Grid2X2, TreeDeciduous, DollarSign } from 'lucide-react';
import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'
import Quiz from './Quiz'


function Four() {
  const sections = [
    '4.1 Principios de la Comunicación Empresarial',
    '4.1.1 Concepto, relevancia y principios clave',
    ,
    '4.2 Técnicas de Presentación y Negociación',
    '4.2.1 Técnicas de presentación efectiva y negociación',
    'Quiz',
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Comunicación Efectiva'} 
          subtitle={'Unidad 4'} 
          chapter={'4'}
          prevRoute="/module-one/three"
          nextRoute="/module-one/five"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
          <CardTitle  
            title="Principios de la Comunicación Empresarial"
            subtitle='Conceptos, relevancia y principios clave'
            className="top-[-200px] left-[0]"
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'left-[50% - 500px] top-[180px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGcomuni} className='w-[500px]'/>

          </AnimatedElement>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        
        <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={0}
            duration={0.5}
            className={'top-[40px] left-[100px] z-[-1] justify-center flex-center'}
          >
        <CardNote
          title="Concepto y relevancia de la comunicación empresarial"
          content={
            'La comunicación empresarial se refiere al intercambio de información entre las distintas ' +
            'partes de una organización, y entre la organización y sus públicos externos, con el fin de ' +
            'alcanzar objetivos empresariales. Según Argenti (2015), la comunicación empresarial es ' +
            'fundamental para el éxito organizacional, ya que facilita la coordinación de actividades, la ' +
            'toma de decisiones informadas y la construcción de relaciones con las partes interesadas.'
          }
          author="Argenti, 2015"
          width="1000px"
          height="220px"
          className=" bg-[#d9d9d9a4]"
        />
        </AnimatedElement>

        <CardFoldHorizontal
          cards={[
            {
              content: (
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <h3 className="text-2xl font-semibold mb-2 text-center">Principios clave de la comunicación empresarial</h3>
                    <p className="text-gray-700 text-sm text-center">
                      Para que la comunicación en una organización sea efectiva, debe basarse en ciertos
                      principios fundamentales.
                    </p>
                    <h4 className="text-sm text-gray-600 text-center mt-4">( Tap )</h4>
                  </div>
                </>
              ),
            },
            {
              content: (
                <>
                  <h3 className="text-xl font-semibold mb-2">Claridad</h3>
                  <p className="text-gray-700 text-sm">
                    La claridad implica que el mensaje debe ser simple, directo y fácil de entender.
                    Según Robbins et al. (2019), una comunicación clara reduce la probabilidad de malentendidos y asegura que
                    todos los receptores interpreten el mensaje de la misma manera.
                  </p>
                </>
              ),
            },
            {
              content: (
                <>
                  <h3 className="text-xl font-semibold mb-2">Consistencia</h3>
                  <p className="text-gray-700 text-sm">
                    La comunicación debe ser coherente en todos los canales y alineada con los valores y objetivos de la organización.
                    El principio de consistencia garantiza que "los mensajes enviados a través de diferentes medios no se contradigan,
                    lo que fortalece la credibilidad organizacional (Cornelissen, 2017).
                  </p>
                </>
              ),
            },
            {
              content: (
                <>
                  <h3 className="text-xl font-semibold mb-2">Asertividad</h3>
                  <p className="text-gray-700 text-sm">
                    Según Whetten & Cameron (2015), la asertividad en la comunicación empresarial implica expresar ideas y
                    sentimientos de manera directa, honesta y respetuosa, sin imponer ni ceder innecesariamente.
                  </p>
                </>
              ),
            },
            {
              content: (
                <>
                  <h3 className="text-xl font-semibold mb-2">Feedback (Retroalimentación)</h3>
                  <p className="text-gray-700 text-sm">
                    La retroalimentación es esencial para asegurar que el mensaje haya sido recibido e interpretado correctamente.
                    D. Katz & Kahn (2004) afirman que el feedback en la comunicación empresarial es vital para ajustar y mejorar la
                    eficacia del mensaje.
                  </p>
                </>
              ),
            },
          ]}
          width="300px"
          height="300px"
          className="top-[50px] left-[100px]"
        />


          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0.5}
            duration={0.5}
            className={'left-[100px] top-[300px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGcomuni2} className='w-[500px]'/>

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
            <div className='flex flex-row pb-[20px]'>
              <img src={IMGtabla5_1} className='w-[600px] h-[fit-content]'/>
              <img src={IMGtabla5_2} className='w-[600px] h-[fit-content]'/>
            </div>

            <AnimatedText className={'text-sm text-center text-gray-700'} 
            text={ 'Tabla 5 - Principios Clave de la Comunicación Empresarial'} 
            type={'topToBottom'}
            delay = {1}
            duration = {0.8}
            />

          </AnimatedElement>

          

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
              title="Técnicas de Presentación y Negociación"
              subtitle='Tecnicas negociación y presentación'
              className="top-[-200px] left-[0]"
            />

            <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={1}
              className={'left-[50% - 500px] top-[180px] z-[-1] justify-center flex-center'}
            >
              <img src={IMGtransmitir} className='w-[500px]'/>
            </AnimatedElement>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
         
          <CardNote
            title="Técnicas de presentación efectiva"
            content={
              'Las presentaciones son una herramienta esencial para transmitir información, persuadir ' +
              'audiencias y facilitar la toma de decisiones. Las técnicas efectivas para realizar ' +
              'presentaciones incluyen:'
            }
            width="500px"
            height="200px"
            className="top-[40px] left-[150px]"
          />

          <CardNote
            title="Técnicas de negociación"
            content={
              'La negociación es un proceso de comunicación en el que dos o más partes intentan llegar a ' +
              'un acuerdo que satisfaga sus intereses. Las técnicas clave en la negociación incluyen:'
            }
            width="500px"
            height="200px"
            className="top-[40px] left-[700px] z-[-2]"
          />

          <div className='absolute'>
            <CardFoldChained
            cards={[
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Conocimiento del Público</h3>
                    <p className="text-gray-700 text-sm">
                      Conocer las necesidades, intereses y expectativas del público es crucial para adaptar el contenido y el tono
                      de la presentación. Según Duarte (2012), una presentación exitosa se basa en la capacidad del presentador
                      para conectar con su audiencia y abordar sus preocupaciones.
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Estructura Clara</h3>
                    <p className="text-gray-700 text-sm">
                      Una presentación debe tener una estructura clara, con una introducción que capte la atención, un cuerpo que
                      desarrolle los puntos clave, y una conclusión que refuerce el mensaje principal. Anderson (2016) sugiere que
                      una estructura clara y lógica facilita la comprensión y retención del mensaje por parte de la audiencia.
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Uso de Apoyos Visuales</h3>
                    <p className="text-gray-700 text-sm">
                      El uso de gráficos, diagramas, y otras ayudas visuales puede mejorar la comprensión y el impacto del mensaje.
                      Reynolds (2019) afirma que los apoyos visuales efectivos no solo embellecen una presentación, sino que también
                      ayudan a enfatizar puntos clave y mantener el interés de la audiencia.
                    </p>
                  </>
                ),
              },
            ]}
            width="400px"
            height="200px"
            className="top-[0] left-[-300px]"
          />
          </div>

          <div className='absolute'>
            <CardFoldChained
              cards={[
                {
                  content: (
                    <>
                      <h3 className="text-xl font-semibold mb-2">Preparación y Planeación</h3>
                      <p className="text-gray-700 text-sm">
                        La preparación es esencial para el éxito en la negociación. Fisher et al. (2018) sugieren que una preparación
                        adecuada implica conocer los intereses propios y los de la otra parte, establecer objetivos claros y estar
                        preparado para manejar objeciones.
                      </p>
                    </>
                  ),
                },
                {
                  content: (
                    <>
                      <h3 className="text-xl font-semibold mb-2">Escucha Activa</h3>
                      <p className="text-gray-700 text-sm">
                        La escucha activa es fundamental para entender las necesidades y preocupaciones de la otra parte. Según Rogers
                        & Farson (2021), la escucha activa no solo implica escuchar lo que se dice, sino también captar las emociones
                        y actitudes subyacentes.
                      </p>
                    </>
                  ),
                },
                {
                  content: (
                    <>
                      <h3 className="text-xl font-semibold mb-2">Flexibilidad y Compromiso</h3>
                      <p className="text-gray-700 text-sm">
                        La flexibilidad es clave para encontrar soluciones que sean mutuamente beneficiosas. Bazerman & Neale (1993)
                        señalan que los negociadores exitosos están dispuestos a hacer concesiones estratégicas y buscar compromisos
                        que satisfagan a ambas partes.
                      </p>
                    </>
                  ),
                },
              ]}
              width="400px"
              height="200px"
              className="top-[0px] left-[250px]"
            />
          </div>
          
          
          <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={1}
              className={'bottom-[0px] z-[-3]'}
            >
              <div className='flex flex-row gap-[0px]'>
                <img src={IMGpublic} className='w-[500px]'/>
                <img src={IMGpublic} className='w-[500px]'/>
                <img src={IMGpublic} className='w-[500px]'/>
                <img src={IMGpublic} className='w-[500px]'/>
              </div>
            </AnimatedElement>

        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
              <Quiz/>
              
              <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={1}
              className={'top-[-10px] mr-[600px] z-[-3]'}
            >
                <img src={IMGTrur} className='w-[600px]'/>
            </AnimatedElement>
        </div>

      </ScrollContent>
    </div>
  )
}

export default Four