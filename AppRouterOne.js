
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './pages/home/homePage'
import NotFoundPage from './pages/404/NotFoundPage'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/Profile/ProfilePage';
import Taskpage from './pages/tasks/taskpage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginFormik from './components/pure/forms/loginFormik';


function AppRouterOne() {
  const logged = false;

  return (
    <ChakraProvider>
      <Router>

        <div>
          <aside>
            <Link to='/'>| HOME |</Link>
            <Link to='/about'>| ABOUT |</Link>
            <Link to='/faqs'>|Faqs |</Link>
            <Link to='/tasks'>|Tasks Page |</Link>
            <Link to='/login'>|Login Page |</Link>
          </aside>

          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginFormik />} />
              
              <Route path='faqs' element={<AboutPage />} />
              <Route path='about' element={<AboutPage />} />

              <Route path='profile' element={logged ? <ProfilePage /> : <Navigate to={"/login"} />} />

              <Route path='tasks' element={<Taskpage />} />
              <Route path='task/:id' element={<TaskDetailPage />} />

              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>


      </Router>
    </ChakraProvider>
  );
}

export default AppRouterOne;
