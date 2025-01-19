// Modulo tres - Unidad Uno: Innovación y Creatividad
import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import FocusComponent from '../../../../components/FocusComponent/FocusComponent'

// Imagenes
import ICON1 from '../../../../assets/module-three/Two/ICON-2.png'
import ICON2 from '../../../../assets/module-three/Two/ICON-2-1.png'
import ICON3 from '../../../../assets/module-three/Two/ICON-2-2.png'
import ICON4 from '../../../../assets/module-three/Two/ICON-3.png'
import ICON5 from '../../../../assets/module-three/Two/ICON-4.png'
import ICON6 from '../../../../assets/module-three/Two/ICON-5.png'
import ICON7 from '../../../../assets/module-three/Two/ICON-6.png'
import ICON8 from '../../../../assets/module-three/Two/ICON-7.png'
import ICON9 from '../../../../assets/module-three/Two/ICON-8.png'
import ICON10 from '../../../../assets/module-three/Two/ICON-9.png'
import IMG2_1 from '../../../../assets/module-three/Two/IMG-2-1.png'
import IMG2_2 from '../../../../assets/module-three/Two/IMG-2-2.png'
import IMG2_3 from '../../../../assets/module-three/Two/IMG-2-3.png'
import IMG2_4 from '../../../../assets/module-three/Two/IMG-2-4.png'
import IMG2_5 from '../../../../assets/module-three/Two/IMG-2-5.png'
import IMG2_6 from '../../../../assets/module-three/Two/IMG-2-6.png'
// Componenetes
import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'
import { CardSwap } from '../../../../components/Cards/CardSwap'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { VideoPlayer } from '../../../../components/VideoPlayer/VideoPlayer'


