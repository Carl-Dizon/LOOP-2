USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyProjectUsers]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyProjectUsers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CompanyUserId] [int] NOT NULL,
	[CompanyProjectId] [int] NOT NULL,
	[AssignedById] [int] NOT NULL,
	[AssignedOn] [datetime] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[LastModifiedOn] [datetime] NOT NULL,
 CONSTRAINT [PK_CompanyProjectUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyProjectUsers]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectUsers_CompanyProjects] FOREIGN KEY([CompanyProjectId])
REFERENCES [dbo].[CompanyProjects] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectUsers] CHECK CONSTRAINT [FK_CompanyProjectUsers_CompanyProjects]
GO
ALTER TABLE [dbo].[CompanyProjectUsers]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectUsers_CompanyUsers] FOREIGN KEY([CompanyUserId])
REFERENCES [dbo].[CompanyUsers] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectUsers] CHECK CONSTRAINT [FK_CompanyProjectUsers_CompanyUsers]
GO
ALTER TABLE [dbo].[CompanyProjectUsers]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectUsers_CompanyUsers1] FOREIGN KEY([AssignedById])
REFERENCES [dbo].[CompanyUsers] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectUsers] CHECK CONSTRAINT [FK_CompanyProjectUsers_CompanyUsers1]
GO
