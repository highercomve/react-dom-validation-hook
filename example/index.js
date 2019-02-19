import React from 'react'
import ReactDOM from 'react-dom'
import useForm from '../src'

function UserForm () {
  const {
    validation,
    onSubmit,
    onInput,
    hasError,
    getErrors
  } = useForm() // receive a posible error processor object

  const submit = (event) => {
    const { data } = onSubmit(event)
    console.log(data, validation)
  }
  return (
    <form className='validated-form' noValidate onSubmit={submit}>
      <div className={ hasError('firstName') ? 'validated-form__control error': 'validated-form__control' }>
        <label htmlFor='firstName'>First name</label>
        <input
          onInput={onInput}
          type='text'
          name='firstName'
          data-name='first name'
          id='firstName'
          minLength='2'
          pattern='[a-zA-Z]*'
          required
          autoComplete='on'/>
        <div className='validated-form__errors'>
          {getErrors('firstName').join(', ')}
        </div>
      </div>
      <div className={ hasError('lastName') ? 'validated-form__control error': 'validated-form__control' }>
        <label htmlFor='lastName'>Last name</label>
        <input
          onInput={onInput}
          type='text'
          name='lastName'
          data-name='last name'
          id='lastName'
          required />
        <div className='validated-form__errors'>
          {getErrors('lastName').join(', ')}
        </div>
      </div>
      <div className={ hasError('age') ? 'validated-form__control error': 'validated-form__control' }>
        <label htmlFor='age'>Age</label>
        <input
          onInput={onInput}
          type='number'
          name='age'
          max='90'
          min='18'
          step='1'
          id='age'
          pattern='\d+'
          required
          autoComplete='on'/>
        <div className='validated-form__errors'>
          {getErrors('age').join(', ')}
        </div>
      </div>
      <div className={ hasError('email') ? 'validated-form__control error': 'validated-form__control' }>
        <label htmlFor='email'>Email</label>
        <input
          onInput={onInput}
          type='email'
          name='email'
          id='email'
          required />
        <div className='validated-form__errors'>
          {getErrors('email').join(', ')}
        </div>
      </div>
      <div className='validated-form__actions'>
        <button className='btn' type="submit" >Submit</button>
      </div>
    </form>
  )
}

ReactDOM.render(
  <div>
    <UserForm />
  </div>,
  document.getElementById('root')
)
