'use client';

const FilterError = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <div id="error">
      <h2>An error ocurred!</h2>
      <p>{error.message}</p>
    </div>
  );
};
export default FilterError;
