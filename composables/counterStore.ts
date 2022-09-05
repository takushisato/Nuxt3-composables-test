// import { Ref } from "nuxt/dist/app/compat/capi";

// type CounterState = {
//   count: number;
// };

// export const useCounterStore = () => {
//   const state = useState<CounterState>("counter_state", () => ({
//     count: 0,
//   }));
//   return {
//     state: readonly(state),
//     countUp: countUp(state),
//     setCount: setCount(state),
//   };
// };

// const countUp = (state: Ref<CounterState>) => {
//   return () => state.value.count++;
// };

// const setCount = (state: Ref<CounterState>) => {
//   return (count: number) => (state.value.count = count);
// };

import { Ref } from "nuxt/dist/app/compat/capi";

type CounterState = {
  count: number;
};

export const useCounterStore = () => {
  return new CounterStore();
};

class CounterStore {
  _state: Ref<CounterState>;
  constructor() {
    this._state = useState<CounterState>("counter_state", () => ({
      count: 0,
    }));
  }

  get state() {
    return readonly(this._state);
  }

  countUp() {
    this.setCount(this._state.value.count + 1);
  }

  setCount(count: number) {
    this._state.value.count = count;
  }
}