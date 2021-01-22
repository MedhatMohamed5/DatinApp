using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(10, MinimumLength = 6, ErrorMessage = "Password must be at least 6 characters and at most 10")]
        public string Password { get; set; }
    }
}