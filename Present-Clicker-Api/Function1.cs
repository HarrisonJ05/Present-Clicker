using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Present_Clicker_Api.Models;

namespace Present_Clicker_Api
{
    public class Function1(ILoggerFactory loggerFactory)
    {
        private readonly ILogger<Function1> _logger = loggerFactory.CreateLogger<Function1>();

        [Function("Function1")]
        public async Task Run([HttpTrigger(AuthorizationLevel.Admin, "get", "post")] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");
            
            await using var dbContext = LeaderboardFactory.CreateDBContext("", loggerFactory);
            var users = dbContext.Users.ToList();
            
            Console.WriteLine(users.Count);
        }
    }
}