import axios from 'axios';

const USER_URL="https://localhost:7148/api/users";

class UserService{
    getUsers(){
        return axios.get(USER_URL);
    }
    createUser(user){
        return axios.post(USER_URL,user);
    }
    getUserById(userId){
        return axios.get(USER_URL + '/' + userId);
    }
    updateUser(user){
        return axios.put(USER_URL,user);
    }
    deleteUser(userId){
        return axios.delete(USER_URL + '/' + userId);
    }
}
export default new UserService()