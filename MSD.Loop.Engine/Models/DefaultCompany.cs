namespace MSD.Loop.Engine.Models
{
    public class DefaultCompany : Company
    {
        public DefaultCompany()
        {
            Name = "Default";
            Description = "Default company";
            IsDefault = true;
            IsArchived = false;
            LogoUrl = "";
            WebUrl = "";
        }
    }
}
