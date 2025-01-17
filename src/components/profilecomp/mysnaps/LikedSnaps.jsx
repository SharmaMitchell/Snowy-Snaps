import { motion } from 'framer-motion'
import useShowLiked from '../../hooks/useShowLiked'

const LikedSnaps = ({ userID, setSelectedImg, setImgData }) => {
  const { docs } = useShowLiked(userID)

  return (
    <div className=" h-full">
      <div className="mx-2 mt-6 flex flex-col items-center justify-center sm:mx-10 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-60">
        <div className="mx-auto mx-4 mt-4 columns-2 gap-3 space-y-3 pb-28 md:columns-2 lg:columns-3 xl:columns-4 ">
          {docs &&
            docs.map((doc) => (
              <motion.div
                className="break-inside-avoid"
                key={doc.id}
                layout
                onClick={() => {
                  setSelectedImg(doc.url)
                  setImgData({
                    user: doc.user,
                    userid: doc.userid,
                    emotion: doc.emotion,
                    emotion2: doc.emotion2,
                    emotion3: doc.emotion3,
                    createdAt: doc.createdAt,
                  })
                }}>
                <motion.img
                  src={doc.url}
                  className="h-full w-full rounded-lg object-cover opacity-80 hover:opacity-100"
                  loading="lazy"
                  alt="huskypic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default LikedSnaps
