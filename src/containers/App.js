import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '@/src/actions'
import RepoListElement from '@/src/components/RepoListElement'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userName: ''
    }
  }

  onInputChange (userName) {
    this.setState({userName})
    this.props.fetchRepos(userName)
  }

  render () {
    return (
      <div>
        <div className='search-bar'>
          <input
            placeholder="Enter a Github User's name"
            value={this.state.userName}
            onChange={event => this.onInputChange(event.target.value)}
            type='text'
          />
        </div>
        <div className='repo-list'>
          <h4>List of available repositories:</h4>
          <p>(click on any repo to visit on GitHub)</p>
          <ul>
            <RepoListElement repos={this.props.repos} />
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ repos }) {
  return {
    repos
  }
}

export default connect(mapStateToProps, { fetchRepos })(App)
