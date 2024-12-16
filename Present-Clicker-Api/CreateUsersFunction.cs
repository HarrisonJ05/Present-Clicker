using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Present_Clicker_Api.Models;

namespace Present_Clicker_Api
{
    public class CreateUsersFunction(ILoggerFactory loggerFactory)
    {
        private readonly ILogger<CreateUsersFunction> _logger = loggerFactory.CreateLogger<CreateUsersFunction>();

        [Function("CreateUsersFunction")]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Admin, "post")] HttpRequest req)
        {
            string reqBody = await new StreamReader(req.Body).ReadToEndAsync();
            User user;

            user = JsonSerializer.Deserialize<User>(reqBody);

            Console.WriteLine(user.Username);

            await using var db = LeaderboardFactory.CreateDBContext("", loggerFactory);
            try
            {
                db.Users.Add(user);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return new OkObjectResult("User Created!");
        }   
    }
}
