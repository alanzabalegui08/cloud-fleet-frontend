import Storage from '../service/Storage';

const storage  =  new Storage();

export const userService = {
    login,
    logout,
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

function logout () {
    if(storage.removeStore) {
        return {
            logout: true,
        }
    } else {
        return {
            logout : false,
        }
    }
}


function getUserStore () {
    return storage.getStorage;
}