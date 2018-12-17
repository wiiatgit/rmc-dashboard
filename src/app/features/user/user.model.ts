export interface IAddress {
    numVoie: string;
    nomVoie: string;
    codePostal: string;
    ville: string;
}

export interface IUserProfil {
    userId: number;
    lastName: string;
    firstName: string;
    birthdayDate: string;
    pseudo: string;
    profilePicture: string;
    coverPicture: string;
    email: string;
    addresses: IAddress[];
    phoneNumbers: string;
}
