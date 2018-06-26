USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyUsers]    Script Date: 6/26/2018 11:35:21 AM ******/
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
	[IsDefault] [bit] NOT NULL,
 CONSTRAINT [PK_CompanyUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyUsers] ADD  CONSTRAINT [DF_CompanyUsers_CreatedOn]  DEFAULT (getdate()) FOR [CreatedOn]
GO
ALTER TABLE [dbo].[CompanyUsers] ADD  CONSTRAINT [DF_CompanyUsers_LastModifiedOn]  DEFAULT (getdate()) FOR [LastModifiedOn]
GO
ALTER TABLE [dbo].[CompanyUsers] ADD  CONSTRAINT [DF_CompanyUsers_IsRegistered]  DEFAULT ((0)) FOR [IsRegistered]
GO
ALTER TABLE [dbo].[CompanyUsers] ADD  CONSTRAINT [DF_CompanyUsers_IsArchived]  DEFAULT ((0)) FOR [IsArchived]
GO
ALTER TABLE [dbo].[CompanyUsers] ADD  CONSTRAINT [DF_CompanyUsers_IsDefault]  DEFAULT ((0)) FOR [IsDefault]
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
