USE [loopDb]
GO
/****** Object:  Table [dbo].[AccessLevelPermissions]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccessLevelPermissions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AccessLevelId] [int] NOT NULL,
	[PermissionId] [int] NOT NULL,
 CONSTRAINT [PK_AccessLevelPermissions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[AccessLevelPermissions]  WITH CHECK ADD  CONSTRAINT [FK_AccessLevelPermissions_AccessLevels] FOREIGN KEY([AccessLevelId])
REFERENCES [dbo].[AccessLevels] ([Id])
GO
ALTER TABLE [dbo].[AccessLevelPermissions] CHECK CONSTRAINT [FK_AccessLevelPermissions_AccessLevels]
GO
ALTER TABLE [dbo].[AccessLevelPermissions]  WITH CHECK ADD  CONSTRAINT [FK_AccessLevelPermissions_Permissions] FOREIGN KEY([PermissionId])
REFERENCES [dbo].[Permissions] ([Id])
GO
ALTER TABLE [dbo].[AccessLevelPermissions] CHECK CONSTRAINT [FK_AccessLevelPermissions_Permissions]
GO
