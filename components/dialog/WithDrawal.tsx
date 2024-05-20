import { View, Text, Pressable } from 'react-native';
import { Dialog } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { RootState, AppDispatch } from '../../commons/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDialog2 } from '../../commons/store/dialog';

export default function DiaLogWithDrawal() {
  const dialog = useSelector((state: RootState) => state.dialog);
  const dispatch: AppDispatch = useDispatch();
  const tDialog = () => {
    dispatch(toggleDialog2());
  };
  return (
    <View>
      <Dialog isVisible={dialog.WithDrawal} onBackdropPress={tDialog}>
        <View className="text-[15px] flex justify-center items-center">
          <AntDesign name="checkcircleo" size={40} color="orange" />
        </View>
        <View className="flex flex-cols justify-center items-center my-3 ">
          <Text
            className="text-[15px] font-bold "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            출금신청이
          </Text>
          <Text
            className="text-[15px] font-bold "
            style={{ fontFamily: 'Pretendard-Bold' }}
          >
            완료되었습니다
          </Text>
        </View>
        <Text
          className="text-[12px] text-[#7e7e7e]"
          style={{ fontFamily: 'Pretendard-Bold' }}
        >
          출금 신청한 금액은 신청일 기준 익일 입금될 예정입니다. (영업일
          기준/주말, 공휴일 제외)
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
              확인
            </Text>
          </Pressable>
        </View>
      </Dialog>
    </View>
  );
}
