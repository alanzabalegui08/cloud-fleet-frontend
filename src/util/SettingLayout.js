

export function toggleNav(from = null) {
  
  const app = document.querySelector('.is-collapsed');
  if(from == 'link-bar') {
    document.querySelector('.app').classList.add('is-collapsed');
    return;
  }

  if (app === null) {
    document.querySelector('.app').classList.add('is-collapsed');
  } else {
    document.querySelector('.app').classList.remove('is-collapsed');
  }

}