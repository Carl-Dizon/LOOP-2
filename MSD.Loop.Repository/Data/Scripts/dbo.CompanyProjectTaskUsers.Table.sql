USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyProjectTaskUsers]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyProjectTaskUsers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CompanyProjectUserId] [int] NOT NULL,
	[ProjectTaskId] [int] NOT NULL,
	[AssignedById] [int] NOT NULL,
	[AssignedOn] [datetime] NOT NULL,
 CONSTRAINT [PK_CompanyProjectTaskUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyProjectTaskUsers]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectTaskUsers_CompanyProjectTasks] FOREIGN KEY([ProjectTaskId])
REFERENCES [dbo].[CompanyProjectTasks] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectTaskUsers] CHECK CONSTRAINT [FK_CompanyProjectTaskUsers_CompanyProjectTasks]
GO
ALTER TABLE [dbo].[CompanyProjectTaskUsers]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectTaskUsers_CompanyProjectUsers] FOREIGN KEY([CompanyProjectUserId])
REFERENCES [dbo].[CompanyProjectUsers] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectTaskUsers] CHECK CONSTRAINT [FK_CompanyProjectTaskUsers_CompanyProjectUsers]
GO
ALTER TABLE [dbo].[CompanyProjectTaskUsers]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectTaskUsers_Users] FOREIGN KEY([AssignedById])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectTaskUsers] CHECK CONSTRAINT [FK_CompanyProjectTaskUsers_Users]
GO
