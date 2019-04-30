namespace WebAPIAngular7CRUD.Models
{
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    public class PaymentDetailsConetx : DbContext
    {
        public PaymentDetailsConetx(DbContextOptions<PaymentDetailsConetx> options):base(options)
        {

        }

        public DbSet<PaymentDetails> PaymentDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            

            base.OnModelCreating(modelBuilder);
        }

    }
}
