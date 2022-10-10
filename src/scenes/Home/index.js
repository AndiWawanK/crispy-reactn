import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Container, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';
import useHome from './useHome';

const Home = ({navigation}) => {
  const {loading} = useHome(navigation);
  return (
    <Container
      backgroundColor={Colors.WHITE}
      barColor={Colors.WHITE}
      barStyle="dark-content">
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </Container>
  );
};

export default Home;
