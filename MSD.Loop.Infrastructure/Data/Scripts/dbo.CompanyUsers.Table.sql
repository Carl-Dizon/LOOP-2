USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyUsers]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyUsers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](200) NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[LastModifiedOn] [datetime] NOT NULL,
	[CompanyId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[CreatedByUserId] [int] NOT NULL,
	[IsRegistered] [bit] NOT NULL,
	[IsArchived] [bit] NOT NULL,
 CONSTRAINT [PK_CompanyUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyUsers]  WITH CHECK ADD  CONSTRAINT [FK_CompanyUsers_Companies] FOREIGN KEY([CreatedByUserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[CompanyUsers] CHECK CONSTRAINT [FK_CompanyUsers_Companies]
GO
ALTER TABLE [dbo].[CompanyUsers]  WITH CHECK ADD  CONSTRAINT [FK_CompanyUsers_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[CompanyUsers] CHECK CONSTRAINT [FK_CompanyUsers_Users]
GO
