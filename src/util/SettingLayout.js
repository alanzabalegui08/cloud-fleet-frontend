
export function toggleNav() {
    const app = document.querySelector('.is-collapsed');
    if(app === null) {
       document.querySelector('.app').classList.add('is-collapsed');
    }else {
      document.querySelector('.app').classList.remove('is-collapsed');
    }
}