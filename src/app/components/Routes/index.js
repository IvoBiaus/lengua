import React, { lazy } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Routes from '@/constants/routes';
import styles from './styles.module.scss';
import Suspense from "../Suspense";

const Home = lazy(() => import('@/app/screens/Home'));
const Scores = lazy(() => import('@/app/screens/Scores'));
const Onboarding = lazy(() => import('@/app/screens/Onboarding'));
const Syllables = lazy(() => import('@/app/screens/SyllablesExercise'));
const Words = lazy(() => import('@/app/screens/WordsExercise'));

function AppRoutes() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Suspense>
          <Switch>
            <Route exact path={Routes.HOME} component={Home} />
            <Route exact path={Routes.SCORES} component={Scores} />
            <Route exact path={Routes.ONBOARDING} component={Onboarding} />
            <Route exact path={Routes.SYLLABLES} component={Syllables} />
            <Route exact path={Routes.WORDS} component={Words} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
