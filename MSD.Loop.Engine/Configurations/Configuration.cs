using System.Configuration;

namespace MSD.Loop.Engine.Configurations
{
    public class LoopEngineConfigurationSection : ConfigurationSection
    {
        [ConfigurationProperty("mailer", IsRequired = true)]
        public MailerElement Mailer
        {
            get { return (MailerElement)base["mailer"]; }
            set { base["mailer"] = value; }
        }

        [ConfigurationProperty("logger", IsRequired = true)]
        public LoggerElement Logger
        {
            get { return (LoggerElement)base["logger"]; }
            set { base["logger"] = value; }
        }

        [ConfigurationProperty("roleProvider", IsRequired = false)]
        public RoleProviderElement RoleProvider
        {
            get { return (RoleProviderElement)base["roleProvider"]; }
            set { base["roleProvider"] = value; }
        }

        [ConfigurationProperty("authProvider", IsRequired = true)]
        public AuthenticationProviderElement AuthenticationProvider
        {
            get { return (AuthenticationProviderElement)base["authProvider"]; }
            set { base["authProvider"] = value; }
        }

        [ConfigurationProperty("tokenProvider", IsRequired = true)]
        public TokenProviderElement TokenProvider
        {
            get { return (TokenProviderElement)base["tokenProvider"]; }
            set { base["tokenProvider"] = value; }
        }


        [ConfigurationProperty("modules", IsRequired = false)]
        public ModuleElementCollection Modules
        {
            get { return (ModuleElementCollection)base["modules"]; }
            set { base["modules"] = value; }
        }
    }






}
