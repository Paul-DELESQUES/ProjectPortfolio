import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Contact.scss";
import MoonCanvas from "./canvas/Moon";

function Contact() {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { generateThemeClasses } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_rmb6pwv";
    const templateId = "template_ug2lguf";
    const publicKey = "vsZWmwsShEjxbFNxA";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Paul DELESQUES",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setLoading(false);
        alert("Email envoyé avec succès, je vous réponds au plus vite");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Erreur lors de l'envoi:", error);
        alert("Une erreur s'est produite. Veuillez réessayer");
      });
  };

  return (
    <div className="contact-ctn">
      <div className="card-contact-ctn">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="motion-contact-ctn"
        >
          <h2>Contact.</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="form-contact-ctn"
          >
            <label className="label-contact-ctn">
              <span className="span-contact-ctn">Votre Nom</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Quel est votre nom ?"
                className="input-contact-ctn"
              />
            </label>
            <label className="label-contact-ctn">
              <span className="span-contact-ctn">Votre email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Quel est votre email ?"
                className="input-contact-ctn"
              />
            </label>
            <label className="label-contact-ctn">
              <span className="span-contact-ctn">Votre Message</span>
              <textarea
                rows={7}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Que voulez vous dire ?"
                className="input-contact-ctn"
              />
            </label>

            <button
              type="submit"
              className={`button-contact-ctn ${generateThemeClasses()}`}
            >
              {loading ? "En cours d'envoi..." : "Envoyer"}
            </button>
          </form>
        </motion.div>
      </div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <MoonCanvas />
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
