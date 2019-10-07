import Module from '../../root/interfaces/Module';
import actions, { PostsReducerFunction as reducer } from './store/Reducer'
import routes from './Routes'
import * as epics from './store/Epics'

const Posts: Module = {
  routes,
  store: {
    reducer,
    actions,
    epics
  },
  name: 'posts',
  basePath: '/posts',
};

export default Posts;
