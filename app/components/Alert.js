import React from 'react';
import AlertLib from 'react-bootstrap/lib/Alert';

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.handleAlertShow = this.handleAlertShow.bind(this);

    this.state = {
      alertVisible:this.props.added
    };
  }


  render() {
    if (this.state.alertVisible) {
      return (
        <AlertLib bsStyle='danger' onDismiss={this.handleAlertDismiss} dismissAfter={2000}>
          <h4>Oh snap! You got an error!</h4>
        </AlertLib>
      );
    }else{
      return(<div/>);
    }

  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
}
