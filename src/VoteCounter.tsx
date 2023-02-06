import { useEffect, useState } from 'react'
import { candidate } from './CONSTANTS'
import { createNewVote, getVotesForCandidate } from './helpers'

// We want to run the "getVotesForCandidate" function ONE time
// We want to add all of the received objects together
// We want to set that value to the state of votes in our component

type Props = {
  className: string
  candidate: candidate
}

const VoteCounter = (props: Props) => {
  const [voteAmount, setVoteAmount] = useState(0)

  useEffect(() => {
    getVotesForCandidate(props.candidate).then((data) => {
      setVoteAmount(data.length)
    })
  }, [])

  const handleClick = () => {
    createNewVote(props.candidate)
  }

  return (
    <div>
      <p>{voteAmount}</p>
      <button
        className={`px-4 py-2 font-semibold text-md ${props.className} rounded-md`}
        onClick={handleClick}>
        Vote for {props.candidate}
      </button>
    </div>
  )
}

export default VoteCounter
