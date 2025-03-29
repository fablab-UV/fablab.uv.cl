/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-custom-classname */
'use client'
import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'

// Componente principal Contact
const Contact: React.FC = () => {
  // useState para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Estado que indica si el formulario ha sido enviado con éxito
  const [submitted, setSubmitted] = useState(false)

  // Estado para manejar los mensajes de error en el formulario
  const [error, setError] = useState('')

  // Referencia para el botón de envío, que se puede utilizar para hacer scroll hacia él
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Maneja el cambio de los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Al cambiar el valor, hace scroll automático hacia el botón de envío
    if (submitButtonRef.current != null) {
      submitButtonRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Función de envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    // Validación: revisa si algún campo está vacío y muestra un mensaje de error
    if (
      formData.name.length === 0 ||
      formData.email.length === 0 ||
      formData.message.length === 0
    ) {
      setError('Por favor, completa todos los campos.')
      return
    }

    setIsSubmitting(true)

    // Configura los parámetros para enviar el formulario con EmailJS
    emailjs
      .send(
        'tu_service_id', // ID de tu servicio (reemplaza esto)
        'tu_template_id', // ID de tu plantilla (reemplaza esto)
        formData, // Datos del formulario
        'tu_public_key' // Clave pública de EmailJS (reemplaza esto)
      )
      .then((result) => {
        setSubmitted(true)
        setError('')
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch((error) => {
        console.error(error.text)
        setError('Hubo un error al enviar el mensaje.')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section className="body-font relative text-gray-600">
      <div className="container mx-auto flex flex-wrap px-5 py-16 sm:flex-nowrap">
        {/* Mapa de Google en la sección izquierda */}
        <div className="relative mt-1.5 flex h-[565px] items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-0 sm:mr-10 md:w-1/2 lg:w-2/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.401838737673!2d-71.61316889999999!3d-33.0458861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0da3d49d357%3A0x82a39b4be3b5eed8!2sFabLab%20UV!5e0!3m2!1ses-419!2scl!4v1729929637653!5m2!1ses-419!2scl"
            className="absolute inset-0 size-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-white bg-opacity-75 px-4 py-2 text-center shadow-md">
            <p className="font-medium text-gray-800">
              Gral Cruz 222, FabLab UV
            </p>
          </div>
        </div>

        {/* Formulario de contacto en la sección derecha */}
        <div className="flex h-[600px] w-full flex-col bg-white p-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
            Contáctanos
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            Si deseas agendar una visita o realizar una consulta, rellena el
            formulario que se encuentra a continuación.
          </p>
          <p className="mb-5 leading-relaxed text-gray-600">
            IMPORTANTE: horario de atención a público general (no residentes ni
            becados) es de 14:00 a 18:00hrs.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between"
          >
            {/* Campo de Nombre */}
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            {/* Campo de Correo Electrónico */}
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            {/* Campo de Mensaje */}
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Tu mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>
            {/* Mensaje de error */}
            {error.length > 0 && <p className="mt-3 text-red-500">{error}</p>}
            {/* Botón de Enviar */}
            <button
              ref={submitButtonRef}
              type="submit"
              disabled={isSubmitting || submitted} // Desactiva el botón si se está enviando o ya fue enviado
              className={`rounded border-0 bg-[#210a3e] px-6 py-2 text-lg text-white focus:outline-none ${submitted ? 'cursor-not-allowed bg-gray-500' : isSubmitting ? 'cursor-not-allowed bg-gray-400' : 'bg-[#210a3e] hover:bg-indigo-600'}`}
            >
              {isSubmitting ? 'Enviando...' : submitted ? 'Enviado' : 'Enviar'}
            </button>
            {/* Mensaje de confirmación al enviar */}
            {submitted && (
              <p className="mt-3 text-green-500">
                ¡Tu mensaje ha sido enviado correctamente!
              </p>
            )}
            <p className="mt-3 text-xs text-gray-500">
              Tiempo estimado de respuesta: 24 horas hábiles.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
