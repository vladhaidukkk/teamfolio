import { httpService } from './index';

const usersEndpoint = 'users/';

const createUser = async (id, payload) => {
  const { data } = await httpService.put(usersEndpoint + id, payload);
  return data;
};

const getUser = async (id) => {
  const { data } = await httpService.get(usersEndpoint + id);
  return data;
};

const getUsers = async () => {
  const { data } = await httpService.get(usersEndpoint);
  return data;
};

const usersService = {
  createUser,
  getUser,
  getUsers,
};

export default usersService;
