SELECT * FROM dbo.AccessLevelPermissions 
LEFT JOIN dbo.AccessLevels ON dbo.AccessLevelPermissions.AccessLevelId = dbo.AccessLevels.Id
LEFT JOIN dbo.Permissions ON dbo.Permissions.Id = dbo.AccessLevelPermissions.PermissionId