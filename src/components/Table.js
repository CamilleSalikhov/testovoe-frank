import './Table.css';
import { useSelector } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import changeOrder from './changeOrder';

const Table = ({searchValue, type}) => {

  //normal onlySelector onlySearch

    const tableState = useSelector(state => state.table.table);
    const order = useSelector(state => state.table.order);
    let tableItems = [];
    let orderedItems = [];

    if (type === 'normal') {
      
      tableItems = changeOrder(tableState, order);
      orderedItems = tableItems.filter(e => {

        return searchValue.toLowerCase() === '' ? e :e.info.toLowerCase().includes(searchValue)


    }).map(e =>
    <tr key={uuidv4()}>
       <td>{e.id}</td>
        <td className='selector'>{e.value}</td>
        <td className='info'>{e.info}</td>
    </tr> )
  
    } else if (type === 'onlySelector') {
      
      tableItems = changeOrder(tableState, order);
      orderedItems = tableItems.map(e =>
    <tr key={uuidv4()}>
       <td>{e.id}</td>
        <td className='selector'>{e.value}</td>
        <td className='info'>{e.info}</td>
    </tr> )


    } else if (type === 'onlySearch') {
      
      tableItems = [...tableState];
      orderedItems = tableItems.filter(e => {

        return searchValue.toLowerCase() === '' ? e :e.info.toLowerCase().includes(searchValue)


    }).map(e =>
    <tr key={uuidv4()}>
       <td>{e.id}</td>
        <td className='selector'>{e.value}</td>
        <td className='info'>{e.info}</td>
    </tr> )

    }



    

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
             {orderedItems}
             
          </tbody>
        </table>
        </div>
    )

}


export default Table;