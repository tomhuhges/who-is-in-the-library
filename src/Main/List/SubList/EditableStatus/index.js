import React from 'react'
import firebase from 'firebase'

class EditableStatus extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.updateStatus = this.updateStatus.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu(e) {
    if (~e.nativeEvent.target.className.indexOf('dropdown')) {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  }
  updateStatus(e) {
    const statusRef = firebase.database().ref('users/' + this.props.uid + '/attendance')
    statusRef.set(+e.nativeEvent.target.id)
    this.setState({
      isOpen: false
    })
  }
  render() {
    const className = this.state.isOpen ? '': 'dn'
    return (
      <div className="relative">
        <p
          className={"dropdown bg-" + this.props.color + " white b ph2 pv1 br2 mb0"}
          onClick={this.toggleMenu}>
          {this.props.status} &#x25BC;
        </p>
        <div className={className + ' absolute right-0 w5 shadow-4 br3'}>
          <ul className="list pa0 bg-white tr">
            <li id="2" className="bb b--near-white pa2" onClick={this.updateStatus}>
              <span className={this.props.status === 'Going' ? 'green' : 'dn'}>&#x2714; </span>
              Going
            </li>
            <li id="1" className="bb b--near-white pa2" onClick={this.updateStatus}>
              <span className={this.props.status === 'Maybe Going' ? 'yellow' : 'dn'}>&#x2714; </span>
              Maybe Going</li>
            <li id="0" className="bb b--near-white pa2" onClick={this.updateStatus}>
              <span className={this.props.status === 'Not Going' ? 'red' : 'dn'}>&#x2714; </span>
              Not Going</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default EditableStatus
