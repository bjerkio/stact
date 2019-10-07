import Module from '../../root/interfaces/Module';
import routes from './Routes'
import * as epics from './store/Epics'
import actions, {UsersReducerFunction as reducer} from './store/Reducer'

const UsersModule: Module = {
  routes,
  store: {
    reducer,
    actions,
    epics
  },
  basePath: '/users',
  name: 'users',
}

export default UsersModule;
