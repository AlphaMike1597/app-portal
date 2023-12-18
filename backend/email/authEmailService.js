import { createTransport } from '../config/nodemailer.js'

export async function sendEmailVerification({full_name,email,token}) {
    const transporter = createTransport(
        "sandbox.smtp.mailtrap.io",
        2525,
        "5d9748404faee1",
        "c73010c9ec430d"
    )
    //Enviar email
    const info = await transporter.sendMail({
        from: 'App-portal',
        to: email,
        subject: 'App portal - confirma tu cuenta',
        text: 'Confirma tu cuenta',
        html: `<p>Hola: ${full_name}, confirma tu cuenta en Portal de Proveedores CICSA</p> 
        <p>Tu cuenta está casi lista, solo debes confirmar en el siguiente enlace</p>
        <a href="http://localhost:4000/api/auth/verify/${token}">Confirmar cuenta</a>
        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    })

    console.log('Mensaje enviado', info.messageId)
}