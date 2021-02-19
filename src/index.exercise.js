import React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'

import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function LoginForm({onSubmit, buttonText = 'login'}) {
  function handleSubmit(event) {
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    onSubmit({username, password})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>

      <input type="submit" value={buttonText} />
    </form>
  )
}

function handleSubmit(formData) {
  console.log('login', formData)
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')

  const openLoginDialog = () => setOpenModal('login')
  const closeLoginDialog = () => setOpenModal('none')

  const openRegisterDialog = () => setOpenModal('register')
  const closeRegisterDialog = () => setOpenModal('none')

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>

      <div>
        <button onClick={openLoginDialog}>Login</button>
      </div>

      <div>
        <button onClick={openRegisterDialog}>Register</button>
      </div>

      <Dialog
        aria-label="Login form"
        isOpen={openModal === 'login'}
        onDismiss={closeLoginDialog}
      >
        <div>
          <button onClick={closeLoginDialog}>Close</button>
        </div>

        <h3>Login</h3>

        <LoginForm onSubmit={handleSubmit} buttonText="Login" />
      </Dialog>
      <Dialog
        aria-label="Registration form"
        isOpen={openModal === 'register'}
        onDismiss={closeRegisterDialog}
      >
        <button onClick={closeRegisterDialog}>Close</button>

        <h3>Hello there register</h3>
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
