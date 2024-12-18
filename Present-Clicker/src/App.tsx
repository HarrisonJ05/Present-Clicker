import './App.css'
import {store} from './Store'
import {motion} from 'motion/react'
import FallingPresent from './FallingPresent'
import Upgrades from './Upgrades'
import LeaderBoard from './LeaderBoard'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  
  const {presents, ppc, setPresents, setFallingImg, removeFallingImg} = store()

  const dropImg = () => {
    setPresents(presents + ppc)
    for (let i = 0; i !== ppc; i++) {
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
      <h1 className='font-bold text-4xl bg-top-band pt-5 pb-4 w-full'>{presents}</h1>
      <h2 className='font-bold text-2xl bg-top-band pb-3 pt-0.5 w-80 mx-auto rounded-b-full'>Presents!</h2>
      <FallingPresent />
      <LeaderBoard />
      <Upgrades />
      <motion.button whileTap={{ scale:0.9}} className="flexbox justify-center content-center h-screen bg-transparent border-none pb-48 bg-none" onClick={dropImg}><img className="w-80 h-auto" src="/imgs/Santa.png"></img></motion.button>
    </QueryClientProvider>
    </>
  )
}