using DTO;
using Entity;
using RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;
        public UserService(AppDbContext context)
        {
            _context = context;
        }
        public UserDto insert(UserDto user)
        {
            UserEntity userEntity = new UserEntity();
           
            userEntity.Name = user.Name;
            userEntity.MaritalStatus = user.MaritalStatus;
            userEntity.Gender = user.Gender;

            _context.Add(userEntity);   
            _context.SaveChanges();
            user.Id = userEntity.Id;
            return user;
        }

        public List<UserDto> getUsers()
        {
            List<UserDto> userList = new List<UserDto>();

            List<UserEntity> list = _context.TBLUSER.ToList();
            if (list != null)
            {
                foreach (UserEntity ue in list)
                {
                    userList.Add(new UserDto(ue.Id, ue.Name, ue.MaritalStatus, ue.Gender));
                }
            }
            return userList;
        }



        public UserDto getUserById(int Id)
        {
            UserEntity userEntity = _context.TBLUSER.Find(Id);
            UserDto user = new UserDto(userEntity.Id, userEntity.Name, userEntity.MaritalStatus, userEntity.Gender);
            return user;

        }
        
        public int deleteUser(UserDto user)
        {
            UserEntity userEntity = new UserEntity();
            userEntity.Id = user.Id;
            _context.Remove(userEntity);
            _context.SaveChanges();
            return user.Id;
        }

        public UserDto updateUser(UserDto user)
        {
            UserEntity userEntity = new UserEntity();
            userEntity.Id = user.Id;
            userEntity.Name = user.Name;
            userEntity.MaritalStatus = user.MaritalStatus;
            userEntity.Gender = user.Gender;
            _context.Update(userEntity);
            _context.SaveChanges();
            return user;
        }
    }

}

