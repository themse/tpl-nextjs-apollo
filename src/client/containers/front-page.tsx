import { FC } from 'react';
import { useGetVendorsQuery } from '../services/apollo/generated/hooks/vendors.query.generated';

export const FrontPage: FC = () => {
  const { data, error, loading } = useGetVendorsQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Hello FrontPage</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
