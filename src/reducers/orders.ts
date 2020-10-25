export type TAction<T> = {
  type: string;
  payload: T;
};

export const orders = (state = [], action: TAction<Array<number>>) => {
  switch (action.type) {
    default:
      return state;
  }
};
