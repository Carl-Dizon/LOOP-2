USE [loopDb]
GO
/****** Object:  Table [dbo].[Companies]    Script Date: 6/26/2018 11:32:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Companies](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[WebUrl] [nvarchar](50) NULL,
	[LogoUrl] [nvarchar](200) NULL,
	[CreatedOn] [datetime] NOT NULL,
	[LastModifiedOn] [datetime] NOT NULL,
	[CreatedByUserId] [int] NOT NULL,
	[IsArchived] [bit] NOT NULL,
	[IsDefault] [bit] NOT NULL,
 CONSTRAINT [PK_Companies] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Companies] ON 

INSERT [dbo].[Companies] ([Id], [Name], [Description], [WebUrl], [LogoUrl], [CreatedOn], [LastModifiedOn], [CreatedByUserId], [IsArchived], [IsDefault]) VALUES (3, N'Default', NULL, NULL, NULL, CAST(N'2018-06-21T10:02:08.217' AS DateTime), CAST(N'2018-06-21T10:02:08.217' AS DateTime), 1, 0, 1)
SET IDENTITY_INSERT [dbo].[Companies] OFF
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_CreatedOn]  DEFAULT (getdate()) FOR [CreatedOn]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_LastModifiedOn]  DEFAULT (getdate()) FOR [LastModifiedOn]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_IsArchived]  DEFAULT ((0)) FOR [IsArchived]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [DF_Companies_IsDefault]  DEFAULT ((0)) FOR [IsDefault]
GO
ALTER TABLE [dbo].[Companies]  WITH CHECK ADD  CONSTRAINT [FK_Companies_Users] FOREIGN KEY([CreatedByUserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Companies] CHECK CONSTRAINT [FK_Companies_Users]
GO
