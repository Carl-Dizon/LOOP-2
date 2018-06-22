using MSD.Loop.Engine.Interfaces;
using MSD.Loop.Engine.Models;
using MSD.Loop.Infrastructure.Configurations;
using MSD.Loop.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSD.Loop.TestClient
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Started");
            //IConnectionFactory connectionFactory = new ConnectionFactory();
            //var conn = connectionFactory.GetConnection();

            var uow = new UnitOfWork(new ConnectionFactory());
            var company= uow.CompanyRepository.Add(new Company
            {
                CreatedByUser = new User { Id = 1},
                CreatedOn = DateTime.UtcNow,
                LastModifiedOn = DateTime.UtcNow,
                Name = "TEST"
            });
            uow.Commit();

            Console.WriteLine("Completed");
            Console.ReadLine();
        }
    }
}
