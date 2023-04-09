namespace SchoolHub.API.IoC;

public class ApiModule : IApiModule
{
    private static string _connectionString;

    public ApiModule(string connectionString)
    {
        _connectionString = connectionString;
    }

    public void RegisterDependencies(IServiceCollection service)
    {
        service.AddControllers();
        service.AddSingleton<DapperContext>(_ => new DapperContext(_connectionString));
    }
}

public interface IApiModule
{
    void RegisterDependencies(IServiceCollection service);
}