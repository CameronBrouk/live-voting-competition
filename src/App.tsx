import React from 'react'
import VoteCounter from './VoteCounter'

export function App() {
  return (
    <div className='h-screen w-screen'>
      <div className='p-4 bg-blue-300 w-full justify-center flex items-center'>
        <h1 className='font-semibold  text-2xl'>Live Voting Yay</h1>
      </div>

      <div className='flex h-full justify-center p-4'>
        <div className='border rounded-md w-1/2 h-1/2 bg-gray-200 flex justify-center items-center'>
          <VoteCounter
            candidate='Josh'
            className={'bg-blue-200 text-blue-800'}
          />
          <VoteCounter
            candidate='Grace'
            className={'bg-red-200 text-red-800'}
          />
        </div>
      </div>
    </div>
  )
}
export default App
