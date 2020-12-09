import axios from 'axios';
import getConfig from 'next/config';

const {
  serverRuntimeConfig: { GITHUB_API_URL },
} = getConfig();

export const getUsers = async () => {
  try {
    const users = await axios.get(`${GITHUB_API_URL}/users`);
    return users.data.map(({ id, login, avatar_url }) => ({
      id,
      login,
      avatar_url,
    }));
  } catch (error) {
    throw new Error(error.message); // TODO
  }
};

export const getUser = async (name: string) => {
  try {
    const user = await axios.get(`${GITHUB_API_URL}/users/${name}`);
    return {
      id: user.data.id,
      login: user.data.login,
      avatar_url: user.data.avatar_url,
    };
  } catch (error) {
    throw new Error(error.message); // TODO
  }
};
