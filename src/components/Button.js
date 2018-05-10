import * as React from "react"
//import '../styles/Button.sass';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
  }
  
  render() {
    
    const { buttonText , link, buttonClass='button' } = this.props;
    
    return (
      <a href={link} className={[buttonClass, this.state.isToggleOn ? 'ON' : 'OFF'].join(' ')} onClick={this.handleClick}>
        { buttonText }
      </a>
      );
  }
}

export default Button