﻿using MSD.Loop.DTOs.Interfaces;
using MSD.Loop.Engine.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MSD.Loop.API.Controllers.Users
{
    public class UserController : BaseController
    {
        public UserController(IUserService userService, IUserFactory userFactory)
        {

        }
    }
}