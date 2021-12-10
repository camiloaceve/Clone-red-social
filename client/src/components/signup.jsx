import StyleSignup, { SignupButton } from './styled/Signup.styled'

const signup = () => {
  const Signin = e => {
    e.preventDefault()
  }
  return (
    <StyleSignup>
      <form onSubmit={Signin}>
        <div>
          <h1> Social Media App</h1>
          <sub>Created by lester for Youtube vid</sub>
        </div>
        <SignupButton>
          <p>Sign in with Google</p> <i className='fa-brands fa-google' />
        </SignupButton>
      </form>
    </StyleSignup>
  )
}

export default signup
