import { configureStore } from '@reduxjs/toolkit';
import reducer from './redus';
const store = configureStore({
    reducer: {
        donner: reducer
    }
});
export default store;