// import { useState, useEffect, useReducer, useMemo, useRef } from 'react';
// import { useRouter } from '@tarojs/taro' // Taro δΈζ Hooks
import { View, Text } from "@tarojs/components";
// import { AtButton, AtInput, AtNavBar } from "taro-ui";
import NavBar from '@components/navBar/index';
import "./index.scss";

const Index = () => {

  return (
    <View className="index">
      <View className='nav-bar'>
        <NavBar title='ζη'></NavBar>
      </View>
      <Text>Hello world!</Text>
    </View>
  );
};

export default Index;
