import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore';
import { fireStore } from '../../commons/themes/firebaseConfig';

const CarRegistrationFireBase = {
  async getallCarRegistration(iduser: string) {
    const docSnap = await getDocs(collection(fireStore, 'CarRegistration'));
    const CarRegistrationid = docSnap.docs
      .filter((item) => item.data().ID_user === iduser)
      .map((item) => {
        return { id: item.id, ...item.data() };
      });
    if (CarRegistrationid.length !== 0) {
      return { CarRegistrationid, success: true };
    } else {
      return { message: 'No such document!', success: false };
    }
  },
  async getbyidCarRegistration(id: string) {
    const docRef = doc(fireStore, 'CarRegistration', id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), success: true };
    } else {
      return { message: 'No such document!', success: false };
    }
  },
  async AddCarRegistration(data: object) {
    const IDCarRegistration = await addDoc(
      collection(fireStore, 'CarRegistration'),
      data
    );
    return IDCarRegistration;
  },
  async updateCarRegistration(data: object, id: string) {
    const updatesetting = doc(fireStore, 'CarRegistration', id);
    await updateDoc(updatesetting, data);
  },
  async DeleteCarRegistration(id: string) {
    await deleteDoc(doc(fireStore, 'CarRegistration', id));
  },
};
export default CarRegistrationFireBase;
