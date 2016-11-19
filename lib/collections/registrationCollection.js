/**
 * Created by venkatasrinag on 18/11/16.
 */
MlRegistration = new Mongo.Collection("MlRegistration");

var MlUserRegistration = new SimpleSchema({
    fullName:{
        type: String,
        optional: true
    },
    mobileNumber:{
        type: Number,
        optional: true
    },
    eMail:{
        type: String,
        optional: true
    },
    city:{
        type: String,
        optional:true
    },
    regType:{
        type:String,
        optional:true
    },
    userName:{
        type:String,
        optional:true
    },
    password:{
        type: String,
        optional:true
    },
    referralType:{
        type:String,
        optional:true
    },
    linkedInUrl:{
        type:String,
        optional:true
    },
    message:{
        type:String,
        optional:true
    }
});

MlRegistration.attachSchema(MlUserRegistration);
