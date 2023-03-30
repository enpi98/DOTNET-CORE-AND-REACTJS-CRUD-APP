using DTO;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer;

namespace CrudApp.Controllers
{
    [Route("api")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        [Route("users")]
        public ActionResult<List<UserDto>> get()
        {
            return Ok(userService.getUsers());
        }


        [HttpPost]
        [Route("users")]
        public ActionResult<UserDto> create(UserDto user)
        {
            return Ok(userService.insert(user));
        }
        [HttpPut]
        [Route("users")]
        public ActionResult<UserDto> update(UserDto user)
        {
            return Ok(userService.updateUser(user));
        }

        [HttpDelete]
        [Route("users/{Id:int}")]
        public ActionResult<int> delete(int Id)
        {

            return Ok(userService.deleteUser(new UserDto(Id)));
        }

        [HttpGet]
        [Route("users/{Id:int}")]
        public ActionResult<UserDto> getUser(int Id)
        {
            return Ok(userService.getUserById(Id));
        }


    }
}
