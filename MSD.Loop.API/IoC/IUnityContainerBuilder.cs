using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Unity;

namespace MSD.Loop.API.IoC
{
    public interface IUnityContainerBuilder
    {
        UnityContainer Build();
    }
}
