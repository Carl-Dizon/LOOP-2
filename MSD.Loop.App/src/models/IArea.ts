export interface IArea {
    areaId: number,
    areaName: string,
    estimatedHours: number,
    totalHoursLogged: number,
    usersInHoursLogged: number,
    estimatedMaterials: number,
    totalMaterialsLogged: number,
    usersInMaterialsLogged: number,
    estimateCost: number,
    spentCost: number,
    materials?: [{
        materialName: string,
        usageCount: number
    }]
}