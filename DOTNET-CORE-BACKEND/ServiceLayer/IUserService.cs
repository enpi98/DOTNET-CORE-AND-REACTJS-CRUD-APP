using DTO;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer
{
    public interface IUserService
    {
        UserDto insert(UserDto user);

        List<UserDto> getUsers();

        UserDto getUserById(int Id);

        UserDto updateUser(UserDto user);

        int deleteUser(UserDto user);
    }
}
