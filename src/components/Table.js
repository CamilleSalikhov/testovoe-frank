import './Table.css';
import { useSelector } from 'react-redux';
import {v4 as uuidv4} from 'uuid'

const Table = ({searchValue}) => {

    const tableState = useSelector(state => state.table.table)


    const tableItems = tableState.filter(e => {

        return searchValue.toLowerCase() === '' ? e :e.info.toLowerCase().includes(searchValue)


    }).map(e =>
    <tr key={uuidv4()}>
       <td>{e.id}</td>
        <td className='selector'>{e.value}</td>
        <td className='info'>{e.info}</td>
    </tr> )

    return(
        <div className='tableContainer'>
            <table>
          <thead>
            <tr>
              <th>id</th>
              <th>selector</th>
              <th >info</th>
            </tr>
          </thead>
          <tbody>
             {tableItems}
             
          </tbody>
        </table>
        </div>
    )

}


export default Table;