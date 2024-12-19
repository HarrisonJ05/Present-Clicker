import {store} from './Store';
import {motion} from 'motion/react';

function Upgrades() {
    const {Presents, ClickerLevel, clickerCost, setClicker, setClickerCost} = store()

    function UpgradeClick() {
        if(Presents < clickerCost){
            return
        }
        setClicker(ClickerLevel*2);
        setClickerCost(Math.floor(clickerCost*1.5))
    };


    return (
        <>
            <div className='absolute bg-top-band w-80 h-dvh top-4.5rem right-0'>
                <motion.button whileTap={{scale:0.9}} className='absolute left-56 w-24 h-24 flexbox just'><img src="/imgs/Upgrades.svg"></img></motion.button>
                <h2 className=' pr-12 pt-9 text-3xl text-center justify-center font-bold flexbox'>Upgrades</h2>
                <ul>
                    <div className=" bg-slate-500 w-full absolute flexbox justify-center text-center top-28 left-1">
                        <li>
                            <motion.button whileTap={{scale:0.9}} onClick={UpgradeClick} className='z-0 absolute flexbox -right-1 -bottom-32 w-84'>
                            <img src="/imgs/XmasButtons.svg"></img>
                            <img className='absolute flexbox left-10 top-7.5rem w-10 h-10' src="/imgs/tap.png" />
                            <h3 className='absolute flexbox left-32 top-28 font-bold text-xl'>Click</h3>
                            <img className='absolute flexbox w-6 h-6 top-36 left-32' src="/imgs/gift.png"></img>
                            <p className='absolute flexbox font-semibold left-40 top-36 text-base'>{clickerCost}</p>
                            </motion.button>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Upgrades;

