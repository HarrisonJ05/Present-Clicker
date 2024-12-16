using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Present_Clicker_Api.Models;

namespace Present_Clicker_Api
{
    public class AutoSaveFunction(ILoggerFactory loggerFactory)
    {
        private readonly ILogger<AutoSaveFunction> _logger = loggerFactory.CreateLogger<AutoSaveFunction>();

        [Function("AutoSaveFunction")]

        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Admin, "Post")] HttpRequest req)
        {
            string reqBody = await new StreamReader(req.Body).ReadToEndAsync();
            SaveRequest saveReq;

            try
            {
                saveReq = JsonSerializer.Deserialize<SaveRequest>(reqBody);

                if (saveReq == null || saveReq.Id <= 0)
                {
                    return new BadRequestObjectResult("Invalid save request");
                }

                await using var db = LeaderboardFactory.CreateDBContext("", loggerFactory);

                var user = db.Users.FirstOrDefault(u => u.Id == saveReq.Id);

                if (user == null)
                {
                    return new NotFoundObjectResult("User not found");
                }

                user.Presents = saveReq.Presents;
                user.ClickerLevel = saveReq.ClickerLevel;
                user.LastSave = DateTime.UtcNow;

                await db.SaveChangesAsync();

                _logger.LogInformation($"Progress saved for {user.Username}");

                return new OkObjectResult("Progress saved successfully");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "AutoSave failed");
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
