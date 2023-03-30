import React, { Component } from 'react'
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';

class CreateUserComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            maritalStatus:'',
            gender:''
           
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeMaritalStatusHandler = this.changeMaritalStatusHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    saveUser = (e) => {
        let user = {name: this.state.name, maritalStatus: this.state.maritalStatus, gender: this.state.gender};
       

       
        console.log('user => ' + JSON.stringify(user));

        UserService.createUser(user).then(res =>{      
            window.location.assign("/getUsers");
        });
    
        
    }
    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
 
    }
    changeMaritalStatusHandler = (event) => {
        this.setState({maritalStatus: event.target.value});
 
    }

    changeGenderHandler = (event) => {
        this.setState({gender: event.target.value});
 
    }


    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">New User</h3>
                            <div className = "card-body">
                                <form>
                                         <div className = "form-group">
                                            <label> Name </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Marital Status </label>
                                            <input placeholder="Marital Status" name="maritalStatus" className="form-control" 
                                                value={this.state.maritalStatus} onChange={this.changeMaritalStatusHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                                                <br></br>
                                        </div>


                                        <Link to= "/getUsers" onClick={this.saveUser} className="btn btn-primary mb-2">Add User</Link>
                                      
                                        
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CreateUserComponent