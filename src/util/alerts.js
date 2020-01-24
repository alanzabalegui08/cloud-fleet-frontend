import swal from 'sweetalert';

export const alerts = {
    data: function () {
        return {
            nameMixin: 'Alerts',
        }
    },
    created: function () {},
    methods: {
        errorAddMoodule: function (nameModule = '') {
            swal("Ups !!", `No puedes agregar un ${nameModule} vacio !`, "error");
        },

        deleteResource : function (nameResource) {
            return swal({
                title: '',
                text: `Deseas eliminar este ${nameResource} ? `,
                icon: 'warning',
                buttons: true,
                dangerMode: true,
            });
        },
    },
}
