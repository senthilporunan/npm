import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link, Navigation } from 'react-router';
import { connect } from 'react-redux';

class PackMan extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (<div>
        <h1>Hello World!!</h1>
      </div>)
  }
}
