namespace MSD.Loop.DTO.Models
{
    public class CompanyDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description{ get; set; }
        public string WebUrl { get; set; }
        public string LogoUrl { get; set; }
        public string MyProperty { get; set; }

        public int CreatedByUserId { get; set; }
        public bool IsArchived { get; set; }
    }
}

