import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '../../../store/reducers';
import User from './User';
import actions from '../store/Reducer';

const UserList: React.FC = () => {
  const users = useSelector((state: RootState) => state.users, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchUsersRequest());
  }, [dispatch]);

  if (users.errors.fetchUsersError) return <div>Error</div>
  return (
    <section>
      {users.items &&
        users.items.map(user => <User key={`user-${user.id}`} {...user} />)}
    </section>
  );
};

export default UserList;
