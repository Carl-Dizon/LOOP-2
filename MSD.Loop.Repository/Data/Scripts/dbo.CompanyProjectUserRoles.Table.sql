USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyProjectUserRoles]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyProjectUserRoles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CompanyAccessRoleId] [int] NOT NULL,
	[CompanyProjectUserId] [int] NOT NULL,
 CONSTRAINT [PK_CompanyProjectUserRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyProjectUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectUserRoles_CompanyAccessRoles] FOREIGN KEY([CompanyAccessRoleId])
REFERENCES [dbo].[CompanyAccessRoles] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectUserRoles] CHECK CONSTRAINT [FK_CompanyProjectUserRoles_CompanyAccessRoles]
GO
ALTER TABLE [dbo].[CompanyProjectUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectUserRoles_CompanyProjectUserRoles] FOREIGN KEY([CompanyProjectUserId])
REFERENCES [dbo].[CompanyProjectUserRoles] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectUserRoles] CHECK CONSTRAINT [FK_CompanyProjectUserRoles_CompanyProjectUserRoles]
GO
