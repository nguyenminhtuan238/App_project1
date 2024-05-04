import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { fireStore, storage } from '../../commons/themes/firebaseConfig';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from 'firebase/storage';

const certificationFireBase = {
  async getbyidcertification(iduser: string) {
    const docRef = doc(fireStore, 'Certification', iduser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), success: true };
    } else {
      return { message: 'No such document!', success: false };
    }
  },
  async Addcertification(data: object, iduser: string) {
    await setDoc(doc(fireStore, 'Certification', iduser), data);
  },
  async updatecertification(data: object, iduser: string) {
    const washingtonRef = doc(fireStore, 'Certification', iduser);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, data);
  },
  async uploadToFirebase(uri: any, name: any, key: string, iduser: string) {
    const fetchResponse = await fetch(uri);
    const theBlod = await fetchResponse.blob();
    const storageRef = ref(storage, `images/${name}`);

    const uploadTask = uploadBytesResumable(storageRef, theBlod);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

        return progress;
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
          if (key == 'image') {
            await this.updatecertification({ image: downloadUrl }, iduser);
          }
          if (key == 'image2') {
            await this.updatecertification({ image2: downloadUrl }, iduser);
          }
          if (key == 'image3') {
            await this.updatecertification({ image3: downloadUrl }, iduser);
          }
        });
      }
    );
    return uploadTask;
  },
};
export default certificationFireBase;
