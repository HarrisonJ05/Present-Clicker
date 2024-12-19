import {store} from './Store'
import {useQuery} from '@tanstack/react-query'
import ky from 'ky'
import {motion} from 'motion/react'

function SignUp() {

    const {Username, Password, setUsername, setPassword} = store();

    async function handleSignUp() {
        console.log("dfgdf")
        const {isPending, error } = useQuery({
            queryKey: ['repoData'],
            queryFn: async () =>
                await ky.post('http://localhost:7116/api/CreateUsersFunction', {json: {Username, Password}}).json(),
            })

            

        if(isPending) return 'Loading...'

        if(error) return 'An error has occurred:' + error.message
    }


    return(
        <div className='w-80 h-80 m-auto bg-LoginBg bg-cover rounded-xl justify-center text-center'>
            <form className='mx-auto border-1 border-solid border-slate-800' onSubmit={handleSignUp}>
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
                <motion.button whileTap={{scale: 0.9}} type='submit' className='bg-top-band text-white rounded-lg px-2 py-1 mt-16'> Sign Up </motion.button>
            </form>
        </div>
    )
}

export default SignUp;