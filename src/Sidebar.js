import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class SidebarWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentMenu: 'slide',
      side: 'left'
    };
  }

  getItems() {
    let items;
    items = [
      <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Home</span></a>,
      <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>New Entry</span></a>,
      <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Search or Update</span></a>
    ];
    return items;
  }
}

export default Sidebar;