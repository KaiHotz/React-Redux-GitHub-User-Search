import _ from 'lodash'
import React from 'react'

const RepoListElement = ({ repos }) => {
  return _.map(repos, repo => {
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

export default RepoListElement
