using System.Data.SqlClient;
using SchoolHub.API.Schools;

namespace SchoolHub.API.IoC;

public class ApiModule : IApiModule
{
    private static string _connectionString = null!;

    public ApiModule(string connectionString)
    {
        _connectionString = connectionString;
    }

    public void RegisterDependencies(IServiceCollection service)
    {
        service.AddSingleton<Func<SqlConnection>>(_ => () => new SqlConnection(_connectionString));
        service.AddScoped<ISchoolRepository, SchoolRepository>();
        service.AddControllers();
    }
}

public interface IApiModule
{
    void RegisterDependencies(IServiceCollection service);
}