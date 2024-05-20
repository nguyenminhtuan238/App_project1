import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { fireStore } from '../themes/firebaseConfig';

const userFireBase = {
  async getuser() {
    const docSnap = await getDocs(collection(fireStore, 'Users'));
    return docSnap;
  },
  async getbyiduser(iduser: string) {
    const docRef = doc(fireStore, 'Users', iduser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), success: true };
    } else {
      return { message: 'No such document!', success: false };
    }
  },
  async Adduser(data: object, iduser: string) {
    await setDoc(doc(fireStore, 'Users', iduser), data);
  },
  async updateuser(data: object, iduser: string) {
    const updatesetting = doc(fireStore, 'Users', iduser);

    await updateDoc(updatesetting, data);
  },
};
export default userFireBase;
