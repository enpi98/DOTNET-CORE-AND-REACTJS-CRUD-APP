using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string MaritalStatus { get; set; }
        public string Gender { get; set; }

        public UserDto()
        { }
        public UserDto(int Id,string Name,string MaritalStatus,string Gender)
        {
            this.Id = Id;
            this.Name = Name;
            this.MaritalStatus = MaritalStatus;
            this.Gender = Gender;
        }
        public UserDto(int Id)
        {
            this.Id= Id;
        }

    }
}
