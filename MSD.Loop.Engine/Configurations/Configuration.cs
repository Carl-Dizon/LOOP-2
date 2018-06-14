using System.Configuration;

namespace MSD.Loop.Engine.Configurations
{
    public class LoopEngineConfigurationSection : ConfigurationSection
    {
        [ConfigurationProperty("mailer", IsRequired = true)]
        public MailerElement Mailer { get; set; }

        [ConfigurationProperty("logger", IsRequired = true)]
        public LoggerElement Logger { get; set; }

        [ConfigurationProperty("roleProvider", IsRequired = true)]
        public RoleProviderElement RoleProvider { get; set; }
    }

    public class ProviderBaseElement : ConfigurationElement
    {
        [ConfigurationProperty("name", IsRequired = true, IsKey = true)]
        public string Name
        {
            get
            {
                return (string)base["name"];
            }
            set
            {
                base["name"] = value;
            }
        }

        [ConfigurationProperty("type", IsRequired = true)]
        public string Type
        {
            get
            {
                return (string)base["type"];
            }
            set
            {
                base["type"] = value;
            }
        }
    }


    public class LoggerElement : ProviderBaseElement
    {

    }

    public class MailerElement : ProviderBaseElement
    {
        [ConfigurationProperty("fromAddress", IsRequired = true)]
        public string FromAddress
        {
            get
            {
                return (string)base["fromAddress"];
            }
            set
            {
                base["fromAddress"] = value;
            }
        }

        [ConfigurationProperty("smtpServer", IsRequired = true)]
        public string SmtpServer
        {
            get
            {
                return (string)base["smtpServer"];
            }
            set
            {
                base["smtpServer"] = value;
            }
        }
    }

    public class RoleProviderElement : ProviderBaseElement
    {

    }
}
