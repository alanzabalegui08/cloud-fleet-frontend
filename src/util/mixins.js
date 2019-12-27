export const mix  = {
    data : function () {
        return {
            name  : 'mix',
            lastname :'vue'
        }
    },
    created: function () {
        this.hello();
    },
    methods: {
        hello : function () {
            console.log('this is a metod');
        }
    },
}

/// this a example of mixins