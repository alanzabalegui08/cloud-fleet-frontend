 const SettingsSidebar = {

    init() {
        this.isOpen = false;
        this.modeMobil = false;
        if(screen.width < 800){
            this.modeMobil =  true;
            this.removeCollapsed();
        }
    },

    toggleSidebar(from) {
        this.reSize();
        if(this.modeMobil) {
            this.toggleMobil(from);
        }else{
            this.toggleDesktop(from);
        }
    },

    toggleMobil(from){
        if(this.isOpen) {
            this.isOpen = false;
            this.removeCollapsed();
        }else{
            this.addCollapsed();
            this.isOpen = true;
        }
        if(from === 'link-bar'){
            this.removeCollapsed()
        }
    },
    toggleDesktop(from) {
        if(this.isOpen) {
            this.addCollapsed();
            this.isOpen = false;
        }else{
            this.isOpen = true;
            this.removeCollapsed()
        }
        if(from === 'link-bar'){
            this.addCollapsed()
        }
    },

    addCollapsed(){
        document.querySelector('.app').classList.add('is-collapsed');
    },

    removeCollapsed(){
        document.querySelector('.app').classList.remove('is-collapsed');
    },

    reSize(){
        if(screen.width < 800){
            this.modeMobil =  true;
        }else{
            this.modeMobil =  false;
        }
    },
    
    getObject() {
        return {
            isopen : this.isOpen,
            name : this.name,
            mode_mobil : this.modeMobil
        };
    }
}
export default SettingsSidebar;