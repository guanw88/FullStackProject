import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';

class HomePageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Slider millisecToNextSlide={20000} />
    );
  }


}

export default HomePageContent;
