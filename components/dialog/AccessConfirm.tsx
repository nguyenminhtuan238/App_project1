import { View, Text, Pressable } from 'react-native';
import { Dialog } from '@rneui/themed';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { RootState, AppDispatch } from '../../commons/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDialog } from '../../commons/store/dialog';

export default function AccessConfirm() {
  const dialog = useSelector((state: RootState) => state.dialog);
  const dispatch: AppDispatch = useDispatch();
  const toggleDialog1 = () => {
    dispatch(toggleDialog());
  };
  return (
    <View>
      <Dialog isVisible={dialog.Access}>
        <Dialog.Loading />
      </Dialog>
      <Dialog isVisible={dialog.Access}>
        <Dialog.Title title="액세스 허용" titleStyle={{ fontSize: 20 }} />
        <Text>
          SSULK는 앱이 닫혀 있거나 사용하지 않는 동안에도 위치 데이터를 수집하고
          해당 데이터를 사용하여 광고를 제공합니다.
        </Text>
        <View className="mt-5">
          <Text>필수 접근권한</Text>
          <View className="bg-[#f5f3f3] flex flex-row p-3 mt-2 rounded-[3px]">
            <View className="basis-1/6 my-2">
              <Ionicons name="location-sharp" size={24} color="black" />
            </View>
            <View className="basis-2/3  flex flex-cols justify-center">
              <Text className=" font-bold">현재</Text>
              <Text className="text-[#a1a0a0]">
                현재 위치 표시 및 데이터 수집
              </Text>
            </View>
          </View>
        </View>
        <View className="mt-5">
          <Text>액세스 선택</Text>
          <View className="bg-[#f5f3f3] flex flex-row p-3 mt-2 rounded-[3px]">
            <View className="basis-1/6 my-2">
              <AntDesign name="camera" size={24} color="black" />
            </View>
            <View className="basis-2/3  flex flex-cols justify-center">
              <Text className=" font-bold">카메라</Text>
              <Text className="text-[#a1a0a0]">
                카메라를 사용하고 사진을 찍으세요
              </Text>
            </View>
          </View>
        </View>
        <Text className="text-[12px] text-[#a1a0a0]">
          선택적 접근 권한을 허용하지 않아도 이 기능을 위해 ibis를 사용할 수
          있습니다.
        </Text>
        <View className=" flex justify-center items-center mt-5">
          <Pressable
            className=" bg-[#ecc647] p-5  rounded-[10px]  w-full"
            onPress={toggleDialog1}
          >
            <Text className="text-white text-center text-[20px]">시작하다</Text>
          </Pressable>
        </View>
      </Dialog>
    </View>
  );
}
