import { projectStorage } from '../../../firebase/config'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'

const ShowcaseImg = () => {
  const { currentUser, logout } = useAuth()
  const myImages = [
    { id: 'myimg1' },
    { id: 'myimg2' },
    { id: 'myimg3' },
    { id: 'myimg4' },
    { id: 'myimg5' },
  ]
  var storageRef

  if (currentUser) {
    storageRef = projectStorage.ref(currentUser.uid + '/uploadedpics')
    storageRef
      .listAll()
      .then(function (result) {
        let i = 1
        let img = ''
        result.items.forEach(function (imageRef) {
          img = document.getElementById('myimg' + i)
          displayImage(imageRef, img)
          i++
          //console.log(img)
          // And finally display them
        })
      })
      .catch(function (error) {
        "Can't load images"
      })
  }
  function displayImage(imageRef, img) {
    imageRef
      .getDownloadURL()
      .then(function (url) {
        img.setAttribute('src', url)
      })
      .catch(function (error) {
        // Handle any errors
      })
  }
  return (
    <div className="group relative top-0 left-0 flex cursor-pointer">
      <img
        className="relative top-1 left-10 z-10 h-48 w-48
         -rotate-3 rounded-md object-cover object-center shadow-lg transition duration-500 ease-in-out
         group-hover:translate-y-4 group-hover:-translate-x-32 group-hover:-rotate-12  "
        src="src\assets\profile.png"
        alt="pic"
        id="myimg1"
      />
      <img
        className="absolute left-4 top-4 z-20 h-48 w-48 rotate-2 rounded-md object-cover  object-center shadow-lg
          transition duration-500 ease-in-out
        group-hover:-translate-y-2 group-hover:-translate-x-10 group-hover:-rotate-6"
        src="src\assets\profile.png"
        alt="pic"
        id="myimg2"
      />
      <img
        className="absolute left-8 top-7 z-30  h-48 w-48 -rotate-2 rounded-md object-cover object-center shadow-lg
        transition duration-500 ease-in-out group-hover:-translate-y-4 group-hover:translate-x-4 group-hover:rotate-3"
        src="src\assets\profile.png"
        alt="pic"
        id="myimg3"
      />
      <img
        className="absolute left-14 top-6 z-40 h-48 w-48 rotate-1 rounded-md object-cover object-center shadow-lg
         transition duration-500 ease-in-out
        group-hover:translate-y-2 group-hover:translate-x-16 group-hover:rotate-12"
        src="src\assets\profile.png"
        alt="pic"
        id="myimg4"
      />
    </div>
  )
}

export default ShowcaseImg
