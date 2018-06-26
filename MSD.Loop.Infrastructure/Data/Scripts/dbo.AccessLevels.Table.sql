USE [loopDb]
GO
/****** Object:  Table [dbo].[AccessLevels]    Script Date: 6/26/2018 10:30:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccessLevels](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[IsArchived] [bit] NOT NULL,
 CONSTRAINT [PK_AccessLevels] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[AccessLevels] ON 

INSERT [dbo].[AccessLevels] ([Id], [Name], [IsArchived]) VALUES (6, N'superadmin', 0)
INSERT [dbo].[AccessLevels] ([Id], [Name], [IsArchived]) VALUES (7, N'admin', 0)
INSERT [dbo].[AccessLevels] ([Id], [Name], [IsArchived]) VALUES (8, N'user', 0)
SET IDENTITY_INSERT [dbo].[AccessLevels] OFF
