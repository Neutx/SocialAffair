import { Route , Routes } from 'react-router-dom';

import './globals.css';
import SigninForm from './_auth/form/SigninForm';
import SignupForm from './_auth/form/SignupForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';


const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/*public route*/}
            <Route element={<AuthLayout/>}>

            <Route path="sign-in" element={<SigninForm/>} />
            <Route path="sign-up" element={<SignupForm/>} />
            
            </Route>



            {/*private route*/}

            <Route element={<RootLayout/>}>

            <Route index element={<Home/>} />


            </Route>

        </Routes>

    </main>
  )
}

export default App
