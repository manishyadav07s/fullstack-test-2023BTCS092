import mongoose from "mongoose";

const contactSchema = new mongoose.Schema ({
    name :{type : String},
    email:{type : String},
    message:{type : String}

})


const contact = mongoose.model("contact", contactSchema);
export default contact;