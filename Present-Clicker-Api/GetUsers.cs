using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Present_Clicker_Api.DTO;
using Present_Clicker_Api.Models;

namespace Present_Clicker_Api
{
    public class GetUsers(ILoggerFactory loggerFactory)
    {
        private readonly ILogger<CreateUsersFunction> _logger = loggerFactory.CreateLogger<CreateUsersFunction>();

        [Function("GetUsers")]

        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "Get")] HttpRequest req)
        {
            await using var db = LeaderboardFactory.CreateDBContext("Server=tcp:openlibraryserver.database.windows.net;Authentication=Active Directory Default;Database=SantaClickerDb;", loggerFactory);

            var users = db.Users.ToList();

            var filteredUsers = new List<FilteredUserType>();

            foreach (var user in users) {
                filteredUsers = users.Select(user => new FilteredUserType{
                    Username = user.Username,
                    Presents = user.Presents,
                }).ToList();
            }

            var response = JsonSerializer.Serialize(filteredUsers);

            return new OkObjectResult(response);
        }
    }
}
