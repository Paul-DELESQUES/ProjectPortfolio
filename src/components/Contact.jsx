import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Contact.scss";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { generateThemeClasses } = useTheme();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Paul DELESQUES",
          from_email: form.email,
          to_email: "pdelesques@outlook.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci, je vous réponds au plus vite");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ah, quelque chose s'est mal passé. Veuillez réessayer");
        }
      );
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
                value={form.name}
                onChange={handleChange}
                placeholder="Quel est votre nom ?"
                className="input-contact-ctn"
              />
            </label>
            <label className="label-contact-ctn">
              <span className="span-contact-ctn">Votre email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Quel est votre email ?"
                className="input-contact-ctn"
              />
            </label>
            <label className="label-contact-ctn">
              <span className="span-contact-ctn">Votre Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
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
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
