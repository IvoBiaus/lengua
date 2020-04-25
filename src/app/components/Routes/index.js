import React, { lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Routes from '@/constants/routes';
import styles from './styles.module.scss';
import Suspense from "../Suspense";

const Home = lazy(() => import('@/app/screens/Home'));

function AppRoutes() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Suspense>
          <Switch>
            <Route isPrivateRoute path={Routes.HOME} component={Home} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
