import { Route , Routes } from 'react-router-dom';

import './globals.css';
import SigninForm from './_auth/form/SigninForm';
import SignupForm from './_auth/form/SignupForm';
import { Home } from './_root/pages';


const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/*public route*/}
            <Route path="sign-in" element={<SigninForm/>} />
            <Route path="sign-up" element={<SignupForm/>} />


            {/*private route*/}
            <Route index element={<Home/>} />
        </Routes>

    </main>
  )
}

export default App
