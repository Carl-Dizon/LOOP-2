USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyProjectTasks]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyProjectTasks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[Duration] [bigint] NOT NULL,
	[CompanyProjectId] [int] NOT NULL,
	[CreatedByProjectUserId] [int] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[LastModifiedOn] [datetime] NOT NULL,
	[IsArchived] [bit] NOT NULL,
 CONSTRAINT [PK_CompanyProjectTasks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyProjectTasks]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectTasks_CompanyProjects] FOREIGN KEY([CompanyProjectId])
REFERENCES [dbo].[CompanyProjects] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectTasks] CHECK CONSTRAINT [FK_CompanyProjectTasks_CompanyProjects]
GO
ALTER TABLE [dbo].[CompanyProjectTasks]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectTasks_CompanyProjectUsers] FOREIGN KEY([CreatedByProjectUserId])
REFERENCES [dbo].[CompanyProjectUsers] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectTasks] CHECK CONSTRAINT [FK_CompanyProjectTasks_CompanyProjectUsers]
GO
