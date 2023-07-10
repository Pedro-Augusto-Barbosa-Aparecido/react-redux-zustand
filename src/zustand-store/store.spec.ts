import { describe, it, expect, beforeEach } from 'vitest'
import { useStore as store } from '.'

const course = {
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
}

const initialState = store.getState()

describe('zustand test', () => {
  beforeEach(() => {
    store.setState(initialState)
  })

  it('shoud be able to play', () => {
    const { play } = store.getState()

    play([1, 2])

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentModuleIndex).toBe(1)
    expect(currentLessonIndex).toBe(2)
  })

  it('shoud be able to jump next video automatically', () => {
    store.setState({ course })

    const { next } = store.getState()

    next()

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentModuleIndex).toBe(0)
    expect(currentLessonIndex).toBe(1)
  })

  it('shoud be able to jump next module automatically', () => {
    store.setState({ course })

    const { next } = store.getState()

    store.setState({
      currentLessonIndex: 1,
    })

    next()

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentModuleIndex).toBe(1)
    expect(currentLessonIndex).toBe(0)
  })

  it('shoud not update the current module and lesson index if there is no next lesson available', () => {
    store.setState({ course })

    const { next } = store.getState()

    store.setState({
      currentLessonIndex: 1,
      currentModuleIndex: 1,
    })

    next()

    const { currentLessonIndex, currentModuleIndex } = store.getState()

    expect(currentModuleIndex).toBe(1)
    expect(currentLessonIndex).toBe(1)
  })
})
