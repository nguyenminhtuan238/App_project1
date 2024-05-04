import ApiServices from '../themes/apiconfig';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
} from 'firebase/firestore';
import { fireStore } from '../../commons/themes/firebaseConfig';
const pointFireBase = {
  async getbyidpoint(iduser: string) {
    const docSnap = await getDocs(collection(fireStore, 'Status'));
    const Pointid = docSnap.docs
      .filter((item) => item.data().ID_User === iduser)
      .map((item) => item.data());
    if (Pointid.length !== 0) {
      return { Pointid, success: true };
    } else {
      return { message: 'No such document!', success: false };
    }
  },
  async Addpointminus(data: object) {
    await addDoc(collection(fireStore, 'Status'), {
      ...data,
      exchange: 'minus',
    });
  },
  async Addpointadd(data: object) {
    await addDoc(collection(fireStore, 'Status'), { ...data, exchange: 'add' });
  },
  async Addpointother(data: object) {
    await addDoc(collection(fireStore, 'Status'), {
      ...data,
      exchange: 'other',
    });
  },
  async updatepoint(data: object, iduser: string) {
    const updatesetting = doc(fireStore, 'Status', iduser);

    // Set the "capital" field of the city 'DC'
    await updateDoc(updatesetting, data);
  },
};
export default pointFireBase;
