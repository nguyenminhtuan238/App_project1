import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore';
import { fireStore } from '../../commons/themes/firebaseConfig';

const DeliveryAddressFireBase = {
  async getallCarDeliveryAddressn(iduser: string) {
    const docSnap = await getDocs(collection(fireStore, 'DeliveryAddress'));
    const DeliveryAddressid = docSnap.docs
      .filter((item) => item.data().ID_User === iduser)
      .map((item) => {
        return { id: item.id, ...item.data() };
      });
    if (DeliveryAddressid.length !== 0) {
      return { DeliveryAddressid, success: true };
    } else {
      return { message: 'No such document!', success: false };
    }
  },
  async getbyidCarDeliveryAddress(id: string) {
    const docRef = doc(fireStore, 'DeliveryAddress', id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), success: true };
    } else {
      return { message: 'No such document!', success: false };
    }
  },
  async AddCarDeliveryAddress(data: object) {
    const IDDeliveryAddress = await addDoc(
      collection(fireStore, 'DeliveryAddress'),
      data
    );
    return IDDeliveryAddress;
  },
  async updateCarDeliveryAddress(data: object, id: string) {
    const updatesetting = doc(fireStore, 'DeliveryAddress', id);
    await updateDoc(updatesetting, data);
  },
  async DeleteDeliveryAddress(id: string) {
    await deleteDoc(doc(fireStore, 'DeliveryAddress', id));
  },
};
export default DeliveryAddressFireBase;
