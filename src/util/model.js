export const driverModel = () => ({
    name: '',
    lastname: '',
    clave: '',
    rfc: '',
    address: '',
    cellphone: '',
    phone: '',
    cellphoneNetwork: '',
    seguroSocial: '',
    noLicenciaEstatal: '',
    vigLicenciaEstatal: '',
    noLicenciaFederal: '',
    vigLicenciaFederal : '',
    passwordXR : '',
    typeBlood : '',
    region : '',
    active : false,
});

export const truckModel = () =>  ({
    numUnidad : '',
    driver : '',
    comment : '',
    type : '0',
    model : '',
    marca :'',
    mantenimineto : '',
    subMarca : '',
    placas : '',
    tipoPlacas : '',
    combustible : '0',
    performance : '',
    machine : '',
    noSerie : '',
    poliza : '',
    vigenciaPoliza : '',
    cellphoneSeguro : '',
    claveTrackJack : '',
    serieCeiba : '',
    region : '',
    taller: false,
    tirada : false,
    puntaje : '',
    fotografia : '',
});

export const supervisorModel = () => ({
    name : '',
    userType : '',
    customer : '',
    phone : '',
    userApp : '',
    password : '',
    active : false,
});

export const stationModel = () => ({
    name : '',
    address : '',
    map : null,
});

export const regionModel = () => ({
    name : '',    
});

export const gasModel = () => ({
    unidad : '',
    litros : '',
    costo : '',
    date : new Date(),
    estacion : '',
});