import ContactSocial from "./ContactSocial";

const Contact = () => {
    return (
        <>
            <section id="contacto" className=" flex justify-center ">
            <form className="flex flex-col items-center text-white gap-4 pb-8 bg-gray-800/50 rounded-xl max-w-lg w-full p-8">
                <h1 className="text-lg font-bold">Trabajemos juntos</h1>
                <div className=" flex flex-col gap-1">
                    <label> Nombre </label>
                    <input type="text" className="bg-gray-800 border border-gray-600 rounded-md p-2 w-100"/>
                </div>
                <div className=" flex flex-col gap-2">
                    <label> Email </label>
                    <input type="email" className="bg-gray-800 border border-gray-600 rounded-md p-2 w-100" />
                </div>
                <div className=" flex flex-col gap-2">
                    <label> Mensaje </label>
                    <textarea className="bg-gray-800 border border-gray-600 rounded-md p-2 w-100"></textarea>
                </div>
                <div className="m-2">
                    <button className="bg-violet-500 hover:bg-violet-700 py-2 px-12 rounded-xl cursor-pointer"> Enviar </button>
                </div>
            </form>
            </section>
            <ContactSocial />
        </>
    )
}
export default Contact