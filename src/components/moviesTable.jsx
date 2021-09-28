import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './common/like';
import Table from './common/table';

class MoviesTable extends Component {
         
    columns = [
        { path : 'title', label:'Title',content:movie=><Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        { path : 'genre.name', label:'Genre'},
        { path : 'numberInStock', label:'Stock'},
        { path : 'dailyRentalRate', label:'Rate'},
        { key:'Like',content:movie=><Like liked={movie.liked}
                                onClick={()=>this.props.onLike(movie)}/>},//function tajes parameter movie retorns react element},
        { key:'delete',content:movie=>(<button
        onClick={()=>this.props.onDelete(movie)} 
        className="btn btn-danger btn-sm">Delete</button>)}
    ]



    render() { 
        

            const {movies, onSort,sortColumn} = this.props;
             return (
                 
                <Table columns={this.columns}
                        data={movies}
                        sortColumn={sortColumn}
                        onSort={onSort}/>
                
                // <table className="table">
            //  <TableHeader 
            //  columns={this.columns}
            //  sortColumn={sortColumn}
            //  onSort = {onSort}/>
            //  <TableBody columns={this.columns}data={movies}/>
            // {/* <tbody>
            //     {movies.map(movie =>(
            //         <tr key={movie._id}>
            //             <td>{movie.title}</td>
            //             <td>{movie.genre.name}</td>
            //             <td>{movie.numberInStock}</td>
            //             <td>{movie.dailyRentalRate}</td>
            //             <td></td>
            //             <td></td>
            //         </tr>
            //     ))}
                 
            // </tbody> */}
        // </table>
         );
        }
         
    }

 
export default MoviesTable;


 