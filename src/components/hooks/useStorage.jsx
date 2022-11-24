import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from '../../../firebase/config';
import { useAuth } from "../../contexts/AuthContext"
import {
    getFirestore, collection, onSnapshot, getDoc,
    addDoc, deleteDoc, doc, updateDoc
  } from 'firebase/firestore'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const { currentUser } = useAuth()
    

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('users');
        const db = getFirestore()
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            //const createdAt = timestamp();
            //collectionRef.add({ url});
            let docRef = doc(db, 'users', currentUser.uid)
            setUrl(url);
            await updateDoc(docRef, {
                profilePic: url
            });
            
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage;