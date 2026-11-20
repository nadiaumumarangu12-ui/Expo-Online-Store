import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

const App = () => {
  return (
    <div className='px-8'>
      <h1 className='text-2xl font-bold text-blue-500 capitalize'>
        home page
      </h1>
      <div className='mt-5'>
        <Show when="signed-out">
          <button className='bg-blue-500 py-2 px-3 text-white border rounded-2xl'>
            <SignInButton mode='modal' />
          </button>
          <button className='bg-blue-500 py-2 px-3 text-white border rounded-2xl'>
            <SignUpButton mode='modal' />
          </button>
        </Show>
        <Show when="signed-in">
          <button className='bg-green-500 py-2 px-3 text-white border rounded-2xl'>
            <UserButton />
          </button>
        </Show>
      </div>
    </div>
  )
}

export default App