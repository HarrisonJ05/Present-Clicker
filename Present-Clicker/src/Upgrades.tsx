import {store} from './Store';
import {motion} from 'motion/react';

function Upgrades() {


    return (
        <>
            <div className='absolute bg-top-band w-80 h-svh top-24 right-9'>
                <h2 className='font-bold flexbox'>Upgrades</h2>
                <ul>
                    <div>
                        <li>
                            <img className=' flexbox w-10 h-10' src="/imgs/tap.png" />
                            <h3 className='flexbox'>Click</h3>
                            <p className='flexbox'>Presents per click x2</p>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Upgrades;

