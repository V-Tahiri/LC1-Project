﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220714220132_Dhoma")]
    partial class Dhoma
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.4");

            modelBuilder.Entity("Domain.Dhoma", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Kati")
                        .HasColumnType("TEXT");

                    b.Property<string>("Lloji")
                        .HasColumnType("TEXT");

                    b.Property<int>("NrPacienteve")
                        .HasColumnType("INTEGER");

                    b.Property<int>("RepartiId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("RepartiId");

                    b.ToTable("Dhoma");
                });

            modelBuilder.Entity("Domain.Medikamentet", b =>
                {
                    b.Property<Guid>("MedikamentetId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int>("Doza")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<string>("RecetaMjekesore")
                        .HasColumnType("TEXT");

                    b.HasKey("MedikamentetId");

                    b.ToTable("Medicaments");
                });

            modelBuilder.Entity("Domain.Pacienti", b =>
                {
                    b.Property<Guid>("PacientiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Adresa")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Datelindja")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<char>("Gjinia")
                        .HasColumnType("TEXT");

                    b.Property<string>("Mbiemri")
                        .HasColumnType("TEXT");

                    b.Property<string>("Medikamentet")
                        .HasColumnType("TEXT");

                    b.Property<int>("Mosha")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Qyteti")
                        .HasColumnType("TEXT");

                    b.Property<string>("Shteti")
                        .HasColumnType("TEXT");

                    b.HasKey("PacientiId");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("Domain.Qyteti", b =>
                {
                    b.Property<int>("QytetiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.Property<int>("ShtetiId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ZipKodi")
                        .HasColumnType("TEXT");

                    b.HasKey("QytetiId");

                    b.HasIndex("ShtetiId");

                    b.ToTable("Qyteti");
                });

            modelBuilder.Entity("Domain.Reparti", b =>
                {
                    b.Property<int>("RepartiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("RepartiName")
                        .HasColumnType("TEXT");

                    b.HasKey("RepartiId");

                    b.ToTable("Reparti");
                });

            modelBuilder.Entity("Domain.Shteti", b =>
                {
                    b.Property<int>("ShtetiId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Emri")
                        .HasColumnType("TEXT");

                    b.HasKey("ShtetiId");

                    b.ToTable("Shteti");
                });

            modelBuilder.Entity("Domain.Dhoma", b =>
                {
                    b.HasOne("Domain.Reparti", "Reparti")
                        .WithMany()
                        .HasForeignKey("RepartiId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Reparti");
                });

            modelBuilder.Entity("Domain.Qyteti", b =>
                {
                    b.HasOne("Domain.Shteti", "Shteti")
                        .WithMany("Qytetet")
                        .HasForeignKey("ShtetiId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Shteti");
                });

            modelBuilder.Entity("Domain.Shteti", b =>
                {
                    b.Navigation("Qytetet");
                });
#pragma warning restore 612, 618
        }
    }
}
