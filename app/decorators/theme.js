import React from 'react';
import Colors from 'material-ui/lib/styles/colors';

let ThemeManager = new (require('material-ui/lib/styles/theme-manager'))();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

const theme = (Component) => {
  return class Theme extends React.Component {

    static childContextTypes = {muiTheme: React.PropTypes.object}
  
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      ThemeManager.setPalette({
        accent1Color: Colors.deepOrange500,
      });
    }
    render() {
      return <Component {...this.props } { ...this.state }/>;
    }
  };
};

export default () => {
  return (target) => theme(target);
};