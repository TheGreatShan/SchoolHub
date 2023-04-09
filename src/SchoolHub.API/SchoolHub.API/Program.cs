using SchoolHub.API.IoC;

class Program
{
    internal static IApiModule ApiModule { get; set; } =
        new ApiModule(GetConfiguration().GetConnectionString("DefaultConnection"));

    private static IConfigurationRoot GetConfiguration()
    {
        var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
        return configuration;
    }

    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        LoadDependencies(builder.Services);

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();


        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }

    public static void LoadDependencies(IServiceCollection serviceCollection) =>
        ApiModule.RegisterDependencies(serviceCollection);
}