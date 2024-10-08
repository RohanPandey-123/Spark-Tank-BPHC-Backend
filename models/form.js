import mongoose from "mongoose";

const schema2 = new mongoose.Schema({
    name:{
        type:String
    },
    enrollmentNo:{
        type:String
    },
    batch:{
        type:String
    },
    mobileNo:{
        type:Number
    },
    emailId:{
        type:String
    },
    aadharNo:{
        type:Number
    },
    teamname:{
        type:String
    },
    uso:{
        type:String
    },
    ideaSubject:{
        type:String
    },
    detailedDescription:{
        type:String
    },
    marketSize:{
        type:String
    },
    targetMarket:{
        type:String
    },
    marketingPlan:{
        type:String
    },
    potentialRisks:{
        type:String
    },
    salesStrategy:{
        type:String
    },
    amountRequest:{
        type:Number
    },
    verified:{
        type:Boolean,
        default: false
    },  
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required : true,
    },
});
export const Form = mongoose.model("Form",schema2);