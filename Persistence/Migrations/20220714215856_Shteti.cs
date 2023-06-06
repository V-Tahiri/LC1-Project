using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class Shteti : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dhoma_Reparti_RepartiId1",
                table: "Dhoma");

            migrationBuilder.DropIndex(
                name: "IX_Dhoma_RepartiId1",
                table: "Dhoma");

            migrationBuilder.DropColumn(
                name: "RepartiId1",
                table: "Dhoma");

            migrationBuilder.AlterColumn<int>(
                name: "RepartiId",
                table: "Reparti",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "TEXT")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.CreateIndex(
                name: "IX_Dhoma_RepartiId",
                table: "Dhoma",
                column: "RepartiId");

            migrationBuilder.AddForeignKey(
                name: "FK_Dhoma_Reparti_RepartiId",
                table: "Dhoma",
                column: "RepartiId",
                principalTable: "Reparti",
                principalColumn: "RepartiId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dhoma_Reparti_RepartiId",
                table: "Dhoma");

            migrationBuilder.DropIndex(
                name: "IX_Dhoma_RepartiId",
                table: "Dhoma");

            migrationBuilder.AlterColumn<Guid>(
                name: "RepartiId",
                table: "Reparti",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<Guid>(
                name: "RepartiId1",
                table: "Dhoma",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Dhoma_RepartiId1",
                table: "Dhoma",
                column: "RepartiId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Dhoma_Reparti_RepartiId1",
                table: "Dhoma",
                column: "RepartiId1",
                principalTable: "Reparti",
                principalColumn: "RepartiId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
