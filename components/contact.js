import { TextField, Button, Grid } from "@mui/material";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_js4chue",
        "template_h3ih17x",
        form.current,
        "user_AvdqkQRo1Tj2mPGvjiX7N"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setSubject("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 48,
        lineHeight: 0,
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: "#cce0ff",
      }}
      // className="hero-background"
    >
      <h1>Get in touch today</h1>
      <p
        style={{
          color: "gray",
          lineHeight: 1,
          paddingLeft: 10,
          textAlign: "center",
        }}
      >
        Sit tight. We'll get back to you as soon as we possibly can.
      </p>
      <form
        onSubmit={sendEmail}
        ref={form}
        id="contact-form"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          maxWidth: 1200,
          marginBottom: 100,
          // borderRadius: 15,
          paddingBottom: 30,
          paddingTop: 30,
          paddingLeft: 20,
          paddingRight: 20,
          border: "3px solid rgb(190, 200, 218)",
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={2}>
          <Grid item xs={2} md={1}>
            <TextField
              label="Name"
              name="from_name"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              form
            />
          </Grid>
          <Grid item xs={2} md={1}>
            <TextField
              label="Email"
              name="reply_to"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={2} md={2}>
            <TextField
              multiline
              name="message"
              rows={6}
              label="Message"
              fullWidth
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={2} md={2}>
            <Button
              variant="contained"
              fullWidth
              color="secondary"
              onClick={sendEmail}
              form="email"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Contact;
