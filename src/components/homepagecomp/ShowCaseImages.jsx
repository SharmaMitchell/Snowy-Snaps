import React from 'react'
import { useRef, useEffect } from 'react'
import useIntersection from '../hooks/useIntersection'
import { motion } from 'framer-motion'
import LargeButton from './LargeButton'

const ShowCaseImages = ({ move, setMove }) => {
  const ref = useRef()
  const inViewport = useIntersection(ref, '-100px')
  useEffect(() => {
    if (window.innerWidth < 768) {
      setTimeout(function () {
        inViewport ? setMove(true) : ''
      }, 500)
      !inViewport ? setMove(false) : ''
    }
  }, [inViewport])

  return (
    <motion.div
      className="clip-img group z-20    mb-48 mt-12  h-[550px]  w-[550px] rounded-md bg-sand 2xl:h-[620px] 2xl:w-[620px]  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}>
      <div className="group relative top-0 left-0 z-20 flex h-full w-full rounded-md    ">
        <div
          onMouseOver={() => setMove(true)}
          onMouseOut={() => setMove(false)}
          ref={ref}
          className="imagecontainer absolute top-0 left-0 z-50 h-full w-full   rounded-md bg-transparent">
          <div className="absolute bottom-9 left-44 z-50 cursor-pointer drop-shadow-lg">
            <LargeButton title="Show me more" link="/watch" />
          </div>
        </div>

        <img
          src="src/assets/showcaseimages/huskytop.jpg"
          alt="huskypic"
          className={`${
            move ? '-translate-x-10 translate-y-36 -rotate-3' : 'rotate-[18deg]'
          } xl:max-h-80 2xl:max-h-80 relative left-40 -top-52 z-20 
       w-56 rounded-md  object-cover  drop-shadow-lg
       transition duration-500 ease-in-out md:h-40  lg:h-56 xl:h-[21rem]  2xl:h-[22rem]  2xl:w-60`}
        />
        <img
          src="src/assets/showcaseimages/huskybottomright.jpg"
          alt="huskypic"
          className={`${
            move ? 'z-0 translate-y-10 translate-x-20 rotate-6' : 'z-0 -rotate-2'
          } xl:max-h-80 2xl:max-h-80 absolute
      -right-10 bottom-10 w-[21rem]  rounded-md object-cover   drop-shadow-lg  transition duration-500 ease-in-out
       md:h-40 md:h-56    lg:h-56  xl:h-56  2xl:h-60 2xl:w-[22rem]`}
        />

        <img
          src="src/assets/showcaseimages/huskymiddle.jpg"
          alt="huskygif"
          className={`${
            move ? 'translate-y-20 translate-x-20 rotate-1' : '-rotate-3'
          } xl:max-h-80 2xl:max-h-80 absolute top-52
      left-32 z-0 w-[21rem] rounded-md    object-cover drop-shadow-lg  transition 
      duration-500 ease-in-out md:h-40  lg:h-56 xl:h-56  2xl:h-60  2xl:w-[22rem]`}
        />
        <img
          src="src/assets/showcaseimages/huskybottomleft.jpg"
          alt="huskygif"
          className={`${
            move ? 'z-40 translate-x-20 -translate-y-16 rotate-3' : 'z-40 -rotate-12'
          } xl:max-h-80 2xl:max-h-80 absolute -bottom-20
      -left-14  w-56  rounded-md object-cover  drop-shadow-lg 
      transition duration-500 ease-in-out  md:h-40 lg:h-56  xl:h-[21rem]  2xl:h-[22rem]`}
        />
        <img
          src="src/assets/showcaseimages/huskytopright.jpg"
          alt="huskygif"
          className={`${
            move ? 'translate-y-20 -translate-x-10 rotate-6' : '-rotate-3'
          } xl:max-h-80 2xl:max-h-80 absolute -top-20
      -right-8 z-20 w-56 rounded-md    object-cover drop-shadow-lg  transition 
      duration-500 ease-in-out md:h-40  lg:h-56 xl:h-[21rem]  2xl:h-[22rem]  2xl:w-60`}
        />
        <img
          src="src/assets/showcaseimages/huskytopleft.jpg"
          alt="huskygif"
          className={`${
            move ? 'translate-y-10 -translate-x-32  -rotate-12' : 'rotate-[9deg]'
          } xl:max-h-80 2xl:max-h-80 absolute -top-12
      -left-8 z-20 w-56 rounded-md    object-cover drop-shadow-lg  transition 
      duration-500 ease-in-out md:h-40  lg:h-56 xl:h-[21rem]  2xl:h-[22rem]  2xl:w-60`}
        />
      </div>
    </motion.div>
  )
}

export default ShowCaseImages
