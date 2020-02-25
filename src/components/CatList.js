import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const CatList = ({ cats, deleteHandler }) => {
  if (!cats.length) {
    return <p className="center">Котов пока нет</p>
  }

  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Открыть</th>
        <th>X</th>
      </tr>
      </thead>

      <tbody>
      { cats.map((cat, index) => {
        return (
          <tr key={cat.id}>
            <td>{index + 1}</td>
            <td>{cat.name}</td>
            <td>{cat.age}</td>
            <td>
                <Link to={`/cat/${cat.id}`} >Подробнее</Link>
            </td>
            <td>
                <button onClick={ () => deleteHandler(cat.id) } >Удалить</button>
            </td>
          </tr>
        )
      }) }
      </tbody>
    </table>
  )
}

export default connect( state => ( {cats: state.catState.cats} ) )(CatList)
