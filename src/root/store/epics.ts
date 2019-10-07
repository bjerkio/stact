import { combineEpics, Epic } from 'redux-observable';
import modules from '../../modules'
import Module from '../interfaces/Module';

// loop through modules, reduce down the epics from each module into an array
const epics = modules.reduce<Epic[]>((prevEpics, module: Module) => [...prevEpics, ...Object.values(module.store.epics)], [])

// combineEpics does *not* take an array however
export default combineEpics(...epics);
