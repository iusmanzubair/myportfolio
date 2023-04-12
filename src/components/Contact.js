import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tqupoy6', 'template_khmwjfc', form.current, 'avFEcr2F3RYtZDx1_')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-center items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form ref={form} onSubmit={sendEmail} variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              type="text"
              name="from_name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your name"
            />
            <input
              type="email"
              name="from_email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
            ></textarea>
            <input className="btn btn-lg" type="submit" value="Send message" />
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
