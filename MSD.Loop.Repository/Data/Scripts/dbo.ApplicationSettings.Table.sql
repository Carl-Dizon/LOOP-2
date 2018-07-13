USE [loopDb]
GO
/****** Object:  Table [dbo].[ApplicationSettings]    Script Date: 7/3/2018 12:09:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApplicationSettings](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
	[Value] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NOT NULL,
	[LastModifiedOn] [datetime] NOT NULL,
	[IsToggleType] [bit] NOT NULL,
 CONSTRAINT [PK_ApplicationSettings] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[ApplicationSettings] ADD  CONSTRAINT [DF_ApplicationSettings_CreatedOn]  DEFAULT (getdate()) FOR [CreatedOn]
GO
ALTER TABLE [dbo].[ApplicationSettings] ADD  CONSTRAINT [DF_ApplicationSettings_LastModifiedOn]  DEFAULT (getdate()) FOR [LastModifiedOn]
GO
ALTER TABLE [dbo].[ApplicationSettings] ADD  CONSTRAINT [DF_ApplicationSettings_IsToggleType]  DEFAULT ((0)) FOR [IsToggleType]
GO
