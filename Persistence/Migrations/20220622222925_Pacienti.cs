using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class Pacienti : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Patients",
                columns: table => new
                {
                    PacientiId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    Mbiemri = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Gjinia = table.Column<char>(type: "TEXT", nullable: false),
                    Datelindja = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Mosha = table.Column<int>(type: "INTEGER", nullable: false),
                    Shteti = table.Column<string>(type: "TEXT", nullable: true),
                    Qyteti = table.Column<string>(type: "TEXT", nullable: true),
                    Adresa = table.Column<string>(type: "TEXT", nullable: true),
                    Medikamentet = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patients", x => x.PacientiId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Patients");
        }
    }
}
