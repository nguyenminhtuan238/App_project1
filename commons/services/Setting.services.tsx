import ApiServices from '../themes/apiconfig';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { fireStore } from '../../commons/themes/firebaseConfig';

const settingFireBase = {
  async getsetting() {
    const docSnap = await getDocs(collection(fireStore, 'Settings'));
    return docSnap;
  },
  async getbyidsetting(iduser: string) {
    const docRef = doc(fireStore, 'Settings', iduser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), success: true };
    } else {
      return { message: 'No such document!', success: false };
    }
  },
  async Addsetting(data: object, iduser: string) {
    await setDoc(doc(fireStore, 'Settings', iduser), data);
  },
  async updatesetting(data: object, iduser: string) {
    const updatesetting = doc(fireStore, 'Settings', iduser);

    // Set the "capital" field of the city 'DC'
    await updateDoc(updatesetting, data);
  },
};
export default settingFireBase;
