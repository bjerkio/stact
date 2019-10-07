import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/reducers';
import actions, { User as UserType } from '../store/Reducer';
import User from './User';

const UserDetails: React.FC = () => {
  const { userId } = useParams();
  const users = useSelector((state: RootState) => state.users, shallowEqual);
  const dispatch = useDispatch();
  const userDetails = useMemo(
    () =>
      users &&
      users.items &&
      users.items.find((user: UserType) => user.id === Number(userId)),
    [users, userId],
  );

  if (!userId) throw new Error('userId missing');
  if (users.errors.fetchUserError) return <div>Error</div>
  if (!userDetails) {
    dispatch(actions.fetchUserRequest(Number(userId)));
    return <div>loading...</div>;
  }

  return <User {...userDetails} />;
};

export default UserDetails;
