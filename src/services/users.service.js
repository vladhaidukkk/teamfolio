import { httpService } from './index';

const usersEndpoint = 'users/';

const createUser = async (id, payload) => {
  const { data } = await httpService.put(usersEndpoint + id, payload);
  return data;
};

const getUsers = async () => {
  const { data } = await httpService.get(usersEndpoint);
  return data;
};

const patchUser = async (id, payload) => {
  const { data } = await httpService.patch(usersEndpoint + id, payload);
  return data;
};

const usersService = {
  createUser,
  getUsers,
  patchUser,
};

export default usersService;
