import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  Keyboard,
  TextInput,
  StyleSheet,
} from 'react-native';
import LayoutScreen from '../../../components/user/layout/layout';
import { Logout } from '../../../commons/store/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store';
import { getbyidPoint, getSearchPoint } from '../../../commons/store/point';
import { getStudent } from '../../../commons/store/Student';
import { Feather, Entypo } from '@expo/vector-icons';
export default function Home() {
  const Point = useSelector((state: RootState) => state.point);
  const dispatch: AppDispatch = useDispatch();
  const [Clicked, setClicked] = useState(false);
  const [searchPhrase, setsearchPhrase] = useState('');
  const [ID_HS, setID_HS] = useState(1);
  useEffect(() => {
    async function GetPoint() {
      try {
        const st = await dispatch(getStudent());
        const get = unwrapResult(st);
        setID_HS(get[0].ID_users);
        const res = await dispatch(getbyidPoint(get[0].ID_users));
        unwrapResult(res);
      } catch (error) {
        console.log(error);
      }
    }
    GetPoint();
  }, []);
  useEffect(() => {
    async function SearchPoint() {
      try {
        const data: object = {
          ID_HS,
          Search: searchPhrase,
        };
        const res = await dispatch(getSearchPoint(data));
        unwrapResult(res);
      } catch (error) {
        console.log(error);
      }
    }
    SearchPoint();
  }, [searchPhrase]);
  return (
    <LayoutScreen>
      {Point.isloading ? (
        <View className="">
          <View style={styles.container}>
            <View
              style={
                Clicked
                  ? styles.searchBar__clicked
                  : styles.searchBar__unclicked
              }
            >
              {/* search Icon */}
              <Feather
                name="search"
                size={20}
                color="black"
                style={{ marginLeft: 1 }}
              />
              {/* Input field */}
              <TextInput
                style={styles.input}
                placeholder="Tìm Kiếm môn học"
                value={searchPhrase}
                onChangeText={setsearchPhrase}
                onFocus={() => {
                  setClicked(true);
                }}
              />
              {/* cross Icon, depending on whether the search bar is clicked or not */}
              {Clicked && (
                <Entypo
                  name="cross"
                  size={20}
                  color="black"
                  style={{ padding: 1 }}
                  onPress={() => {
                    setsearchPhrase('');
                  }}
                />
              )}
            </View>
            {Clicked && (
              <View>
                <Pressable
                  onPress={() => {
                    Keyboard.dismiss();
                    setClicked(false);
                  }}
                >
                  <Text className="text-[15px] text-indigo-500 p-2 ">
                    Thoát
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
          {Point.Point.map((item: any) => {
            return (
              <View
                key={item.ID_D}
                className=" flex flex-row  items-center space-x-2 bg-gray-200 p-5 my-1"
              >
                <Text className="basis-1/2 "> Môn: {item.Ten_Mon}</Text>
                <Text className=" ">Điểm: {item.DiemThi}</Text>
              </View>
            );
          })}
        </View>
      ) : (
        <View className="flex-1 justify-center h-screen">
          <ActivityIndicator size="large" />
        </View>
      )}
    </LayoutScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
});
