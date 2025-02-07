import { useForm } from "react-hook-form";
import { FaBrain } from "react-icons/fa";
import { IChat } from "../../../interfaces/chat.interface";
import { useCreateChat } from "@/hooks/useCreateChat";

/**
 * Modal para crear un nuevo chat
 */
const ModalUI = () => {
	const { register, handleSubmit, reset } = useForm<IChat>();
	const { createChat, data, error, loading } = useCreateChat();

	const onSubmit = async (formData: IChat) => {
		console.log("Datos del formulario:", formData);
		const { title, description, file } = formData;

		const data = new FormData();

		data.append("title", title);
		data.append("description", description);
		if (file) {
			data.append("file", file);
		}

		await createChat(1, data);

		reset();
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="fixed z-10 inset-0 overflow-y-auto">
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					{/* Background overlay */}
					<div className="fixed inset-0 bg-gray-500 opacity-75"></div>

					{/* Modal panel */}
					<div
						className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
						role="dialog"
						aria-modal="true"
						aria-labelledby="modal-headline"
					>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							{/* Modal header */}
							<div className="sm:flex sm:items-start">
								<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
									<FaBrain className="text-white text-4xl" />
								</div>
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<h3
										className="text-lg leading-6 font-medium text-gray-900"
										id="modal-headline"
									>
										Nuevo Chat
									</h3>
									<p className="text-sm text-gray-500">
										Ingresa los detalles para crear un nuevo chat.
									</p>
								</div>
							</div>

							{/* Formulario */}
							<form onSubmit={handleSubmit(onSubmit)} className="mt-4">
								<label className="block text-sm font-medium text-gray-700">
									Título del chat
								</label>
								<input
									{...register("title", { required: true })}
									type="text"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
									placeholder="Escribe el título..."
								/>

								<label className="block text-sm font-medium text-gray-700 mt-4">
									Descripción
								</label>
								<textarea
									{...register("description")}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
									placeholder="Escribe la descripción..."
									rows={3}
								></textarea>

								<label className="block text-sm font-medium text-gray-700 mt-4">
									Archivo PDF
								</label>
								<input
									{...register("file")}
									type="file"
									accept=".pdf"
									className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
								/>

								{/* Botones */}
								<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mt-4">
									<button
										type="submit"
										disabled={loading}
										className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${
											loading ? "bg-gray-400" : "bg-red-500 hover:bg-red-700"
										} text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm`}
									>
										{loading ? "Creando..." : "Crear Chat"}
									</button>
									<button
										type="button"
										className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
									>
										Cancelar
									</button>
								</div>
							</form>

							{error && (
								<p className="text-red-500 text-sm text-center mt-2">{error}</p>
							)}
							{data && (
								<p className="text-green-500 text-sm text-center mt-2">
									Chat creado con éxito
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalUI;
