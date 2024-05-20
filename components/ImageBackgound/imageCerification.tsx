import { Text, ImageBackground, View } from 'react-native';
export default function ImageCerification(props: any) {
  return (
    <ImageBackground
      source={{ uri: props.image }}
      className={props.class}
      resizeMode="stretch"
    >
      <Text
        className="text-[#eeea14]"
        style={{ fontFamily: 'Pretendard-Bold' }}
      >
        {props.number}
      </Text>
      <Text
        className="text-[#a1a0a0] "
        style={{ fontFamily: 'Pretendard-Bold' }}
      >
        {props.text}
      </Text>
      <Text
        className="text-[#eeea14] text-[9px]"
        style={{ fontFamily: 'Pretendard-Bold' }}
      >
        {props.text2}
      </Text>
    </ImageBackground>
  );
}
