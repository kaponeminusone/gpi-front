// Modulo tres - Unidad Uno: Innovación y Creatividad
// import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
// Imagenes
import ICON1 from '../../../../assets/module-three/Four/ICON4-3.png'

import IMG1_1 from '../../../../assets/module-three/Four/ICON4-1.png'
import IMG1_2 from '../../../../assets/module-three/Four/ICON4-2.png'
import IMG1_3 from '../../../../assets/module-three/Four/ICON4-4.png'
import IMG4_1 from '../../../../assets/module-three/Four/IMG4-1.png'
import IMG4_2 from '../../../../assets/module-three/Four/IMG4-2.png'
// Componenetes
import { CardSwap } from '../../../../components/Cards/CardSwap'
import { CardTitle } from '../../../../components/Cards/CardTitle'


function One() {
  const sections = ['1. Implementación de Nuevas Soluciones',
                    '1.1. Estrategias para el Desarrollo de Productos',
                    '1.2. Lanzamiento y Comercialización de Innovaciones',
                  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Implementación de Nuevas Soluciones'} 
          subtitle={'Unidad 4'} 
          chapter={'4'}
          prevRoute="/module-three/three"
          nextRoute="/module-three/five"
          />
      </div>
      <ScrollContent sections={sections}>
        
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
            title="Conceptos y definiciones"
            subtitle='Implementación de Nuevas Soluciones'
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
        

       {/* Importancia de la ética y la responsabilidad social en los negocios */}
       <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <CardNote
            title="Estrategias para el Desarrollo de Productos"
            content={'La implementación de nuevas ideas requiere una planificación rigurosa. Existen varias' +
                'estrategias para el desarrollo de productos.'}
            width='400px'
            height='220px'  
           className='top-[40px] left-[120px] bg-[#d9d9d9a4]'
          />
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[300px] left-[150px] z-[-1] justify-center flex-center'}
          >
            <img src={IMG4_1} className='w-[350px]'/>
          </AnimatedElement>

          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={IMG1_1} className=' w-[100px]'/> 
                  <h3 className="text-2xl mb-2 text-center">Desarrollo Ágil</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Desarrollo Ágil</h3>
                  <p className="text-gray-700">
                    Esta metodología permite un enfoque iterativo e incremental, que
                    es particularmente útil para proyectos donde los requisitos pueden cambiar
                    rápidamente (Beck et al., 2013). 
                    <br /> Los equipos trabajan en ciclos cortos (sprints) para
                    entregar prototipos o versiones iniciales del producto de forma continua,
                    permitiendo ajustes basados en retroalimentación temprana.
                  </p>
              </>
            )}
            width='500px'
            height='280px'  
           className='absolute left-[180px] top-[-90px]'
          />

          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={IMG1_2} className=' w-[100px] '/> 
                  <h3 className="text-2xl mb-2 text-center">Prototipado rápido:</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Prototipado rápido:</h3>
                  <p className="text-gray-700">
                    El uso de prototipos es esencial para probar y validar ideas
                    antes de hacer una inversión a gran escala. 
                    <br />Thomke (2003) sugiere que las
                    organizaciones que emplean el prototipado rápido pueden reducir el riesgo de fallos
                    costosos y acelerar el tiempo de comercialización.
                  </p>
              </>
            )}
            width='500px'
            height='280px'  
           className='absolute left-[180px] top-[-30px]'
          />
          
        </div>

        {/* Importancia de la Innovación en los Negocios */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[200px] top-[300px] z-[-1]'}
        > 
        <img src={IMG4_2} className='w-[450px]'/> 
        </AnimatedElement>     

        <CardNote
            title="Lanzamiento y Comercialización de Innovaciones"
            content={'Una vez desarrollado el producto o servicio, el éxito depende de una estrategia de' +
                        'lanzamiento bien diseñada. Las empresas deben analizar factores como el momento' +
                        'adecuado para el lanzamiento, la segmentación del mercado, las campañas de marketing y' +
                        'la distribución.'}
            width='999px'
            height='200px'  
           className='top-[40px] left-[150px] bg-[#d9d9d9a4]'
          />

        <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={IMG1_3} className=' w-[70px]'/> 
                  <h3 className="text-2xl mb-2 text-center">Difusión de la innovación</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Difusión de la innovación</h3>
                  <p className="text-gray-700">
                    Propone la teoría de la difusión de la innovación, que
                    destaca la importancia de convencer a los primeros adoptantes y cruzar el "abismo" hacia el
                    mercado masivo para lograr una adopción exitosa.
                  </p>
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Moore, 1995'}</p>
              </>
            )}
            width='380px'
            height='250px'  
           className='absolute left-[210px] top-[40px]'
          />
        </div>

      </ScrollContent>
    </div>
  )
}

export default One
