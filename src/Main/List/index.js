import React from 'react'
import firebase from 'firebase'
import Display from '../Display'
import SubList from './SubList'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yes: [],
      maybe: [],
      no: [],
      message: 'Fetching people...'
    }
  }
  componentDidMount() {
    this.getAttendees()
    const self = this
    const currentUserRef = firebase.database().ref('users/' + this.props.currentUser)
    currentUserRef.on('value', function(snapshot){
      self.state.currentUser = snapshot.val().name
    })
  }
  getAttendees() {
    const self = this
    const attendeesRef = firebase.database().ref('users')
    attendeesRef.on('value', function(snapshot) {
      const attendees = snapshot.val()
      let yes = [], maybe = [], no = []
      for (const attendee in attendees) {
        if (attendees[attendee].attendance === 2) {
          yes.push(attendees[attendee])
        } else if (attendees[attendee].attendance === 1) {
          maybe.push(attendees[attendee])
        } else {
          no.push(attendees[attendee])
        }
      }
      self.setState({
        yes,
        maybe,
        no
      }, function(){self.getMessage()})
    })
  }
  getMessage() {
    let number, people, verb, emoji
    if (this.state.yes.length > 0) {
      number = this.state.yes.length
      people = this.state.yes.length === 1 ? 'person' : 'people'
      verb = 'will'
      emoji = '🎉'
    } else if (this.state.maybe.length > 0) {
      number = this.state.maybe.length
      people = this.state.maybe.length === 1 ? 'person' : 'people'
      verb = 'might'
      emoji = '😐'
    } else {
      number = 'No-one'
      people = ''
      verb = 'will'
      emoji = '☹️'
    }
    this.setState({
      message: `${number} ${people} ${verb} be in the library today. ${emoji}`
    })
  }
  render() {
    return (
      <div className="minh-100 flex flex-column flex-row-l justify-start w-100">
        <Display message={this.state.message} />
        <div className="flex flex-column items-start pt5-l w-100 w-30-l bg-near-white minh-30 minh-100-ns">
          <SubList uid={this.props.currentUser} currentUser={this.state.currentUser} status="Going" attendees={this.state.yes} />
          <SubList uid={this.props.currentUser} currentUser={this.state.currentUser} status="Maybe Going" attendees={this.state.maybe} />
          <SubList uid={this.props.currentUser} currentUser={this.state.currentUser} status="Not Going" attendees={this.state.no} />
        </div>
      </div>
    )
  }
}

export default List
