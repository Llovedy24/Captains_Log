const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, color, readyToLog } = this.props.log
    return (
      <Default title={`${name} Edit Page`} log={this.props.log}>
        <form method='POST' action={`/logs/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Color: <input type='text' name='color' defaultValue={color} /><br />
          Is Ready To Log: <input type='checkbox' name='readyToLog' defaultChecked={readyToEat} /> <br />
          <input type='submit' value='Edit Log' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit