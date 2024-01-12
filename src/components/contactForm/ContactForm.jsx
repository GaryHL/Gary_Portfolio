import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { BsXLg } from "react-icons/bs";
import emailjs from "emailjs-com";
import { ContainerForm, Form } from './StyledContactForm'
import swal from "sweetalert";

function ContactForm({ formActive, setFormActive }) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_49f8i38",
                "template_09hkx2n",
                form.current,
                "3VVe97XYo_PofC1Gw"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    swal("Perfecto, recibí tu mensaje!", "Gracias por tu tiempo, te reponderé lo más pronto posible.", "success");

                    setFormActive(!formActive)
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <>
            <ContainerForm animate={formActive ? {
                opacity: 1,
                display: 'flex'
            } : { opacity: 0, display: 'none' }

            }>
                <Form ref={form} onSubmit={sendEmail} className="container_form">
                    <h1>Contáctame</h1>
                    <BsXLg onClick={() => setFormActive(!formActive)} className="closeButton" />
                    <input
                        type="text"
                        name="user_name"
                        className="input_date"
                        placeholder="Tu nombre"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        className="input_date"
                        placeholder="Tu email"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        required
                    />
                    <button type="submit" className="glow-on-hover" >Enviar</button>

                </Form>

            </ContainerForm>
        </>
    )
}

export default ContactForm