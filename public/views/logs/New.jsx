const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Log'>
        <form method='POST' action='/logs'>
          Name: <input type='text' name='name' placeholder='Name of Log Here' /><br />
          Color: <input type='text' name='color' placeholder='Color of Log Here' /><br />
          Is Ready To Log: <input type='checkbox' name='readyToLog' /><br />
          <input type='submit' value='Submit Log' />
        </form>
      </Default>
    )
  }
}

module.exports = New
