
export function toggleNav( from = null) {
  console.log(from);
  
    const app = document.querySelector('.is-collapsed');
    if(app === null && from === null) {
       document.querySelector('.app').classList.add('is-collapsed');
    }else {
      document.querySelector('.app').classList.remove('is-collapsed');
    }

    if(from === null) {
      document.querySelector('.app').classList.add('is-collapsed');
    }
}