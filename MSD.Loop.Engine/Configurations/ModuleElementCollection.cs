using System.Configuration;

namespace MSD.Loop.Engine.Configurations
{
    [ConfigurationCollection(typeof(ModuleElement))]
    public class ModuleElementCollection : ConfigurationElementCollection
    {
        protected override ConfigurationElement CreateNewElement()
        {
            return new ModuleElement();
        }

        protected override object GetElementKey(ConfigurationElement element)
        {
            return ((ModuleElement)element).Name;
        }
        internal ModuleElement GetByName(string name)
        {
            ModuleElement element = null;

            foreach (ModuleElement item in this)
            {
                if (item.Name == name)
                {
                    element = item;
                    break;
                }
            }

            return element;
        }

        internal ModuleElement this[int index]
        {
            get { return (ModuleElement)this.BaseGet(index); }
        }
    }
}
