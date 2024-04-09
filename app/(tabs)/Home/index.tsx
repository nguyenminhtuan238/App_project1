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
 
  return (
    <LayoutScreen>
     
       
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
