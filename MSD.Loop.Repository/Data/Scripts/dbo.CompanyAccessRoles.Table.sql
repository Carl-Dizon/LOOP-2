USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyAccessRoles]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyAccessRoles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CompanyId] [int] NOT NULL,
	[AccessLevelId] [int] NOT NULL,
 CONSTRAINT [PK_CompanyAccessRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyAccessRoles]  WITH CHECK ADD  CONSTRAINT [FK_CompanyAccessRoles_AccessLevels] FOREIGN KEY([AccessLevelId])
REFERENCES [dbo].[AccessLevels] ([Id])
GO
ALTER TABLE [dbo].[CompanyAccessRoles] CHECK CONSTRAINT [FK_CompanyAccessRoles_AccessLevels]
GO
ALTER TABLE [dbo].[CompanyAccessRoles]  WITH CHECK ADD  CONSTRAINT [FK_CompanyAccessRoles_Companies] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Companies] ([Id])
GO
ALTER TABLE [dbo].[CompanyAccessRoles] CHECK CONSTRAINT [FK_CompanyAccessRoles_Companies]
GO
