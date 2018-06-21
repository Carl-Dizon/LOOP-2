USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyProjectTaskMaterialEstimates]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyProjectTaskMaterialEstimates](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProjectTaskId] [int] NOT NULL,
	[EstimatedById] [int] NULL,
	[CompanyMaterialId] [int] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[LastModifiedOn] [datetime] NOT NULL,
	[IsArchived] [bit] NOT NULL,
 CONSTRAINT [PK_CompanyProjectTaskMaterialEstimates] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyProjectTaskMaterialEstimates]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectTaskMaterialEstimates_CompanyMaterials] FOREIGN KEY([CompanyMaterialId])
REFERENCES [dbo].[CompanyMaterials] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectTaskMaterialEstimates] CHECK CONSTRAINT [FK_CompanyProjectTaskMaterialEstimates_CompanyMaterials]
GO
ALTER TABLE [dbo].[CompanyProjectTaskMaterialEstimates]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectTaskMaterialEstimates_CompanyProjects] FOREIGN KEY([ProjectTaskId])
REFERENCES [dbo].[CompanyProjects] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectTaskMaterialEstimates] CHECK CONSTRAINT [FK_CompanyProjectTaskMaterialEstimates_CompanyProjects]
GO
ALTER TABLE [dbo].[CompanyProjectTaskMaterialEstimates]  WITH CHECK ADD  CONSTRAINT [FK_CompanyProjectTaskMaterialEstimates_CompanyProjectTaskUsers] FOREIGN KEY([EstimatedById])
REFERENCES [dbo].[CompanyProjectTaskUsers] ([Id])
GO
ALTER TABLE [dbo].[CompanyProjectTaskMaterialEstimates] CHECK CONSTRAINT [FK_CompanyProjectTaskMaterialEstimates_CompanyProjectTaskUsers]
GO
