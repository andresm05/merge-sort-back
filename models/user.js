const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email:{
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    img:{
        type: String,
    },
    rol:{
        type: String,
        required: true,
        default: 'USER_ROLE',
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state:{
        type: Boolean,
        default: true
    },
});

UserSchema.methods.toJSON = function(){
    const {__v, ...usuario} = this.toObject();
    return usuario;
}

module.exports = model('User', UserSchema);