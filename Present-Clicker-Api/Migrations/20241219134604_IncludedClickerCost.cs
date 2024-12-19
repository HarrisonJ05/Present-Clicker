using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Present_Clicker_Api.Migrations
{
    /// <inheritdoc />
    public partial class IncludedClickerCost : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ClickerCost",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClickerCost",
                table: "Users");
        }
    }
}
