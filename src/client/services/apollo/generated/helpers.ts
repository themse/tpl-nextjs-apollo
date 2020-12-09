/* eslint-disable */
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
} from '@apollo/client/cache';
export type UserKeySpecifier = (
  | 'id'
  | 'login'
  | 'avatar_url'
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  login?: FieldPolicy<any> | FieldReadFunction<any>;
  avatar_url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = ('getUsers' | 'getUser' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  getUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  getUser?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = ('updateViewer' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
  updateViewer?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TypedTypePolicies = TypePolicies & {
  User?: {
    keyFields: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: UserFieldPolicy;
  };
  Query?: {
    keyFields:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: QueryFieldPolicy;
  };
  Mutation?: {
    keyFields:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    queryType?: true;
    mutationType?: true;
    subscriptionType?: true;
    fields?: MutationFieldPolicy;
  };
};
