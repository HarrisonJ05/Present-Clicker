using Microsoft.Azure.Functions.Worker.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Present_Clicker_Api.Models;

var builder = FunctionsApplication.CreateBuilder(args);

builder.ConfigureFunctionsWebApplication();

builder.Services.AddDbContext<LeaderboardDb>(options => options.UseSqlServer("Server=tcp:openlibraryserver.database.windows.net;Authentication=Active Directory Default;Database=SantaClickerDb;"));

builder.Build().Run();
