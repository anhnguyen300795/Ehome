import React from 'react';
import classnames from 'classnames'

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      opened: false,
      transparent: true
    }
    this.currentScrollValue = 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollValue = window.pageYOffset;
    const { transparent } = this.state
    if ((scrollValue > 200 && transparent) || (scrollValue < 200 && !transparent)) {
      this.setState({...this.state, transparent: !this.state.transparent });
    }
  }

  handleClick = () => {
    this.props.handleClick()
    this.setState({...this.state, clicked: true, opened: !this.state.opened });
  }

  render() {
    const { clicked, opened, transparent } = this.state
    const builtClassName = classnames('menu', {
      'opened': clicked && opened,
      'closed': clicked && !opened,
      'color-bg': !transparent && !opened
    })
    return (
      <div 
        className={builtClassName}
        onClick={this.handleClick}
        >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    );
  }
}

export default MenuButton
