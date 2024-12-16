using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Present_Clicker_Api.Models;

namespace Present_Clicker_Api
{
    public class LoginFunction(ILoggerFactory loggerFactory)
    {
        private readonly ILogger<LoginFunction> _logger = loggerFactory.CreateLogger<LoginFunction>();

        [Function("LoginFunction")]

        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Admin, "Post")] HttpRequest req)
        {
            string reqBody = await new StreamReader(req.Body).ReadToEndAsync();
            User loginReq;

            try
            {
                loginReq = JsonSerializer.Deserialize<User>(req.Body);

                if (loginReq == null || string.IsNullOrEmpty(loginReq.Username) || string.IsNullOrEmpty(loginReq.Password))
                {
                    return new BadRequestObjectResult("Username or Password incorrect");
                }

                await using var db = LeaderboardFactory.CreateDBContext("", loggerFactory);

                var user = db.Users.FirstOrDefault(u => u.Username == loginReq.Username);

                if (user != null && user.Password == loginReq.Password)
                {
                    return new OkObjectResult("Login Successful!");
                }
                else
                {
                    return new UnauthorizedResult();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error logging in");
                return new BadRequestObjectResult("Login Failed");
            }
        }
    }
}
