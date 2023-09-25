import { createStore } from "zustand/vanilla";

const store = createStore(() => ({
  bears: 0,
  increasePopulation: () => setState((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => setState({ bears: 0 }),
}));
const { getState, setState, subscribe } = store;

export default store;
