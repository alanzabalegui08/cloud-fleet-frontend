export const driverModel = () => ({
    name: 'carlos',
    lastname: 'lastra',
    clave: '12345',
    rfc: 'rfc',
    address: 'direccion',
    cellphone: '9613528341',
    phone: '9613528341',
    cellphoneNetwork: '9613528341',
    seguroSocial: 'XXXXX',
    noLicenciaEstatal: 'XXXXX',
    vigLicenciaEstatal: 'XXXX',
    noLicenciaFederal: 'XXXX',
    vigLicenciaFederal : 'XXX',
    passwordXR : 'XXXX',
    typeBlood : 'XXXX',
    region : 'XXXXX',
    active : false,
});

export const truckModel = () =>  ({
    numUnidad : '123',
    driver : '',
    comment : '',
    type : '0',
    model : 'CAR',
    marca :'CARS',
    mantenimineto : '',
    subMarca : '',
    placas : '',
    tipoPlacas : '',
    combustible : '0',
    performance : '1',
    machine : 'M3',
    noSerie : '1234567',
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
    name : 'nombre',
    userType : '1',
    customer : 'cliente',
    phone : '9863747364',
    userApp : 'user',
    password : 'password',
    active : false,
});

export const stationModel = () => ({
    idStation : '1',
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

export const address = () => ({
    fulladdress : '',
    street : '',
    postalcode : '',
    suburn : '',
    city : '',
    state : '',
    rootList : [],
    position : {},
    markets : [],
});