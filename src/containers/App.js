import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '@/src/actions'
import RepoListElement from '@/src/components/RepoListElement'

class App extends Component {
  onInputChange = () => event => {
    this.props.fetchRepos(event.target.value)
  }

  render () {
    return (
      <div>
        <div className='search-bar'>
          <input
            placeholder="Enter a Github User's name"
            onChange={this.onInputChange()}
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

const mapStateToProps = ({ repos }) => ({
  repos
})

export default connect(mapStateToProps, { fetchRepos })(App)
