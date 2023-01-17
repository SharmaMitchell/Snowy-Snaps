import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DateTime } from 'luxon'
import { useAuth } from '../../contexts/AuthContext'
import LikedButton from './LikedButton'
import IsLiked from './isLiked'

const Modal = ({ selectedImg, setSelectedImg, imgData, setImgData }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(0)
  const { currentUser } = useAuth()
  const userid = currentUser.uid
  const date = new Date(imgData.createdAt.seconds * 1000)
  const newdate = date.toLocaleString(DateTime.DATE_MED)
  const finaldate = newdate.substring(0, 12)
  const emotions = [
    [{ label: 'happy' }, { src: 'src/assets/emojis/happy.png' }],
    [{ label: 'silly' }, { src: 'src/assets/emojis/silly.png' }],
    [{ label: 'relaxed' }, { src: 'src/assets/emojis/relaxed.png' }],
    [{ label: 'excited' }, { src: 'src/assets/emojis/excited.png' }],
    [{ label: 'confused' }, { src: 'src/assets/emojis/confused.png' }],
    [{ label: 'mischievous' }, { src: 'src/assets/emojis/mischievous.png' }],
    [{ label: 'stubborn' }, { src: 'src/assets/emojis/stubborn.png' }],
    [{ label: 'sad' }, { src: 'src/assets/emojis/sad.png' }],
  ]

  IsLiked(imgData.createdAt, userid, setIsLiked, setLikes)

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
      setImgData({
        user: '',
        emotion: '',
        createdAt: '',
      })
    }
  }
  function getEmotionImg(emotion) {
    for (let i = 0; i < emotions.length; i++) {
      if (emotions[i][0].label === emotion) {
        return emotions[i][1].src
      }
    }
    return
  }
  const handleLike = () => {
    isLiked ? '' : setIsLiked(true)
  }

  return (
    <motion.div
      className="backdrop fixed top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black/70 lg:flex-row"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="md:max-w-5/6 mb-28 flex min-w-[15%] flex-col items-center justify-center bg-white md:mb-4
        md:mb-0   md:bg-transparent  lg:mb-10 lg:h-1/2  lg:flex-row  xl:h-[60%]"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      >
        <div className="flex h-full w-full flex-col  items-center justify-center">
          <motion.img
            src={selectedImg}
            className="mx-2 block rounded-lg border-4
          border-white md:h-full md:rounded-t-lg lg:rounded-lg xl:h-full xl:w-full "
            alt="modalpic"
          />
        </div>
        <motion.div
          className="flex h-8 items-start justify-center gap-8 rounded-b-lg   md:mt-6
          md:h-24  md:w-96 md:items-center md:rounded-lg  md:bg-cream   lg:mt-0  lg:ml-6 lg:h-56 lg:w-40 lg:flex-col lg:gap-0 lg:bg-cream"
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
        >
          <div
            className="mt-2 flex h-2 w-full items-center justify-center gap-8 md:ml-4 md:mt-0  md:h-10 md:w-1/3
            md:flex-col md:gap-0 lg:mb-4 lg:ml-0 lg:mt-4   lg:w-full"
          >
            <p className="text-center font-header text-xl text-blue lg:mb-2">
              By {imgData.user}
            </p>
            <p className="text-center font-header text-sm text-blue lg:mb-4  ">
              {finaldate}
            </p>
          </div>
          <div
            className="absolute top-12 mt-4 flex w-60 items-center justify-center  gap-6
             rounded-lg bg-cream md:static  md:mt-0 md:w-2/3 md:flex-row lg:w-40 lg:flex-col lg:gap-0"
          >
            <div className=" flex  gap-2  lg:mb-2 ">
              {imgData.emotion && (
                <img
                  className="h-10 w-9"
                  src={getEmotionImg(imgData.emotion)}
                  alt={imgData.emotion}
                />
              )}
              {imgData.emotion2 && (
                <img
                  className="h-10 w-9"
                  src={getEmotionImg(imgData.emotion2)}
                  alt={imgData.emotion2}
                />
              )}
              {imgData.emotion3 && (
                <img
                  className="h-10 w-9"
                  src={getEmotionImg(imgData.emotion3)}
                  alt={imgData.emotion3}
                />
              )}
            </div>
            {!isLiked && (
              <motion.button
                className="mb-2 flex  items-center justify-center rounded-b-lg md:bg-transparent"
                onClick={handleLike}
                whileHover={{ scale: 1.2 }}
              >
                <p className="absolute font-header text-lg text-blue ">
                  {likes}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-heart"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#2D4550"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
              </motion.button>
            )}
            {isLiked && (
              <LikedButton
                imgdata={imgData.createdAt}
                setIsLiked={setIsLiked}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Modal
