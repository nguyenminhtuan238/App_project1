import { View, Text, Pressable } from 'react-native';
import { Dialog } from '@rneui/themed';
import { RootState, AppDispatch } from '../../commons/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDialog } from '../../commons/store/dialog';

export default function AllowAccess() {
  const dialog = useSelector((state: RootState) => state.dialog);
  const dispatch: AppDispatch = useDispatch();
  const toggleDialog1 = () => {
    dispatch(toggleDialog());
  };
  return (
    <View>
      <Dialog isVisible={dialog.confirm} onBackdropPress={toggleDialog1}>
        <Dialog.Loading />
      </Dialog>
      <Dialog isVisible={dialog.confirm} onBackdropPress={toggleDialog1}>
        <Text className="text-[15px] font-bold">
          위치 권한을<Text className="text-[#ecc647]">'항상 허용'</Text>으로
          변경해 주세요.
        </Text>
        <View className="flex flex-cols justify-center items-center my-3 ">
          <Text className="text-[12px] ">
            '항상 허용'을 하지 않으면 실행이 매우 어렵습니다. 캠페인 및 관련
            정보를 제공합니다.
          </Text>
        </View>
        <Text className="text-[15px] ">
          [애플리케이션 설정{'>'}권한{'>'}위치]에서 설정하실 수 있습니다.
        </Text>
        <View className=" flex justify-center items-center mt-5">
          <Pressable
            className=" bg-[#ecc647] p-3  rounded-[10px]  w-full"
            onPress={toggleDialog1}
          >
            <Text className="text-white text-center text-[20px]">
              설정으로 바로 가기
            </Text>
          </Pressable>
        </View>
        <View className=" flex flex-row justify-end items-center mt-5">
          <Text className="text-[#ecc647] text-center text-[10px]">
            다음에 그렇게 하세요
          </Text>
        </View>
      </Dialog>
    </View>
  );
}
