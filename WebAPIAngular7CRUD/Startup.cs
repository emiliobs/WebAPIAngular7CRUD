﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Serialization;
using WebAPIAngular7CRUD.Models;

namespace WebAPIAngular7CRUD
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContextPool<PaymentDetailsConetx>(Options => 
            Options.UseSqlServer(this.Configuration.GetConnectionString("DevConnection")));



            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddJsonOptions(Options => 
                {
                    var resolve = Options.SerializerSettings.ContractResolver;
                    if (resolve != null)
                    {
                        (resolve as DefaultContractResolver).NamingStrategy = null;
                    }
                });

            //aqui meenlazo con Angular 7:
            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //aqui utlizo todos los metodo y encabezados de angular 7
            app.UseCors(Options => Options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader());

            app.UseMvc();
        }
    }
}
