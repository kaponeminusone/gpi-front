// Modulo tres - Unidad Uno: Innovación y Creatividad
import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
// Imagenes
import ICON1 from '../../../../assets/module-three/Five/IMG.png'
// Componenetes
import { CardTitle } from '../../../../components/Cards/CardTitle'


function Five() {
  const sections = ['1. Recomendaciones',]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Casos de Estudio y Mejores Prácticas'} 
          subtitle={'Unidad 5'} 
          chapter={'5'}
          prevRoute="/module-three/four"
          nextRoute="/module-four"
          />
      </div>
      <ScrollContent sections={sections}>
        
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
            title="Análisis de ejemplos reales"
            subtitle='Implementación de soluciones innovadoras en el mercado'
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

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center"></div>

      </ScrollContent>
    </div>
  )
}

export default Five
