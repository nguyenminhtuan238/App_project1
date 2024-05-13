import { View, Text, Pressable } from 'react-native';
import { Dialog } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { RootState, AppDispatch } from '../../commons/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDialog1 } from '../../commons/store/dialog';

export default function CertificationConfirm() {
  const dialog = useSelector((state: RootState) => state.dialog);
  const dispatch: AppDispatch = useDispatch();
  const tDialog = () => {
    dispatch(toggleDialog1());
  };
  return (
    <View>
      <Dialog isVisible={dialog.Certification} onBackdropPress={tDialog}>
        <Dialog.Loading />
      </Dialog>
      <Dialog isVisible={dialog.Certification} onBackdropPress={tDialog}>
        <View className="text-[15px] flex justify-center items-center">
          <AntDesign name="checkcircleo" size={40} color="orange" />
        </View>
        <View className="flex flex-cols justify-center items-center my-3 ">
          <Text
            className="text-[15px] font-bold "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            사진 업로드가 완료되었습니다
          </Text>
        </View>
        <Text
          className="text-[12px] "
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          사진 촬영이 잘못되었거나, 검수에 부적합하다고 판단될 경우 재촬영을
          요청할 수 도 있습니다
        </Text>
        <View className=" flex justify-center items-center mt-5">
          <Pressable
            className=" bg-[#ecc647] p-3  rounded-[10px]  w-full"
            onPress={tDialog}
          >
            <Text
              className="text-white text-center text-[20px]"
              style={{ fontFamily: 'Pretendard-Bold' }}
            >
              홈으로
            </Text>
          </Pressable>
        </View>
      </Dialog>
    </View>
  );
}
