import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Dimensions, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {RFValue} from 'react-native-responsive-fontsize';

import {Colors, FONTS} from 'styles';

import AuthStackScreen from './auth';
import AppStackScreen from './app';

const {width} = Dimensions.get('window');

const RootStack = createNativeStackNavigator();
const RootStackScreen = ({userToken}) => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="app" component={AppStackScreen} />
    </RootStack.Navigator>
  );
};

const RootNavigator = () => {
  const userToken = useSelector('state => state.auth.userToken'); // get token from redux
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={Colors.PRIMARY} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  logo: {
    width: width * 0.183,
    height: width * 0.28,
    marginVertical: width * 0.02,
  },
  title: {
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(18),
    color: Colors.BLACK,
  },
});

export default RootNavigator;
