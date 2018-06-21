USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyProjectTaskWorkEstimates]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyProjectTaskWorkEstimates](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Duration] [bigint] NOT NULL,
	[ProjectTaskId] [int] NOT NULL,
	[EstimatedById] [int] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[LastModifiedOn] [datetime] NOT NULL,
	[IsArchived] [bit] NOT NULL,
 CONSTRAINT [PK_CompanyProjectTaskWorkEstimates] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyProjectTaskWorkEstimates]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectTaskWorkEstimates_CompanyProjectTasks] FOREIGN KEY([ProjectTaskId])
REFERENCES [dbo].[CompanyProjectTasks] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectTaskWorkEstimates] CHECK CONSTRAINT [FK_CompanyProjectTaskWorkEstimates_CompanyProjectTasks]
GO
ALTER TABLE [dbo].[CompanyProjectTaskWorkEstimates]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectTaskWorkEstimates_CompanyProjectTaskUsers] FOREIGN KEY([EstimatedById])
REFERENCES [dbo].[CompanyProjectTaskUsers] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectTaskWorkEstimates] CHECK CONSTRAINT [FK_CompanyProjectTaskWorkEstimates_CompanyProjectTaskUsers]
GO
