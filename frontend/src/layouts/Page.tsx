import React, { FC, useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

// page
import Home from '../pages/home';
import Oauth from '../pages/oauth';
import About from '../pages/about';
import Registration from '../pages/registration';
import Profile from '../pages/profile';
import Forum from '../pages/forum';
import Post from '../pages/post';
import Records from '../pages/records';
import Game from '../pages/game';
import NotFound from '../pages/404';
import ServerError from '../pages/500';


// constants
import { AppRoute } from '../services/const';

// style
import { GlobalStyle } from '../styles/style';
import { ThemeProvider } from 'styled-components';

import { baseTheme, darkTheme } from '../styles/variables';
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile, addTheme, loadTheme, updateTheme } from '../store/user/actions';
import { ThunkDispatch } from 'redux-thunk';
import Menu from '../components/Menu';
import { ToastContainer } from 'react-toastify';
import ToggleTheme from '../components/ToggleTheme';
import { AppState } from '../store/configureStore';

interface ProtectedStartRouteProps {
  user: boolean;
  redirectPath?: any;
}

const ProtectedStartRouteProps: FC<ProtectedStartRouteProps> = ({
                                                                  user,
                                                                  redirectPath = AppRoute.PROFILE,
                                                                }) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

interface ProtectedRouteProps {
  user: boolean;
  redirectPath?: any;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
                                                   user,
                                                   redirectPath = AppRoute.ROOT,
                                                 }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

const Page = () => {
  const userTest = useSelector<AppState, AppState['user']>((state) => state.user);
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const [user, setUser] = useState(false);
  const [loader, setLoaded] = useState(false);

  const [isBaseTheme, setTogglerTheme] = useState(userTest.baseTheme);


  const handleToggleTheme = () => {

    dispatch(loadTheme(userTest.id))
    const isTheme = userTest.baseTheme

    const dataTheme = {
      userId: userTest.id,
      baseTheme: !isBaseTheme,
    }

    if (isTheme === undefined) {
      dispatch(addTheme(dataTheme))
    } else {
      dispatch(updateTheme(userTest.id, dataTheme))
    }
    setTogglerTheme(dataTheme.baseTheme);
  };

  useEffect(() => {
    const exec:any = async () => {
      await  dispatch(loadProfile())
      setLoaded(true);
    }
    if (user) {
      setTogglerTheme(userTest.baseTheme);
    }
    exec();
  }, []);


  useEffect(() => {
    setTogglerTheme(userTest.baseTheme);
  }, [userTest.baseTheme])


  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
      setUser(localStorage.getItem('user') === 'true')
      setTogglerTheme(isBaseTheme)
    }
  }, []);

  if (!loader) {
    return null;
  }

  return (
      <ThemeProvider theme={isBaseTheme || isBaseTheme === undefined ? baseTheme : darkTheme}>
        <GlobalStyle />
        <ToastContainer
            position="top-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover

        />
        <Routes>

          <Route element={<ProtectedStartRouteProps user={!!userTest.email} />}>
            <Route path={AppRoute.ROOT} element={<Home />} />
            <Route path={AppRoute.OAUTH} element={<Oauth />} />
            <Route path={AppRoute.REGISTRATION} element={<Registration />} />
          </Route>

          <Route
              element={
                <>
                  <Menu />
                  <ToggleTheme onChange={handleToggleTheme} value={isBaseTheme} />
                  <ProtectedRoute user={!!userTest.email} />
                </>
              }
          >
            <Route path={AppRoute.PROFILE} element={<Profile />} />
            <Route path={AppRoute.FORUM} element={<Forum />} />
            <Route path={AppRoute.ABOUT} element={<About />} />
            <Route path={`${AppRoute.FORUM}/post/:id`} element={<Post />} />
            <Route path={AppRoute.RECORDS} element={<Records />} />
            <Route path={AppRoute.GAME} element={<Game />} />
          </Route>

          <Route path={'*'} element={<NotFound />} />
          <Route path={'/500'} element={<ServerError />} />
        </Routes>
      </ThemeProvider>
  );
};

export default Page;
