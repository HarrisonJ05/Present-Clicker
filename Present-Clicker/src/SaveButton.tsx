import {motion} from 'motion/react'
import {store} from './Store'
import ky from 'ky'
import UserSaveType from './UserSaveType';


function Save() {

    const {Id, Presents, ClickerLevel, clickerCost} = store();

    async function saveProgress() {
        try{
            const response = await ky.post<UserSaveType>('http://localhost:7116/api/AutoSaveFunction', {json:{Id, Presents, ClickerLevel, clickerCost }}).json();
            console.log("Successfully save at", response.LastSave)
        } catch(error){
            console.error("Failed to save", error)
        }
    }

    return(
        <motion.button whileTap={{scale: 0.9}} onClick={saveProgress} className='absolute flexbox left-4 -top-2 bg'>
          <img src='/imgs/XmasButtons.svg' className='w-28 z-0 h-auto flexbox ' />
          <p className='absolute flexbox top-1.8rem right-9 font-bold text-lg'>Save</p>
        </motion.button>
    )
}

export default Save;