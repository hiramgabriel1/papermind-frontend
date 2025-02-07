import { SetStateAction, useState } from "react";
import axios from "axios";
import { host } from "../../utils/host";

/**
 * Hook para crear un chat cuando se activa manualmente
 */
export const useCreateChat = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const createChat = async (userId: number, formData: FormData) => {
		try {
			setLoading(true);
			const response = await axios.post(
				`${host.localApi}create-chat/${userId}`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			setData(response.data);
			setError(null);
		} catch (err) {
			setError(err as unknown as SetStateAction<null>);
			setData(null);
		} finally {
			setLoading(false);
		}
	};

	return { createChat, data, error, loading };
};
