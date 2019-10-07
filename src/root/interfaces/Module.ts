import { Epic } from 'redux-observable';
import RouteProps from './RouteProps';

export default interface Module {
  routes: React.FC<RouteProps>;
  store: {
    reducer: any
    actions: any
    epics: {
      [key: string]: Epic
    }
  };
  name: string;
  basePath: string;
}
