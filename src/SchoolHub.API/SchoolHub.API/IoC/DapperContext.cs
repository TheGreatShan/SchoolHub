using System.Data;
using System.Data.SqlClient;

namespace SchoolHub.API.IoC;

public class DapperContext
{
    private readonly string _connectionString;

    public DapperContext(string connectionString)
    {
        _connectionString = connectionString;
    }
    
    public IDbConnection Connection => new SqlConnection(_connectionString);
}