
$(document).ready(function () {
    $('#cadastro').val({
        rules: {
            nome: {
                required: true,
                maxlength: 80,
                minlength: 10,
                minWords: 2,
            },
            email: {
                required,
                email: true,
            },
            cidade: {
                required: true
            },
        }
    })
})