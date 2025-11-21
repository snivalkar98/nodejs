const nodemailer = require("nodemailer");

const sendMail = async(req,res) => {

    let testAccount     = await nodemailer.createTestAccount();
    let transporter     = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port:587,
        auth:{
            user: 'angie.hettinger41@ethereal.email',
            pass: 's4NyBWx6R4aJyWH28T'
        }, 
    });

    let info =  await transporter.sendMail({

        from:'"SSN Niv" <snivalkar1998@gmail.com>',
        to:"prasnnamangale027@gmail.com",
        subject:"Hello world",
        text:"Hello world",
        html:'<b>SSN Niv" snivalkar1998@gmail.com</b>'
    });
    console.log("Message sent:", info.messageId);
    res.json(info);
};

module.exports = sendMail;