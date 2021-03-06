// Imports(CORE): React, React Native, Expo
import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types';

// Imports: Custom Components
import AuthorRow from './AuthorRow';



export default class Card extends React.Component {

  state = {
    loading: false
  }

  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func
  }

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {}
  }

  handleLoad = () => {
    this.setState({ loading: false });
  }

  render() {
    const { fullname, image, linkText, onPressLinkText } = this.props;
    const { loading } = this.state;

    return (
      <View>
        <AuthorRow 
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <View>
          { loading && <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} /> }
        </View>
        <Image 
          style={styles.image}
          source={image}
          onLoad={this.handleLoad}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create(
  {
    image: {
      aspectRatio: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
  }
);