import './App.css'
import {store} from './Store'
import {motion} from 'motion/react'
import FallingPresent from './FallingPresent'
import Upgrades from './Upgrades'
import LeaderBoard from './LeaderBoard'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Login from './Login'
import Popup from 'reactjs-popup';
import Save from './SaveButton'


const queryClient = new QueryClient()

export default function App() {
  
  const {Presents, ClickerLevel, setPresents, setFallingImg, removeFallingImg} = store()

  const dropImg = () => {
    setPresents(Presents + ClickerLevel)
    for (let i = 0; i !== ClickerLevel; i++) {
      const newImg={
        id: Date.now(),
        position: Math.floor(Math.random() * 90),
      };

      setFallingImg(newImg);

      setTimeout(() => {
        removeFallingImg(newImg.id);
      }, 4000);
  }
  };

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <div>
        <Save />
        <Popup trigger={<motion.button whileTap={{scale: 0.9}} className='absolute flexbox right-4 -top-2 bg'>
          <img src='/imgs/XmasButtons.svg' className='w-28 z-0 h-auto flexbox ' />
          <p className='absolute flexbox top-1.8rem right-8 font-bold text-lg'>Login</p>
        </motion.button>} position="left center" modal>
          <Login />
        </Popup>
        <h1 className='font-bold text-4xl bg-top-band pt-5 pb-4 w-full'>{Presents}</h1>
        <h2 className='font-bold text-2xl bg-top-band pb-3 pt-0.5 w-80 mx-auto rounded-b-full'>Presents!</h2>
      </div>
      <FallingPresent />
      <LeaderBoard />
      <Upgrades />
      <motion.button whileTap={{ scale:0.9}} className="flexbox justify-center content-center h-screen bg-transparent border-none pb-48 bg-none" onClick={dropImg}><img className="w-80 h-auto" src="/imgs/Santa.png"></img></motion.button>
    </QueryClientProvider>
    </>
  )
}