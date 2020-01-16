export default class Storage {
    get getStorage () {
        return JSON.parse(
            localStorage.getItem('user')
        );    
    }

    set addItem(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    get removeStore() {
        localStorage.removeItem('user');
        return true;
    }
}