export interface IUserType {
    code: string;
    label: string;
}

export interface IUserStatus {
    code: string;
    label: string;
}

export interface IAddress {
    numVoie: string;
    nomVoie: string;
    codePostal: string;
    ville: string;
}

export interface IPromotion {
    promotionId: number;
    codeParcours: string;
    session: string;
    parcoursId: number;
    code: string;
    libelle: string;
    titreParcours: string;
    evaluation: boolean;
}

export interface Workgroup {
    code: string;
    name: string;
    workgroupId: number;
    coverPicture: string;
    description: string;
    joinedDate: Date;
}

export interface IUserProfil {
    userType: IUserType;
    userId: number;
    civility: string;
    lastName: string;
    firstName: string;
    dateofBirth?: any;
    pseudo: string;
    profilePicture: string;
    coverPicture: string;
    email: string;
    internal: boolean;
    userStatus: IUserStatus;
    lastConnection: Date;
    totalConnectionTimeInSeconds: number;
    totalConnectionTime: string;
    addresses: IAddress[];
    phoneNumbers: any[];
    promotions: IPromotion[];
    workgroups: Workgroup[];
    lastConsolidationDate?: any;
    hasDownloadedMobileApp: boolean;
}
