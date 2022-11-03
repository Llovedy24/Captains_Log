const React = require('react')
const Default = require('../layouts/Default.jsx')
class Index extends React.Component {
  render () {
    const { logs } = this.props
    return (
      <Default tittle='Fruits Index Page'>
        <h1>Logs Index Page</h1>
        <nav>
          <a href='/logs/new'>Create a New Log</a>
        </nav>
        <ul>
          {
                        fruits.map((log) => {
                          const { name, color, readyToLog } = log
                          return (
                            <li key={log._id}>
                              <a href={`/logs/${log._id}`}>
                                {name}
                              </a> is {color}

                              <br />
                              {
                                        readyToLog
                                          ? 'It\'s ready to log'
                                          : 'It\'s not ready to log'
                                    }
                              <br />
                              <form method='POST' action={`/logs/${log._id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${color} ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
