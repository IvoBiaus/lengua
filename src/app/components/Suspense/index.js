import React, { Suspense } from 'react';

import Loading from '../Loading';

function CustomSuspense({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

export default CustomSuspense;
