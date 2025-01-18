// Modulo tres - Unidad Uno: Innovación y Creatividad
import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
// Imagenes
import ICON1 from '../../../../assets/module-three/One/icons-1.png'
import ICON2 from '../../../../assets/module-three/One/icons-2.png'
import ICON3 from '../../../../assets/module-three/One/icons-3.png'
import ICON4 from '../../../../assets/module-three/One/icons-4.png'

import IMG1_1 from '../../../../assets/module-three/One/IMG1-1.png'
import IMG1_2 from '../../../../assets/module-three/One/IMG1-2.png'
import IMG1_3 from '../../../../assets/module-three/One/IMG1-3.png'
import IMG1_4 from '../../../../assets/module-three/One/IMG1-4.png'

import DIAG_1 from '../../../../assets/module-three/One/DIAG-1.png'
// Componenetes
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { CardSwap } from '../../../../components/Cards/CardSwap'
import { CardTitle } from '../../../../components/Cards/CardTitle'


function One() {
  const sections = ['1. Conceptos y definiciones',
                    '1.1. Conceptos y definiciones',
                    '1.2. Tipos de innovación',
                    '2. Importancia de la Innovación en los Negocios',
                  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Introducción a la Innovación y Creatividad'} 
          subtitle={'Unidad 1'} 
          chapter={'1'}
          prevRoute="/module-three"
          nextRoute="/module-three/two"
          />
      </div>
      <ScrollContent sections={sections}>
        
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
            title="Conceptos y definiciones"
            subtitle='Innovación Empresarial'
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
            title="Innovación y Creatividad: Conceptos Básicos"
            content={'La creatividad y la innovación son interdependientes, ya que la creatividad' +
                     'es el motor que alimenta la innovación. Sin una base creativa, las ' +
                     'innovaciones carecerían de originalidad. Además, la innovación tiene un ' +
                     'enfoque más orientado a la acción, mientras que la creatividad es más ' +
                     'un proceso de generación de ideas.'}
            author='Sternberg & Lubart, 1998'
            width='700px'
            height='220px'  
           className='top-[40px] left-[80px] bg-[#d9d9d9a4]'
          />
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[300px] left-[450px] z-[-1] justify-center flex-center'}
          >
            <img src={IMG1_1} className='w-[350px]'/>
          </AnimatedElement>

          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={ICON2} className=' w-[70px]'/> 
                  <h3 className="text-2xl mb-2 text-center">Innovación</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
                  <p className="text-gray-700">
                  Es la aplicación exitosa de nuevas ideas, productos,
                  servicios o procesos dentro de un contexto organizacional o social. Esta noción implica no
                  solo la generación de ideas originales, sino su implementación efectiva para obtener valor
                  económico o social 
                  </p>
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Schumpeter & Backhaus, 1934'}</p>
              </>
            )}
            width='400px'
            height='280px'  
           className='absolute left-[280px] top-[-90px]'
          />

          <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={ICON3} className=' w-[70px] '/> 
                  <h3 className="text-2xl mb-2 text-center">Creatividad</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Creatividad</h3>
                  <p className="text-gray-700">
                    Es la capacidad de una persona o grupo para generar
                    ideas originales, novedosas y útiles. Aunque es vista como un fenómeno
                    individual, también puede ser un proceso colectivo, especialmente en el ámbito
                    organizacional, donde las interacciones entre individuos y equipos pueden potenciar la
                    generación de nuevas ideas.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Amabile, 1988'}</p>
                  </p>
              </>
            )}
            width='400px'
            height='320px'  
           className='absolute left-[280px] top-[-30px]'
          />
          
            <AnimatedElement 
              type={'popup'}
              slideDirection={'bottom'}
              delay ={4}
              duration={2}
              className={'top-[400px] left-[700px] z-[13]'}
              >
            <CardSelection 
                question={'¿La creatividad es un proceso exclusivamente individual y no puede ser fomentado en grupos?'}
                options={[
                    {
                        label: "No",
                        content: "Correcto. La creatividad puede ser tanto individual como colectiva.",
                    },
                    {
                        label: "Sí",
                        content: "¡No hay problema! Tómate tu tiempo para reflexionar sobre la pregunta.",
                    },
                ]}
                width={'350px'}
                height={'250px'}
                className='absolute left-[-620px] top-[-30px]'
            />
            </AnimatedElement>
        </div>

        {/*Tipos de innovación' */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
            <CardNote
            title="Innovación incremental"
            content={'Se refiere a mejoras graduales sobre productos o procesos existentes.'}
            author='Christensen, 1997'
            width='300px'
            height='200px'  
           className='top-[40px] left-[80px] bg-[#d9d9d9a4]'
          />
            <AnimatedElement 
                type={'slide'}
                slideDirection={'bottom'}
                delay ={0}
                duration={1}
                className={'top-[50px] left-[400px] z-[-1] justify-center flex-center'}
            >
                <img src={IMG1_2} className='w-[200px]'/>
            </AnimatedElement>

            <CardNote
            title="Innovación y Creatividad: Conceptos Básicos"
            content={'Cambia radicalmente las reglas del mercado y desplaza tecnologías o modelos de negocio antiguos'}
            author='Christensen, 1997'
            width='300px'
            height='230px'  
           className='top-[350px] left-[80px] bg-[#d9d9d9a4]'
          />
            <AnimatedElement 
                type={'slide'}
                slideDirection={'bottom'}
                delay ={0}
                duration={1}
                className={'top-[370px] left-[400px] z-[-1] justify-center flex-center'}
            >
                <img src={IMG1_3} className='w-[200px]'/>
            </AnimatedElement>

            <AnimatedElement 
                type={'slide'}
                slideDirection={'bottom'}
                delay ={0}
                duration={1}
                className={'top-[10px] left-[600px] z-[-1] justify-center flex-center'}
            >
                <img src={DIAG_1} className='w-[650px]'/>
            </AnimatedElement>
        </div>

        {/* Importancia de la Innovación en los Negocios */}
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[500px] top-[300px] z-[-1]'}
        > 
        <img src={IMG1_4} className='w-[400px]'/> 
        </AnimatedElement>     

        <CardNote
            title="La brújula moral de las organizaciones: Un recorrido por el proceso de toma de decisiones éticas"
            content={'La innovación es clave para la supervivencia y el éxito a largo plazo de las empresas.'+
                    ' Aquellas que no se adaptan y no innovan enfrentan una mayor probabilidad de quedar' +
                    ' rezagadas frente a competidores más dinámicos. Las empresas innovadoras tienden a'+
                    ' experimentar un crecimiento sostenido, mejoran la eficiencia operativa y responden de' +
                    ' manera más rápida a las tendencias cambiantes del mercado'}
            width='999px'
            height='230px'  
            author='Drucker, 2007'
           className='top-[40px] left-[150px] bg-[#d9d9d9a4]'
          />

        <CardFoldHorizontal 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-2xl mb-2 text-center">Estudio de la OCDE</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Inversion de la innovación</h3>
                <p className="text-gray-700 text-sm">
                    Las empresas que invierten en innovación tienden a tener un desempeño 
                    superior en términos de rentabilidad, productividad y expansión a nuevos mercados.
                    <br />(Jelinek & Porter, 1990).
                </p>
              </>)
              },
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Capacidad de innovación</h3>
                <p className="text-gray-700 text-sm">
                    Además, la capacidad de innovar se ha convertido en un criterio 
                    fundamental para la creación de ventajas competitivas sostenibles en un mundo globalizado
                    <br />(Jelinek & Porter, 1990).
                </p>
              </>)}
            ]}
            width={'250px'}
            height={'250px'}
            className='absolute top-[180px] left-[350px] mt-[20px]' // Agregado: border-radius, background, shadow
          />   

        <CardSwap 
            frontContent={(
              <>
              <div className='flex flex-col justify-center items-center h-full'>
                  <img src={ICON4} className=' w-[70px]'/> 
                  <h3 className="text-2xl mb-2 text-center">Cuarta revolución industrial</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>
            )} 
            backContent={(
              <>
              <h3 className="text-xl font-semibold mb-2">Cuarta revolución industrial</h3>
                  <p className="text-gray-700">
                  Caracterizada por avances en inteligencia artificial, robótica y big data, 
                  la innovación tecnológica ha cobrado una importancia aún mayor. Las empresas 
                  que integran estas tecnologías disruptivas en sus procesos y productos pueden 
                  dominar el mercado y redefinir industrias enteras
                  </p>
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Schwab, 2017'}</p>
              </>
            )}
            width='380px'
            height='300px'  
           className='absolute left-[-480px] top-[-90px]'
          />
        </div>

      </ScrollContent>
    </div>
  )
}

export default One
