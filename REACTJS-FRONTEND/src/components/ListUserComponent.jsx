import React, { Component } from 'react'
import UserService from '../services/UserService'
import {Link} from 'react-router-dom';

class ListUserComponent extends Component {
    
    constructor(props){
        super(props)

        this.state={
            users:[]
        }
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    
    componentDidMount(){
        UserService.getUsers().then((res)=>{
            this.setState({users: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Users</h2>
                <Link to="/add-user" className="btn btn-primary mb-2">Create a new User</Link>
                <div className="row">
                    <table className="table table-striped table-bordered"> 
                        <thead> 
                            <tr>
                                <th>Name </th>
                                <th>Id </th>
                                <th>Marital Status </th>
                                <th>Gender </th>
                                <th>Update </th>
                                <th>Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.id}</td>
                                        <td>{user.maritalStatus}</td>
                                        <td>{user.gender}</td>
                                        <td> <Link to={`/update-user/${user.id}`} className="btn btn-primary mb-2">Update</Link></td>
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} 
                                        className="btn btn-danger">Delete </button>
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
}
export default ListUserComponent









