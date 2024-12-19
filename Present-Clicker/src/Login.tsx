import {store} from './Store'
import ky from 'ky'
import {motion} from 'motion/react'
import Popup from 'reactjs-popup';
import SignUp from './SignUp';
import UserType from './UserType';

function Login() {

    const {Username, Password, setUsername, setPassword, setPresents, setClicker, setClickerCost, setId} = store();

    async function handleLogin(e: React.FormEvent<HTMLElement>){
        e.preventDefault();
        try{
            const response = await ky.post<UserType>('http://localhost:7116/api/LoginFunction', {json:{Username, Password}}).json();
            console.log("Login Successful", response)
            setId(response.id)
            setUsername(response.username)
            setPassword(response.password)
            setPresents(response.presents)
            setClicker(response.clickerLevel)
            if(response.clickerCost <= 1){
                setClickerCost(20)
            }else{
            setClickerCost(response.clickerCost)
            }
        } catch(error) {
            console.error("Unable to login", error)

        }
    }

    return(
        <div className='w-80 h-80 m-auto bg-LoginBg bg-cover rounded-xl justify-center text-center'>
            <form className='mx-auto border-1 border-solid border-slate-800' onSubmit={handleLogin}>
                <p><input 
                    className='bg-top-band mt-20 text-white placeholder-white rounded-lg pl-2'
                    required 
                    type="text"
                    placeholder="Username"
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </p>
                <p><input 
                    className='bg-top-band mt-1 text-white placeholder-white rounded-lg pl-2'
                    required 
                    type="text"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </p>
                <motion.button whileTap={{scale: 0.9}} type='submit' className='bg-top-band text-white rounded-lg px-2 py-1 mt-16'> Login </motion.button>
            </form>
            <p>Don't have an account? <Popup trigger={<button className='text-blue-700'>Sign Up</button>} position="left center" modal><SignUp /></Popup></p>
        </div>
    )
}

export default Login;