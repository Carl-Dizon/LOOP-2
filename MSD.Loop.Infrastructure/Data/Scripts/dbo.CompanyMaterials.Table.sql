USE [loopDb]
GO
/****** Object:  Table [dbo].[CompanyMaterials]    Script Date: 6/21/2018 3:55:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompanyMaterials](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NOT NULL,
	[LastModifiedOn] [datetime] NOT NULL,
	[CompanyId] [int] NOT NULL,
	[CreatedByUserId] [int] NOT NULL,
	[IsArchived] [bit] NOT NULL,
 CONSTRAINT [PK_CompanyMaterials] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[CompanyMaterials]  WITH CHECK ADD  CONSTRAINT [FK_CompanyMaterials_Companies] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Companies] ([Id])
GO
ALTER TABLE [dbo].[CompanyMaterials] CHECK CONSTRAINT [FK_CompanyMaterials_Companies]
GO
ALTER TABLE [dbo].[CompanyMaterials]  WITH CHECK ADD  CONSTRAINT [FK_CompanyMaterials_Users] FOREIGN KEY([CreatedByUserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[CompanyMaterials] CHECK CONSTRAINT [FK_CompanyMaterials_Users]
GO
