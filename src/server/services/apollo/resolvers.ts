import { user } from '../api/github';

export const resolvers = {
  Query: {
    getUsers: async (_parent, _args, _context, _info) => {
      return user.getUsers();
    },
    getUser: async (_parent, _args, _context, _info) => {
      const { name } = _args;
      return user.getUser(name);
    },
  },
  Mutation: {},
};
