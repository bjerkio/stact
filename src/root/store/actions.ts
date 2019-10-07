import modules from '../../modules'
import Module from '../interfaces/Module';

// loop through all modules, reduce and create a new object with all actions from every module
const actions = modules.reduce((prevActions, module: Module) => ({ ...prevActions, ...module.store.actions }), {}) 

export default actions
