import { ApolloServer } from 'apollo-server-micro';
import getConfig from 'next/config';

import { schema } from '@/server/services/apollo/schema';

const {
  publicRuntimeConfig: { GRAPHQL_SCHEMA_PATH },
} = getConfig();

const apolloServer = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: GRAPHQL_SCHEMA_PATH });
