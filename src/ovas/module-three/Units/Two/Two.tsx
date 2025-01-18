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
import ICON1 from '../../../../assets/module-three/icons-1.png'

// Componenetes
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'
import { CardSwap } from '../../../../components/Cards/CardSwap'
import { CardTitle } from '../../../../components/Cards/CardTitle'


function Two() {
  const sections = ['1. Conceptos y definiciones',
                    '1.1. Conceptos y definiciones',
                    '1.2. Importancia de la Innovación en los Negocios',
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
            subtitle='Inovacciones en el negocio'
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


        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

        <AnimatedElement 
          type={'slide'}
          slideDirection={'top'}
          delay ={0}
          duration={1}
          className={'left-[500px] top-[180px] z-[-1]'}
        >
          <img src={ICON1} className='w-[700px]'/>
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
      </ScrollContent>
    </div>
  )
}


export default Two
