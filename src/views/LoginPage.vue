<template>
    <div class="peers ai-s fxw-nw h-100vh">
      <div class="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" v-bind:style="{ 'background-image': 'url(' + img_background + ')' }">
        <div class="pos-a centerXY">
          <div class="bgc-white bdrs-50p pos-r" style='width: 120px; height: 120px;'>
            <img class="pos-a centerXY" src="assets/static/images/logo.png" alt="">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style='min-width: 320px;'>
        
        <form>
          <div class="form-group">
            <label class="text-normal text-dark">Usaurio</label>
            <input type="email" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <label class="text-normal text-dark">Password</label>
            <input type="password" class="form-control" placeholder="">
          </div>
          <div class="form-group">
            <div class="peers ai-c jc-sb fxw-nw">
              <div class="peer">
                <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                  <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" class="peer">
                  <label for="inputCall1" class=" peers peer-greed js-sb ai-c">
                    <!-- <span class="peer peer-greed">Remember Me</span> -->
                  </label>
                </div>
              </div>
              <div class="peer">
                <button class="btn btn-primary">Ingresar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>
    <style>
      #loader {
        transition: all 0.3s ease-in-out;
        opacity: 1;
        visibility: visible;
        position: fixed;
        height: 100vh;
        width: 100%;
        background: #fff;
        z-index: 90000;
      }

      #loader.fadeOut {
        opacity: 0;
        visibility: hidden;
      }

      .spinner {
        width: 40px;
        height: 40px;
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
        background-color: #333;
        border-radius: 100%;
        -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
        animation: sk-scaleout 1.0s infinite ease-in-out;
      }

      @-webkit-keyframes sk-scaleout {
        0% { -webkit-transform: scale(0) }
        100% {
          -webkit-transform: scale(1.0);
          opacity: 0;
        }
      }

      @keyframes sk-scaleout {
        0% {
          -webkit-transform: scale(0);
          transform: scale(0);
        } 100% {
          -webkit-transform: scale(1.0);
          transform: scale(1.0);
          opacity: 0;
        }
      }
    </style>

<script>
import img  from '../assets/static/images/bg.jpg';
export default {
    name : 'login',
    data () {
        return {
            user : {username : 'username',password : 'password'},
            sumited : false,
            img_background : img,
        }
    },
    created (){
        // reset login
    },
    computed : {
        /*...mapGetters({
            isLoggedIn: 'account/isLoggedIn'
        }) */
    },
    methods : {
        /*
        ...mapActions('account',['login','resetState']),
        handleSubmit(){
            this.sumited = true;
            console.warn(this.user.username);
            if (this.user.username && this.user.password) {
                this.login(this.user);
            }
        },
        clearState(){
            console.log('reset state');
            new Storage().removeStore;
            this.resetState()
        }
        */
    }

    
}
</script>

