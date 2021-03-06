import React from 'react';
import PropTypes from 'prop-types';
import { Text, ActivityIndicator, SafeAreaView, ViewPropTypes } from 'react-native';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';



export default class Feed extends React.Component {

  state = {
    loading: true,
    error: false,
    items: []
  }

  static propTypes = {
    style: ViewPropTypes.style
  }

  static defaultProps = {
    style: null
  }

  async componentDidMount() {
    try {
      const items = await fetchImages();
      this.setState( { loading: false, items: items } );
    } 
    catch (e) {
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    const { style } = this.props;
    const { loading, error, items } = this.state;

    if (loading) {
      return <ActivityIndicator size='large' /> ;
    }

    if (error) {
      return <Text>Error...</Text> ;
    }

    return (
      <SafeAreaView style={style}>
        <CardList items={items} />
      </SafeAreaView>
    );

  }
}