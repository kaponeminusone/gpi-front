import { Question, GameResult } from '../types/Game';

export const questions: Question[] = [
  {
    id: 'q1',
    text: '¿Te gusta programar?',
    options: [
      { text: 'Sí', value: true, nextQuestionId: 'q2' },
      { text: 'No', value: false, nextQuestionId: 'q2' }
    ]
  },
  {
    id: 'q2',
    text: '¿Prefieres frontend o backend?',
    options: [
      { text: 'Frontend', value: true, nextQuestionId: 'q3' },
      { text: 'Backend', value: false, nextQuestionId: 'q3' }
    ]
  },
  {
    id: 'q3',
    text: '¿Trabajas en equipo?',
    options: [
      { text: 'Sí', value: true, nextQuestionId: null },
      { text: 'No', value: false, nextQuestionId: null }
    ]
  }
];

export const truthTable: { [key: string]: GameResult } = {
  'true,true,true': {
    text: 'Desarrollador Frontend Senior',
    description: 'Eres ideal para liderar equipos de frontend'
  },
  'true,true,false': {
    text: 'Desarrollador Frontend Freelance',
    description: 'Tu perfil es perfecto para trabajar de manera independiente'
  },
  'true,false,true': {
    text: 'Desarrollador Backend Senior',
    description: 'Tienes potencial para liderar equipos de backend'
  },
  'true,false,false': {
    text: 'Desarrollador Backend Freelance',
    description: 'Puedes especializarte en servicios backend independientes'
  },
  'false,true,true': {
    text: 'Diseñador UI/UX',
    description: 'Tu perfil se adapta mejor al diseño de interfaces'
  },
  'false,true,false': {
    text: 'Diseñador Gráfico',
    description: 'Podrías especializarte en diseño digital'
  },
  'false,false,true': {
    text: 'Project Manager',
    description: 'Tienes habilidades para gestionar equipos técnicos'
  },
  'false,false,false': {
    text: 'Analista de Datos',
    description: 'Podrías especializarte en análisis y documentación'
  }
};