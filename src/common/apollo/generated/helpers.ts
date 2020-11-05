/* eslint-disable */
import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
} from '@apollo/client/cache';
export type UserKeySpecifier = ('id' | 'name' | 'status' | UserKeySpecifier)[];
export type UserFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = ('viewer' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  viewer?: FieldPolicy<any> | FieldReadFunction<any>;
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
