import React from 'react'

export const Form = () => {
  return (
    <div>
        <form>
            <label htmlFor="firstname"> First Name </label>
            <input type="text" id="firstname" name="firstname" />

            <label htmlFor="lastname"> Last Name </label>
            <input type="text" id="lastname" name="lastname" />

            <label htmlFor="companyname"> Company Name </label>
            <input type="text" id="companyname" name="companyname" />

            <label htmlFor="email"> Email </label>
            <input type="text" id="email" name="email" />

            <label htmlFor="phnumber"> Phone Number </label>
            <input type="text" id="phnumber" name="phnumber" />

            <label htmlFor="phnumber"> Technology </label>
            <select name="tech" id="tech">
                <option value="opt1"> Test1 </option>
                <option value="opt2"> Test2 </option>
                <option value="opt3"> Test3 </option>
            </select>

            <label htmlFor="raw"> Raw Material </label>
            <input type="text" id="raw" name="raw" />

            <label htmlFor="message"> Message </label>
            <input type="text" id="message" name="message" />

            <button> Submit </button>
        </form>
    </div>
  )
}



{/* class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: ''
        }
    }

    handleFirstNameChange = () => {}

    render() {
        return (
            <form>
                <div>
                    <label>First Name</label>
                    <input type="text" value={this.state.firstname} onChange={this.handleFirstNameChange} />
                </div>
            </form>
        )
    }
} */}