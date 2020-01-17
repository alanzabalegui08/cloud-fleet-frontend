<template>
  <div class="sidebar">
    <div class="sidebar-inner">
      <div class="sidebar-logo">
        <div class="peers ai-c fxw-nw">
          <div class="peer peer-greed">
            <a class="sidebar-link td-n" href="#">
              <div class="peers ai-c fxw-nw">
                <div class="peer">
                  <div class="logo">
                    <a href="/"><img :src="logo" alt="" :style="{ height: 35 + 'px', }" class="m-15"></a>
                  </div>
                </div>
                <div class="peer peer-greed ceneterLogo">
                  <h4>KLAY 2.0</h4>
                </div>
              </div>
            </a>
          </div>
          <div class="peer">
            <div class="mobile-toggle sidebar-toggle">
              <a href="#" @click.prevent="changeToggleNav('sidebar-mobil')" class="td-n">
                <i class="ti-arrow-circle-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ul class="sidebar-menu scrollable pos-r">
        <li  v-for="(item, index) in listMenu" :class="item.class" :key="index" >
          <a  :class="(item.down) ? 'dropdown-toggle' :'sidebar-link'" href="#" @click.prevent="acctionSubmenu(item)">
            <span class="icon-holder">
              <img v-if="item.icon.img" :src="item.icon.icon" alt="" :style="{ height: 20 + 'px', }" />     
              <i :class="item.icon"></i>
            </span>
            <span class="title">{{item.name}}</span>
            <span class="arrow" v-if="item.down">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu" v-if="item.down">
            <li  v-for="(o, i) in item.submenu" :key="i" >
              <router-link :to="o.path"> 
                <span v-on:click="changeToggleNav('link-bar')">{{o.name}}</span>
              </router-link>
            </li>
          </ul>
        </li>         
      </ul>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/static/images/klay_logo_small.png';
import sidebarMenu from '@/router/menu';
import { toggleNav }  from '@/util/SettingLayout';
export default {
    name : 'sidebar',
    data () {
        return {
          logo : logo,
          listMenu : sidebarMenu.menu,
          menu : null,
        }
    },
    created (){

    },
    computed : {
    },
    methods : {
      acctionSubmenu (menu) {
        if(menu.only){
          this.$router.push(menu.path);
        }
        (!menu.toggle) ? menu.class += ' open': menu.class = menu.class.replace('open','');
        menu.toggle = !menu.toggle;
        
      },
      changeToggleNav( accion = null){
        toggleNav(accion);
      }
    }
}
</script>