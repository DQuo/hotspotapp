import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function NavigationBar({ title, leftText, onPressLeftText }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftText}
        onPress={onPressLeftText}
      >
        <Text>
          {leftText}
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  )
}

NavigationBar.propTypes = {
  title: PropTypes.string,
  leftText: PropTypes.string,
  onPressLeftText: PropTypes.func,
}

NavigationBar.defaultProps = {
  title: '',
  leftText: '',
  onPressLeftText: () => {},
}