import { render } from "./render";

export interface State {
  currentPath: string;
  date: Date;
  isLoading: boolean;
}

const createState = (initialState: State) =>
  new Proxy<State>(initialState, {
    get(target, value, receiver) {
      return Reflect.get(target, value, receiver);
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver);

      render(target);

      return true;
    },
  });

export default createState;

// let cnt = 0;

// export const useState = <S>(initialState: S): [S, Dispatch<SetState<S>>] => {
//   const timestamp = Date.now();
//   const key = `${cnt}-${timestamp}`;

//   const setState: Dispatch<SetState<S>> = (newState) => {
//     const prevState = state[key] || initialState;

//     if (typeof newState === "function") {
//       // state[key] = newState(prevState)
//     } else {
//       state[key] = newState;
//     }
//   };

//   setState((prev) => prev);

//   return [state[key], setState];
// };

// type Dispatch<A> = (value: A) => void;
// type SetState<S> = S | ((prevState: S) => S);
