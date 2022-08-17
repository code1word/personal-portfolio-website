const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please complete all fields." });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: "dhruvyalamanchi9@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "dhruvyalamanchi9@gmail.com",
    subject: `New Message from ${data.name}`,
    html: `
            <h3>Information: <h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message: </h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please complete all fields." });
      res
        .status(200)
        .json({
          msg: "Thank you for your email. I will get back to you soon!",
        });
    } catch (error) {
      if (error)
        return res.status(500).json({ msg: "There has been a server error." });
    }
  });
});

module.exports = router;
