import store from "../Redux/store/store";

export type RootState = ReturnType<typeof store.getState>;
