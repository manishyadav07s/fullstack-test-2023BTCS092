// import express from 'express';
// import contact from '../models/contactModel.js';
// import nodemailer from 'nodemailer';
// import validator from 'validator';

// export const submitContact = async (req, res) => {
//    const { name, email, message } = req.body;

   
//    if (!validator.isEmail(email)) {
//      return res.status(400).json({ success: false, message: "Invalid email" });
//    }

//       try {
     
//      const newContact = new Contact({ name, email, message });
//      await newContact.save();

//      const transporter = nodemailer.createTransport({
//        service: "gmail",
//        auth: {
//          user: process.env.EMAIL_USER,
//          pass: process.env.EMAIL_PASS
//        }
//      });

// await transporter.sendMail({
//        from: process.env.EMAIL_USER,
//        to: email,
//        subject: "Welcome to Our Platform",
//        text:`Hello ${name}, \nThanks for contacting us  `
//      });
//       }
// catch (error) {
//      res.status(500).json({ success: false, message: "Server error" });
//    }
// }






import Contact from "../models/contactModel.js";
import nodemailer from "nodemailer";
import validator from "validator";

export const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  // Email validation
  if (!validator.isEmail(email)) {
    return res.status(400).json({ success: false, message: "Invalid email" });
  }

  try {
    // Save to DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Our Platform",
      text: `Hello ${name},\n\nThanks for contacting us! We will get back to you soon.\n\n- Team`
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
