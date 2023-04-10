using MySql.Data.MySqlClient;
using System.Data;

namespace SchoolHub.API.IoC;

public class DapperContext
{
    private readonly string _connectionString;

    public DapperContext(string connectionString)
    {
        _connectionString = connectionString;
    }
    
    public IDbConnection Connection => new MySqlConnection(_connectionString);
}