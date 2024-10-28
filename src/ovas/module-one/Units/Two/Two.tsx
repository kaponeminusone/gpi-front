// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import FocusComponent from '../../../../components/FocusComponent/FocusComponent'

import IMGdruker from '../../../../assets/module-one/Drucker.png'
import IMGlider from '../../../../assets/module-one/lider.png'
import IMGdirection from '../../../../assets/module-one/direction.png'
import { CardSelection } from '../../../../components/Cards/CardSelection'


function Two() {
  const sections = ['2.1 S', ' 2.1.1 S', '2.2 S']
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Liderazgo y Gestión del Tiempo'} 
          subtitle={'Unidad 2'} 
          chapter={'1'}/>
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
        
        </div>
        <div className="bg-secondary text-secondary-foreground p-8 h-screen flex flex-col items-center">
         
        </div>
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
            
        </div>
      </ScrollContent>
    </div>
  )
}

export default Two