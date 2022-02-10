import { store } from './store';
import { rootReducer } from './root-reducer';

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
