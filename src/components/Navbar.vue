<template>
  <div class="header navbar">
    <div class="header-container">
      <ul class="nav-left">
        <li>
          <a id='sidebar-toggle' class="sidebar-toggle" href="#" @click.prevent="changeToggleNav()">
            <i class="ti-menu"></i>
          </a>
        </li>
      </ul>
      <ul class="nav-right">
        <li class="dropdown">
          <a href="" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
            <div class="peer mR-10">
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            <div class="peer">
              <span class="fsz-sm c-grey-900">klay user</span>
            </div>
          </a>
          <ul class="dropdown-menu fsz-sm  bgcH-grey-100  c-grey-700">
            <li>
              <a href="" @click.prevent="logout()" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                <i class="ti-power-off mR-10"></i>
                <span>Cerrar Sesión</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

import { toggleNav } from '@/util/SettingLayout.js';
import { mapActions } from "vuex";
export default {
    name : 'navbar',
    data () {
        return {
        }
    },
    created (){
    },
    computed : {
    },
    methods : {
      ...mapActions({
        'logoutSession' : 'account/logout',
      }),
      changeToggleNav(){
        toggleNav('sidebar');
      },
      logout() {
        this.logoutSession();
      }
    }
}
</script>