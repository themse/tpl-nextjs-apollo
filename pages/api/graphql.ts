import { ApolloServer } from 'apollo-server-micro';
import getConfig from 'next/config';

import { schema } from '@/server/services/apollo/schema';

const {
  publicRuntimeConfig: { APOLLO_SERVER_URL },
} = getConfig();

const apolloServer = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: APOLLO_SERVER_URL });
