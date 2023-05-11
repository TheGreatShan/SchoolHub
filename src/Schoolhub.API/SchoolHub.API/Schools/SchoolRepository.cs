using System.Data.SqlClient;
using Dapper;
using SchoolHub.API.IoC;

namespace SchoolHub.API.Schools
{
    public class SchoolRepository : ISchoolRepository
    {
        private readonly Func<SqlConnection> _context;

        public SchoolRepository(Func<SqlConnection> context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SchoolModel>> GetAll()
        {
            using var connection = _context();
            var schools = await connection.QueryAsync<SchoolModel>("SELECT * FROM School");
            return schools.ToList();
        }

        public async Task<IEnumerable<SchoolModel>> GetByUser(string userId)
        {
            using var connection = _context();
            var schools = await connection.QueryAsync<SchoolModel>(
                "SELECT * FROM School AS s INNER JOIN SchoolUser AS su ON su.schoolId = s.id INNER JOIN User AS u ON su.userId = u.id WHERE u.id = @userId",
                new { userId });
            return schools.ToList();
        }

        public async Task<SchoolModel> GetById(string id)
        {
            using var connection = _context();
            var school = await connection.QueryAsync<SchoolModel>("SELECT * FROM School WHERE id=@id", new { id });
            return school.First();
        }

        public async void CreateSchoolUserLink(string userId, string schoolId)
        {
            using var connection = _context();
            await connection.ExecuteAsync("INSERT INTO SchoolUser(userId, schoolId) VALUES(@userId, @schoolId)",
                new { userId, schoolId });
        }

        public async void DeleteSchoolUserLink(string userId, string schoolId)
        {
            using var connection = _context();
            await connection.ExecuteAsync("DELETE FROM SchoolUser WHERE userId=@userId and schoolId=@schoolId",
                new { userId, schoolId });
        }
    }
}