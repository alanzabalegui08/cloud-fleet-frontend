<template>
    <div class='col-md-6 col-lg-3'>
        <div class="layers bd bgc-white p-20">
            <div class="layer w-100 mB-10">
                <h4 class="lh-1">{{title}}</h4>
            </div>
            <div class="layer w-100">
                <div class="peers ai-sb fxw-nw">
                    <div class="peer peer-greed">
                        <span id="sparklinedash">
                            <a href="/"><img :src="imgSource" alt="" :style="{ height: 35 + 'px', }" class="m-15"></a>
                        </span>
                    </div>
                    <div class="peer py-3">
                        <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">10</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'card',
    props : {
        title : {
            type : String
        },
        imgSource  : {
            type : String,
        },
    },
    data () {
        return {
        }
    },
    created (){
    },
    computed : {
    },
    methods : {

    }
}
</script>