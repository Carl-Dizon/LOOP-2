USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyUserRoles]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyUserRoles](
	[Id] [int] NOT NULL,
	[CompanyUserId] [int] NOT NULL,
	[CompanyAccessRoleId] [int] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[LastModifiedOn] [datetime] NOT NULL,
	[IsArchived] [bit] NOT NULL,
 CONSTRAINT [PK_CompanyUserRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_CompanyUserRoles_CompanyAccessRoles] FOREIGN KEY([CompanyAccessRoleId])
REFERENCES [dbo].[CompanyAccessRoles] ([Id])
GO
ALTER TABLE [dbo].[CompanyUserRoles] CHECK CONSTRAINT [FK_CompanyUserRoles_CompanyAccessRoles]
GO
ALTER TABLE [dbo].[CompanyUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_CompanyUserRoles_CompanyUserRoles] FOREIGN KEY([Id])
REFERENCES [dbo].[CompanyUserRoles] ([Id])
GO
ALTER TABLE [dbo].[CompanyUserRoles] CHECK CONSTRAINT [FK_CompanyUserRoles_CompanyUserRoles]
GO
ALTER TABLE [dbo].[CompanyUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_CompanyUserRoles_CompanyUsers] FOREIGN KEY([CompanyUserId])
REFERENCES [dbo].[CompanyUsers] ([Id])
GO
ALTER TABLE [dbo].[CompanyUserRoles] CHECK CONSTRAINT [FK_CompanyUserRoles_CompanyUsers]
GO
