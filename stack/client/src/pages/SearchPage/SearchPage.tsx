import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const params = [];

  /* eslint-disable */
  for (let entry of searchParams.entries()) {
    params.push(entry);
  }
  /* eslint-enable */

  return (
    <>
      Search page mockup. Pass params to backend to get list of users
      {params.map((p) => {
        return <div key={p[0]}>{`${p[0]}: ${p[1]} `}</div>;
      })}
    </>
  );
};

export default Search;
