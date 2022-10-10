import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'components';
import styles from './styles';

const Header = props => {
  const {navigation, smTitle, lgTitle} = props;
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.leftButton}>
          <Icon
            name="arrowleft"
            type="AntDesign"
            style={styles.leftButtonIcon}
          />
        </TouchableOpacity>
        {smTitle && (
          <View style={styles.bodyCenter}>
            <Text numberOfLines={1} style={styles.smTitle}>
              {smTitle}
            </Text>
          </View>
        )}
        {lgTitle && (
          <View style={styles.bodyStart}>
            <Text numberOfLines={1} style={styles.lgTitle}>
              {lgTitle}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;
