import { describe, it, expect } from 'vitest'
import {
  player as reducer,
  playerSlice,
  play,
  next,
  PlayerState,
} from './player'

// test('reducers', () => {
//   let state;
//   state = reducers({player:{course:{modules:[{id:'1',title:'Iniciando com React',lessons:[{id:'Jai8w6K_GnY',title:'CSS Modules',duration:'13:45'},{id:'w-DW4DhDfcw',title:'Estilização do Post',duration:'10:05'},{id:'D83-55LUdKE',title:'Componente: Header',duration:'06:33'},{id:'W_ATsETujaY',title:'Componente: Sidebar',duration:'09:12'},{id:'Pj8dPeameYo',title:'CSS Global',duration:'03:23'},{id:'8KBq2vhwbac',title:'Form de comentários',duration:'11:34'}]},{id:'2',title:'Estrutura da aplicação',lessons:[{id:'gE48FQXRZ_o',title:'Componente: Comment',duration:'13:45'},{id:'Ng_Vk4tBl0g',title:'Responsividade',duration:'10:05'},{id:'h5JA3wfuW1k',title:'Interações no JSX',duration:'06:33'},{id:'1G0vSTqWELg',title:'Utilizando estado',duration:'09:12'}]}]},currentModuleIndex:0,currentLessonIndex:0}}, {type:'player/next'});
//   expect(state).toEqual({player:{course:{modules:[{id:'1',title:'Iniciando com React',lessons:[{id:'Jai8w6K_GnY',title:'CSS Modules',duration:'13:45'},{id:'w-DW4DhDfcw',title:'Estilização do Post',duration:'10:05'},{id:'D83-55LUdKE',title:'Componente: Header',duration:'06:33'},{id:'W_ATsETujaY',title:'Componente: Sidebar',duration:'09:12'},{id:'Pj8dPeameYo',title:'CSS Global',duration:'03:23'},{id:'8KBq2vhwbac',title:'Form de comentários',duration:'11:34'}]},{id:'2',title:'Estrutura da aplicação',lessons:[{id:'gE48FQXRZ_o',title:'Componente: Comment',duration:'13:45'},{id:'Ng_Vk4tBl0g',title:'Responsividade',duration:'10:05'},{id:'h5JA3wfuW1k',title:'Interações no JSX',duration:'06:33'},{id:'1G0vSTqWELg',title:'Utilizando estado',duration:'09:12'}]}]},currentModuleIndex:0,currentLessonIndex:1}});
// });

const exampleState: PlayerState = {
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
          { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
          {
            id: 'w-DW4DhDfcw',
            title: 'Estilização do Post',
            duration: '10:05',
          },
        ],
      },
      {
        id: 2,
        title: 'Estrutura da aplicação',
        lessons: [
          {
            id: 'gE48FQXRZ_o',
            title: 'Componente: Comment',
            duration: '13:45',
          },
          { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
        ],
      },
    ],
  },
  isLoading: false,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
}

describe('player slice', () => {
  it('shoud be able to play', () => {
    const initialState = playerSlice.getInitialState()

    const state = reducer(initialState, play([1, 2]))

    expect(state.currentModuleIndex).toBe(1)
    expect(state.currentLessonIndex).toBe(2)
  })

  it('shoud be able to jump next video automatically', () => {
    const state = reducer(exampleState, next())

    expect(state.currentModuleIndex).toBe(0)
    expect(state.currentLessonIndex).toBe(1)
  })

  it('shoud be able to jump next module automatically', () => {
    const state = reducer(
      {
        ...exampleState,
        currentLessonIndex: 1,
      },
      next(),
    )

    expect(state.currentModuleIndex).toBe(1)
    expect(state.currentLessonIndex).toBe(0)
  })

  it('shoud not update the current module and lesson index if there is no next lesson available', () => {
    const state = reducer(
      {
        ...exampleState,
        currentModuleIndex: 1,
        currentLessonIndex: 1,
      },
      next(),
    )

    expect(state.currentModuleIndex).toBe(1)
    expect(state.currentLessonIndex).toBe(1)
  })
})
