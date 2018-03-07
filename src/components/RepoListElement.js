import _ from 'lodash'
import React from 'react'

const RepoListElement = ({ repos }) => (
  _.map(repos, repo => (
    <li
      key={repo.id}
      className='list-group-item'
      onClick={() => window.open(repo.html_url, '_blank')}
    >
      <h3 className='blueText'>{repo.name}</h3>
      <p> Language:
        {repo.language ? <span className='greenText'> {repo.language}</span> : <span className='redText'> Unknown </span>}
      </p>
      <p>Description:</p>
      {repo.description ? <span className='greenText'> {repo.description}</span> : <span className='redText'> None </span>}
    </li>
  )
  )
)

export default RepoListElement
