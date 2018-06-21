USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyProjects]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyProjects](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[OriginalStartDate] [datetime] NOT NULL,
	[OriginalEndDate] [datetime] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[LastModifiedOn] [datetime] NOT NULL,
	[CompanyId] [int] NOT NULL,
	[CreatedByUserId] [int] NOT NULL,
	[IsArchived] [bit] NOT NULL,
 CONSTRAINT [PK_Projects] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyProjects]  WITH NOCHECK ADD  CONSTRAINT [FK_Projects_Companies] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Companies] ([Id])
NOT FOR REPLICATION 
GO
ALTER TABLE [dbo].[CompanyProjects] CHECK CONSTRAINT [FK_Projects_Companies]
GO
