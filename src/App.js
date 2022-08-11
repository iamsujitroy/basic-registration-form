import { useState } from "react";
import "./App.css";


function App() {
  const [inputForm, setInputForm] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [submited, setSubmited] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputForm.firstName && inputForm.lastName && inputForm.email) {
      setInputValid(true)
    }else{
      setInputValid(false)
    }
    setSubmited(true)
  };

  const firstNameInputChangeHandler = (event) => {
    setInputForm({ ...inputForm, firstName: event.target.value })
  }
  const lastNameInputChangeHandler = (event) => {
    setInputForm({ ...inputForm, lastName: event.target.value })
  }
  const emailInputChangeHandler = (event) => {
    setInputForm({ ...inputForm, email: event.target.value })
  }


  return (
    <div className="App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {submited & inputValid ? <div className="form-success">Success ! Thank You for Registering</div> : null}
          <input type="text" name="firstName" placeholder='First Name' defaultValue={inputForm.firstName} onChange={firstNameInputChangeHandler} />
          {submited & inputForm.firstName === '' ? <div className="form-alert">Enter your first name !</div> : null}
          <input type="text" name="lastName" placeholder='Last Name' defaultValue={inputForm.lastName} onChange={lastNameInputChangeHandler} />
          {submited & inputForm.lastName === '' ? <div className="form-alert">Enter your last name !</div> : null}
          <input type="email" name="email" placeholder='Email Name' defaultValue={inputForm.email} onChange={emailInputChangeHandler} />
          {submited & inputForm.email === '' ? <div className="form-alert">Enter your email !</div> : null}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
