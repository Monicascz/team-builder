import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props
    
const onSubmit = (evt)=>{
    evt.preventDefault();
    submit();

}

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={(evt)=>(update(evt))}
                    placeholder='name'
                    >
                    </input>
                </label>
                <label>
                    <input
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder='email'
                    onChange={(evt)=>(update(evt))}
                    >
                    </input>
                </label>
                <label>
                    <select
                    name='role'
                    value={values.role}
                    onChange={(evt)=>(update(evt))}
                    >
                    <option value="">-----select role ---</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="pikachu">Pikachu</option>

                    </select>
                </label>
                <button>submit</button>
            </form>
        </div>
    )
}
