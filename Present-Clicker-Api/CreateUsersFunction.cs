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
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post")] HttpRequest req)
        {
            Console.WriteLine("Hello World");
            string reqBody = await new StreamReader(req.Body).ReadToEndAsync();
            User user;

            user = JsonSerializer.Deserialize<User>(reqBody);

            Console.WriteLine(user.Username);

            await using var db = LeaderboardFactory.CreateDBContext("Server=tcp:openlibraryserver.database.windows.net,1433;Initial Catalog=SantaClickerDb;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;Authentication=\"Active Directory Default\";", loggerFactory);
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
