import _ from 'lodash'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchRepos } from '../actions'

class SearchBar extends Component {
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

  renderList () {
    return _.map(this.props.repos, repo => {
      return (
        <li
          key={repo.id}
          className='list-group-item'
          onClick={() => window.open(repo.html_url, '_blank')}
          >
          <h3 className='blueText'>{repo.name}</h3>
          <p> Language:
              {repo.language !== null ? <span className='greenText'> {repo.language}</span> : <span className='redText'> Unknown </span>}
          </p>
          <p>Description:</p>
          {repo.description !== null ? <span className='greenText'> {repo.description}</span> : <span className='redText'> None </span>}
        </li>
      )
    })
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
            {this.renderList()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    repos: state.repos
  }
}

export default connect(mapStateToProps, { fetchRepos })(SearchBar)
