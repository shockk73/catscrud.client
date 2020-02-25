import React from 'react'
import { connect } from 'react-redux'

const CatCard = ({ updateHandler, changeHandler, form, cat }) => {
    return(
        <>
            <h2>Cat info</h2>

            <p><b>Id:</b> {cat.id}</p>
            <p><b>isAlive:</b> {cat.isAlive.toString()}</p>
            <p><b>Name:</b> {cat.name.toString()}</p>
            <p><b>Age:</b> {cat.age.toString()}</p>

             <input
                  id="name"
                  type="text"
                  name="name"
                  className="yellow-input"
                  value={form.name}
                  onChange={changeHandler}
            />
            <label htmlFor="name">Имя</label>
            <input
                  id="age"
                  type="text"
                  name="age"
                  className="yellow-input"
                  value={form.age}
                  onChange={changeHandler}
            />
            <label htmlFor="age">Возраст</label>
            <button onClick={updateHandler}>Обновить кота</button>
        </>
    )
}

export default connect( state => ( {form:state.catFormState.u_cat, cat: state.catState.cat} ) )(CatCard)