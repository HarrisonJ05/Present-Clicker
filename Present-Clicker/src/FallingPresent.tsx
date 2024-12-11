import {store} from './Store';
import {motion} from 'framer-motion';
import { useEffect } from 'react';

function FallingPresent(){
    const {fallingImg} = store();

    useEffect(() => {
        console.log(fallingImg)
      }, [fallingImg])

  return(
    <>

        {fallingImg.map((img:any) => (
        <motion.img
          key={img.id}
          src="/imgs/gift.png"
          alt="Falling Present"
          className="absolute w-10 h-10"
          style={{ left: `${img.position}%`}}
          initial={{ y: -50, opacity: 1}}
          animate={{ y: '100vh', opacity: 0.8}}
          transition={{ duration: 3, ease: "linear"}}
        />
        ))}
    </>
  )
}

export default FallingPresent;