using System;
using Microsoft.EntityFrameworkCore.Migrations;


namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Medicaments",
                columns: table => new
                {
                    MedikamentetId = table.Column<Guid>(type: "TEXT", nullable: false),
                    RecetaMjekesore = table.Column<string>(type: "TEXT", nullable: true),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    Doza = table.Column<int>(type: "INTEGER", nullable: false)
                },
                
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medicaments", x => x.MedikamentetId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Medicaments");
        }
    }
}
