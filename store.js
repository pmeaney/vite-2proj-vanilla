
import { createStore } from 'zustand/vanilla'

const store = createStore(() => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
const { getState, setState, subscribe } = store

export default store