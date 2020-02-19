import React, { lazy, Suspense } from 'react';

interface Props {
  fallback: React.ReactNode | null;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loadable = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  { fallback = null }: Props = { fallback: null },
): React.FC => {
  const LazyComponent = lazy(importFunc);

  // eslint-disable-next-line react/display-name
  return (props: React.ComponentProps<T>): JSX.Element => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} /> {/* eslint-disable-line react/jsx-props-no-spreading */}
    </Suspense>
  );
};

export default loadable;
