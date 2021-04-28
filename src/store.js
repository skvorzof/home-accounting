import create from 'zustand';
// import { devtools } from 'zustand/middleware';

const store = (set) => ({
  water: JSON.parse(localStorage.getItem('water')) || [],
  energy: JSON.parse(localStorage.getItem('energy')) || [],

  addValue: (type, value) => {
    if (type === 'water') set((state) => ({ water: [...state.water, value] }));
    if (type === 'energy') {
      set((state) => ({
        energy: [...state.energy, value],
      }));
    }
  },
});

// const useStore = create(devtools(store));
const useStore = create(store);

export default useStore;
