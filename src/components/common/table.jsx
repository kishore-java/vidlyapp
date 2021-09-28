import React from 'react';
import TableBody from './tablebody';
import TableHeader from './tableheader';


const Table = ({columns,sortColumn,onSort,data}) => {
    //reading all using props arguments
    return (  <table className="table">
    <TableHeader 
    columns={columns}
    sortColumn={sortColumn}
    onSort = {onSort}/>
    <TableBody columns={columns}data={data}/>
    </table>);
}
 
export default Table;