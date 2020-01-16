import Storage from '../service/Storage';

const storage  =  new Storage();

export const userService = {
    login,
    getUserStore
};


function login(username,password) {
    
    const user = {
        username : username,
        password : password,
    };
    storage.addItem = user;
    return user;
}


function getUserStore () {
    return storage.getStorage;
}