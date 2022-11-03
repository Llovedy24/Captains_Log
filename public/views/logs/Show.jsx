const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, color, readyToLog } = this.props.log
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Show Page`} log={this.props.log}>
        <p>{capName} is {color} and {readyToEat ? 'it\'s ready to log' : 'it\'s not ready to log'}</p>
      </Default>
    )
  }
}

module.exports = Show