USE [loopDb]
GO
/****** Object:  Table [dbo].[AccessLevels]    Script Date: 7/3/2018 12:09:22 PM ******/
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
ALTER TABLE [dbo].[AccessLevels] ADD  CONSTRAINT [DF_AccessLevels_IsArchived]  DEFAULT ((0)) FOR [IsArchived]
GO