function Two() {
  const sections = ['1. Técnicas de Brainstorming y Mapas Mentales' ,
                    '1.1. Técnicas de Brainstorming',
                    '1.1.1. Proceso de organización',
                    '1.2. Mapas Mentales',
                    '1.2.1. Proceso de organización',
                    '2. Herramientas para Fomentar la Creatividad',
                    '2.1. SCAMPER',
                    '2.2. Design Thinking',
                  ]

  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Generación de Ideas Innovadoras'} 
          subtitle={'Unidad 2'} 
          chapter={'2'}
          prevRoute="/module-three/One"
          nextRoute="/module-three/three"
          />
      </div>
      <ScrollContent sections={sections}>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          
          <CardTitle  
            title="Técnicas de Brainstorming y Mapas Mentales"
            subtitle='Conceptos claves'
            className="top-[-150px] left-[0]"
          />
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[300px] z-[-1] justify-center flex-center'}
          >
            <img src={ICON1} className='w-[200px]'/>

          </AnimatedElement>

        </div>

        {/* brainstorming */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote
              title="Técnicas de Brainstorming"
              content={'Esta técnica se basa en la premisa de que la cantidad de ideas' +
                        ' producirá, en última instancia, una calidad superior de soluciones.'}
              author='Osborn, 2012'
              width='600px'
              height='170px'  
            className='top-[25px] left-[20px] bg-[#d9d9d9a4]'
            />
          
            <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0.5}
              duration={1}
              className= {'left-[300px] top-[300px] z-[-1]'}
            >
              <img src={IMG2_1} className=' w-[300px]'/>
            </AnimatedElement>

          <CardSwap 
              frontContent={(
                <>
                <div className='flex flex-col justify-center items-center h-full'>
                    <img src={ICON2} className=' w-[70px]'/> 
                    <h3 className="text-2xl mb-2 text-center">Brainstorming </h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>                
              )}
              backContent={(
                <>
                    <h3 className="text-2xl mb-2 text-center">Brainstorming </h3>
                    <p className="text-gray-700">
                    Técnica creativa ampliamente utilizada en ambientes 
                    empresariales y académicos, propuesto por Alex Osborn en 1953
                    </p>
                </>                
              )}
              width='200px'
              height='400px'  
              className='absolute left-[-600px] top-[40px]'                
          />

            <div className={'w-[100] h-[150]'} style={{position: 'absolute', left: '630px', top: '85px' }}>
              <VideoPlayer videoUrl={'https://youtu.be/PkABqQOqyHQ'} />
            </div>
          </div>

          {/* Imagen de brainstorming */}
          <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0.5}
              duration={1}
              className= {'left-[200px] top-[50px] z-[-1]'}
            >
              <img src={IMG2_4} className=' w-[999px]'/>
          </AnimatedElement>
          </div>


        {/* Mapas mentales*/}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote
              title="Mapas Mentales"
              content={'Son diagramas visuales que permiten la organización de ideas en torno a un concepto central,' +
                        'promoviendo así conexiones entre ideas aparentemente no relacionadas. Se ha demostrado' +
                        'que el uso de mapas mentales mejora la memoria, el aprendizaje y la creatividad al' +
                        'estimular ambos hemisferios del cerebro, lo que conduce a una mayor exploración de' +
                        'soluciones creativas'}
              author='Eppler, 2006'
              width='600px'
              height='250px'  
            className='top-[25px] left-[20px] bg-[#d9d9d9a4]'
            />
          
            <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0.5}
              duration={1}
              className= {'left-[300px] top-[300px] z-[-1]'}
            >
              <img src={IMG2_2} className=' w-[300px]'/>
            </AnimatedElement>

          <CardSwap 
              frontContent={(
                <>
                <div className='flex flex-col justify-center items-center h-full'>
                    <img src={ICON3} className=' w-[70px]'/> 
                    {/* <h3 className="text-2xl mb-2 text-center">Brainstorming </h3> */}
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>                
              )}
              backContent={(
                <>
                    <h3 className="text-2xl mb-2 text-left">Mapas Mentales </h3>
                    <p className="text-gray-700">
                    Los mapas mentales, popularizados por Buzan & Buzan (2006).
                    </p>
                </>                
              )}
              width='200px'
              height='300px'  
              className='absolute left-[-600px] top-[40px]'                
          />

            <div className={'w-[100] h-[150]'} style={{position: 'absolute', left: '630px', top: '85px' }}>
              <VideoPlayer videoUrl={'https://youtu.be/QotM4QHkZ0g'} />
            </div>
          </div>

          {/* Imagen de mapa mental */}
          <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
              title="Definición"
              content={'Herramienta visual utilizada para estructurar y organizar información de' +
                'manera gráfica. Facilita la comprensión y el análisis de ideas complejas, mostrando' +
                'conexiones entre conceptos.'}
              width='500px'
              height='200px'  
            className='top-[40px] left-[45px] bg-[#d9d9d9a4]'
            />
          <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0.5}
              duration={1}
              className= {'left-[460px] top-[50px] z-[-1]'}
            >
              <img src={IMG2_3} className=' w-[900px]'/>
          </AnimatedElement>

          <CardFoldChained 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-4xl mb-2 text-center">Proceso de Organización</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (
              <>
                <div className='flex flex-col h-full'>
                <h3 className="text-xl font-semibold mb-2">Identificación del Tema Central:</h3>
                <p className="text-gray-700"> El concepto principal se coloca en el centro del mapa.
                </p>
                </div>
              </>)},
              {content: (<>
                <div className='flex flex-col h-full'>
                  <h3 className="text-xl font-semibold mb-2">Ramificación de Ideas Principales:</h3>
                  <p className="text-gray-700"> Se desarrollan ramificaciones que conectan con el tema central, representando las ideas clave.
                  </p>
                </div>
              </>)},
              {content: (<>
                <div className='flex flex-col h-full'>
                  <h3 className="text-xl font-semibold mb-2">Subramificaciones y Detalles:</h3>
                  <p className="text-gray-700"> Expansión de las ideas principales con detalles específicos, creando subniveles de información.
                  </p>
                </div>
              </>)},
              {content: (<>
                <div className='flex flex-col h-full'>
                  <h3 className="text-xl font-semibold mb-2">Conexión de Conceptos Relacionados:</h3>
                  <p className="text-gray-700">Se trazan vínculos entre diferentes ideas y conceptos, ayudando a visualizar relaciones entre ellas.
                  </p>
                </div>
              </>)}
            ]}
            width={'400px'}
            height={'150px'}
            className='absolute top-[20px] left-[-450px]'
            />

          </div>

       {/*Herramientas para la creatividad*/}
       <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <AnimatedElement 
            type={'slide'}
            slideDirection={'top'}
            delay ={0}
            duration={1}
            className={'left-[800px] top-[250px] z-[-1]'}
          >
            <img src={IMG2_5} className='w-[400px]'/>
          </AnimatedElement>

          <CardNote 
              title='Herramientas para fomentar la creatividad'
              content={'Existen múltiples herramientas diseñadas para estimular la creatividad dentro de los equipos y las organizaciones.'}
              width='550px'
              height='150px'  
            className='top-[40px] left-[730px] bg-[#d9d9d9a4]'
            />
          
          <div className={'w-[100] h-[150]'} style={{position: 'absolute', left: '20px', top: '85px' }}>
              <VideoPlayer videoUrl={'https://youtu.be/FjanUSl8H74'} />
          </div>
        </div>

        {/* SCAMPER*/}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
              title='SCAMPER'
              content={'Esta técnica permite la exploración sistemática de nuevas ideas a partir de modificaciones en productos o procesos existentes '}
              author='Michalko, 2006'
              width='950px'
              height='150px'  
            className='top-[10px] left-[200px] bg-[#d9d9d9a4]'
            /> 
          <div className="flex justify-center space-x-4 relative left-[-50px] top-[20px] ">
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON4} className="w-[70px]" />
                    <h3 className="text-2xl mb-2 text-center">Substitute</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Sustituir</h3>
                  <p className="text-gray-700">
                  Buscamos diferentes opciones que podrían generar beneficios. 
                  La clave es identificar aspectos variables y asignar alternativas viables.
                  </p>
                </>
              }
              width="150px"
              height="480px"
              className="relative"
            />
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON5} className="w-[70px]" />
                    <h3 className="text-2xl mb-2 text-center">Combine</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Combinar</h3>
                  <p className="text-gray-700"> es una excelente herramienta para obtener nuevas ideas creativas. </p>
                </>
              }
              width="150px"
              height="480px"
              className="relative"
            />
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON6} className="w-[70px]" />
                    <h3 className="text-2xl mb-2 text-center">Adapt</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Adaptar</h3>
                  <p className="text-gray-700">para procesos de ideación es la utilización de preguntas relacionadas
                     con la adaptación a tendencias, contextos o situaciones.</p>
                </>
              }
              width="150px"
              height="480px"
              className="relative"
            />
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON7} className="w-[70px]" />
                    <h3 className="text-2xl mb-2 text-center">Modify</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Modificar</h3>
                  <p className="text-gray-700">
                  propone la posibilidad de plantear modificaciones para desarrollar 
                  así el pensamiento creativo. Analiza las características, 
                  funciones, propiedades o atributos de un producto
                  </p>
                </>
              }
              width="150px"
              height="480px"
              className="relative"
            />
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON8} className="w-[70px]" />
                    <h3 className="text-2xl mb-2 text-center">Put to another use</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Usar de otro modo</h3>
                  <p className="text-gray-700">
                  Consiste en buscar oportunidades para aprovechar los elementos 
                  de una manera no convencional o fuera de su uso original.
                  </p>
                </>
              }
              width="150px"
              height="480px"
              className="relative"
            />
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON9} className="w-[70px]" />
                    <h3 className="text-2xl mb-2 text-center">Eliminate</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Eliminar</h3>
                  <p className="text-gray-700">Sugiere también la opción de proponer 
                    la eliminación o reducción de partes del producto, o tiempo como 
                    técnica para la creación de ideas.
                  </p>
                </>
              }
              width="150px"
              height="480px"
              className="relative"
            />
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col justify-center items-center h-full">
                    <img src={ICON10} className="w-[70px]" />
                    <h3 className="text-2xl mb-2 text-center">Rearrange</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              }
              backContent={
                <>
                <h3 className="text-2xl mb-2 text-left">Reorganizar</h3>
                  <p className="text-gray-700">
                  Implica considerar cómo se pueden reestructurar o cambiar el orden 
                  de los elementos existentes para obtener mejores resultados.
                  </p>
                </>
              }
              width="150px"
              height="480px"
              className="relative"
            />
          </div>
                                  
        </div>

        {/* Design Thinking:*/}
          <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <CardNote 
                title='Design Thinking'
                content={'Es una metodología para resolver problemas complejos que' + 
                          'prioriza la empatía con los usuarios y el desarrollo de ' +
                          'soluciones iterativas a través de la ideación y prototipado '}
                author='Brown, 2009'
                width='950px'
                height='170px'  
              className='top-[10px] left-[200px] bg-[#d9d9d9a4]'
              />

            <CardNote 
                title='Pensamiento de diseño'
                content={'se ha implementado con éxito en múltiples industrias,' +
                        ' permitiendo a las organizaciones mejorar la experiencia ' +
                        ' del cliente y generar soluciones más centradas en las necesidades' +
                        ' reales del mercado'}
                author='Liedtka & Chin, 2022'
                width='400px'
                height='300px'  
              className='top-[250px] left-[150px] bg-[#d9d9d9a4]'
              />

            <AnimatedElement 
              type={'slide'}
              slideDirection={'top'}
              delay ={0}
              duration={1}
              className={'left-[650px] top-[150px] z-[-1]'}
            >
              <img src={IMG2_6} className='w-[500px]'/>
            </AnimatedElement>

           </div> 

      </ScrollContent>
    </div>
  )
}


export default Two
