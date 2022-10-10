import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: width * 0.14,
    paddingHorizontal: width * 0.04,
    backgroundColor: Colors.WHITE,
    borderBottomWidth: width * 0.003,
    borderBottomColor: Colors.LINE,
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButton: {
    // flex: 0.3,
    marginRight: width * 0.04,
  },
  leftButtonIcon: {
    fontSize: RFValue(22),
    color: Colors.DRAKER_BLACK,
  },
  bodyCenter: {
    flex: 1,
    justifyContent: 'center',
  },
  bodyStart: {
    flex: 1,
    justifyContent: 'center',
  },
  smTitle: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(14),
    color: Colors.BLACK,
    marginTop: width * 0.005,
  },
  lgTitle: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(17),
    color: Colors.BLACK,
    marginTop: width * 0.005,
  },
});
