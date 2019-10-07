import { combineReducers } from 'redux';
import modules from '../../modules'
import Module from '../interfaces/Module';

const allReducers = modules.reduce((prevReducers, module: Module) => ({ ...prevReducers, [module.name]: module.store.reducer}), {})

const reducers = combineReducers(allReducers);

export default reducers;
export type RootState = ReturnType<typeof reducers>;