using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class Reparti : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Reparti",
                columns: table => new
                {
                    RepartiId = table.Column<Guid>(type: "TEXT", nullable: false),
                    RepartiName = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reparti", x => x.RepartiId);
                });

            migrationBuilder.CreateTable(
                name: "Shteti",
                columns: table => new
                {
                    ShtetiId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Emri = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shteti", x => x.ShtetiId);
                });

            migrationBuilder.CreateTable(
                name: "Dhoma",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Kati = table.Column<string>(type: "TEXT", nullable: true),
                    Lloji = table.Column<string>(type: "TEXT", nullable: true),
                    NrPacienteve = table.Column<int>(type: "INTEGER", nullable: false),
                    RepartiId = table.Column<int>(type: "INTEGER", nullable: false),
                    RepartiId1 = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dhoma", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Dhoma_Reparti_RepartiId1",
                        column: x => x.RepartiId1,
                        principalTable: "Reparti",
                        principalColumn: "RepartiId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Qyteti",
                columns: table => new
                {
                    QytetiId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    ZipKodi = table.Column<string>(type: "TEXT", nullable: true),
                    ShtetiId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Qyteti", x => x.QytetiId);
                    table.ForeignKey(
                        name: "FK_Qyteti_Shteti_ShtetiId",
                        column: x => x.ShtetiId,
                        principalTable: "Shteti",
                        principalColumn: "ShtetiId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Dhoma_RepartiId1",
                table: "Dhoma",
                column: "RepartiId1");

            migrationBuilder.CreateIndex(
                name: "IX_Qyteti_ShtetiId",
                table: "Qyteti",
                column: "ShtetiId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Dhoma");

            migrationBuilder.DropTable(
                name: "Qyteti");

            migrationBuilder.DropTable(
                name: "Reparti");

            migrationBuilder.DropTable(
                name: "Shteti");
        }
    }
}
