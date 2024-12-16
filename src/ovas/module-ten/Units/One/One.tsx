// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'

import IMGBox from '../../../../assets/module-ten/one/definiciones.png'
import IMGCon from '../../../../assets/module-ten/one/CON-2.png'
import IMGImp from '../../../../assets/module-ten/one/importance.jpg'
import IMGTable from '../../../../assets/module-ten/one/table1.png'
import ICON1 from '../../../../assets/module-ten/one/icon1.png'
import ICON2 from '../../../../assets/module-ten/one/icon2.png'
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { CardSwap } from '../../../../components/Cards/CardSwap'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'


function One() {
  const sections = ['1. Conceptos y definiciones',
                    ' 1.1. Fundamentos',
                    '2. Importancia de la ética y la responsabilidad social en los negocios', 
                    '   2.1. Conceptos claves'
                  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Introducción a la Ética Empresarial y Responsabilidad Social'} 
          subtitle={'Unidad 1'} 
          chapter={'1'}
          prevRoute="/module-ten"
          nextRoute="/module-ten/two" //sin definir luego cambiarla
          />
      </div>
      <ScrollContent sections={sections}>
        
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
            title="Conceptos y definiciones"
            subtitle='Ética y Responsabilidad Empresarial'
            className="top-[-150px] left-[0]"
          />
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[300px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGBox} className='w-[300px]'/>

          </AnimatedElement>

        </div>
        
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[500px] top-[180px] z-[-1]'}
        > 
        <img src={IMGCon} className='w-[450px]'/> 
        </AnimatedElement>
        
        <CardNote 
            content={'La ética empresarial se centra en los principios ' +
              'que guían el comportamiento de las empresas y sus empleados. ' +
              'Es fundamental para la toma de decisiones responsables y para' +
              'mantener una reputación positiva en el mercado y aborda multiples aspectos' +
              'como justicia, equidad y respeto.'}
            author='Crane & Matten, 2016.'
            width='400px'
            height='250px'  
           className='top-[40px] left-[80px] bg-[#d9d9d9a4]'
          />

        <CardNote 
            content={'La Responsabilidad Social Empresarial (RSE) implica que las empresas ' +
              'deben ir más allá de la simple generación de ganancias, ' +
              'cumpliendo asi con sus responsabilidades con la sociedad y el edio ambiente. ' +
              'Según el Informe sobre Responsabilidad Social Corporativa de la Comisión Europea (2011) ' +
              'su responsabilidades se expanden más allá del aspecto legal.'}
            width='400px'
            height='250px'  
           className='top-[350px] left-[80px] bg-[#d9d9d9a4]'
          />

            <AnimatedElement 
              type={'popup'}
              slideDirection={'bottom'}
              delay ={4}
              duration={2}
              className={'top-[40px] left-[770px] z-[13]'}
              >
              <CardSelection
                question=" ¿La ética empresarial se centra en los principios morales que guían las decisiones de una empresa? "
                options={[
                  {
                    label: "Sí",
                    content: "¡Excelente! En efecto la etica es la brujula moral que orienta las acciones de una organización.",
                  },
                  {
                    label: "No",
                    content: "Te invitamos a explorar más sobre cómo repercude la etica en las organizaciones y expandas tus conocimientos.",
                  },
                ]}
                width={'500px'}
                height={'180px'}
                className='absolute'
              />
            </AnimatedElement>

        </div>

        {/* Importancia de la ética y la responsabilidad social en los negocios */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <CardNote
            title="Ética y RSE: La clave para un negocio rentable y sostenible."
            content={'La ética y la Responsabilidad Social Empresarial (RSE) son pilares f' +
              'undamentales para el éxito a largo plazo de las empresas, ya que fortalecen la' +
              'reputación, atraen a talentos comprometidos, fomentan a lealtad de los clientes y ' +
              'el crecimiento sostenible.'}
            width='999px'
            height='150px'  
           className='top-[40px] left-[150px] bg-[#d9d9d9a4]'
          />
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[250px] left-[25px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGImp} className='w-[500px]'/>

          </AnimatedElement>

          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={ICON2} className=' w-[70px]'/> 
                  <h3 className="text-2xl mb-2 text-center">Obligación moral</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Obligación moral</h3>
                  <p className="text-gray-700">
                  Adoptar prácticas responsables no solo es lo correcto desde 
                  un punto de vista ético, sino que también representa una
                  combinación ganadora en el mundo de los negocios. 
                  </p>
              </>
            )}
            width='300px'
            height='250px'  
           className='absolute left-[300px] top-[150px]'
          />

          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={ICON1} className=' w-[70px] '/> 
                  <h3 className="text-2xl mb-2 text-center">Etica Paga</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">La ética paga.</h3>
                  <p className="text-gray-700">
                  las prácticas éticas y de RSE están positivamente
                  relacionadas con el desempeño financiero de las empresas, 
                  la satisfacción de los empleados y la lealtad de los clientes.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Aguinis & Glavas, 2012'}</p>
                  </p>
              </>
            )}
            width='300px'
            height='250px'  
           className='absolute left-[-20px] top-[-100px]'
          />

        </div>

        {/* Conceptos claves */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[500px] top-[70px] z-[-1]'}
        > 
        <img src={IMGTable} className='w-[600px]'/> 
        <AnimatedText 
            className={'text-sm text-center text-gray-700'} 
            text={'Ilustración 1 - Conceptos Clave en Ética Empresarial y Responsabilidad Social'} 
            type={'topToBottom'}
            delay = {1.5}
            duration = {1}
            />
        </AnimatedElement>

                    
        <CardNote 
            title='Conceptos Clave en Ética Empresarial y Responsabilidad Social'
            content={'Cada decisión empresarial tiene un impacto. ' +
              'Esta imagen ilustra cómo la ética guía a las organizaciones  ' +
              'hacia un enfoque más responsable y sostenible ' }
            width='400px'
            height=''  
           className='top-[60px] left-[80px] bg-[#d9d9d9a4]'
          />

        <AnimatedElement 
              type={'popup'}
              slideDirection={'bottom'}
              delay ={4}
              duration={2}
              className={'top-[40px] left-[770px] z-[13]'}
              >
              <CardSelection
                question=" La ética empresarial se enfoca únicamente en las relaciones internas de una empresa "
                options={[
                  {
                    label: "Falso",
                    content: "¡Excelente! La ética empresarial abarca tanto las relaciones internas como las externas de una organización.",
                  },
                  {
                    label: "Verdadero",
                    content: "Te invitamos a explorar más sobre el tema y puedas expandir tus conocimientos.",
                  },
                ]}
                width={'400px'}
                height={'250px'}
                className='absolute top-[300px] left-[-690px]'
              />
            </AnimatedElement>
        </div>
      </ScrollContent>
    </div>
  )
}

export default One