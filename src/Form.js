import React, {useState, useEffect} from "react"

export default function Form(props) {
    const { values, update, submit, errorText } = props

    const onChange = event => {
        const name = event.target.name
        const value = event.target.value
        update(name, value);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <h2 className='error'>{errorText}</h2>
            <div className='form-group inputs'>
                <label>Name
                    <input 
                        type='text'
                        name='name'
                        value={values.username}
                        onChange={onChange}
                        placeholder='Enter Name'
                    />
                </label>
                <label>Email
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                        placeholder='Enter Email'
                    />
                </label>
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>Select Role</option>
                        <option value='Team Manager'>Team Manager</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='UX Designer'>UX Designer</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}