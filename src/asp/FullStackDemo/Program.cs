using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using FullStackDemo.Data;
using FullStackDemo.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<FullStackDemoContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("FullStackDemoContext")));

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    SeedData.Initialize(services);
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}

app.UsePathBase("/asp");
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

