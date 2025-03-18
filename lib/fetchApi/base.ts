import axios, { AxiosError } from "axios";

const axiosBase = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },

    withCredentials: true,
});

axiosBase.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (axios.isAxiosError(error)) {
            // The API generally returns a error using the format: { detail: "Error Message" }
            // If this object exists, we set the axios default error message to the API message.
            const requestErrorMessage = error.response?.data as { detail?: string };

            if (requestErrorMessage.detail) {
                error.message = requestErrorMessage.detail;
            }
        }

        return Promise.reject(error);
    },
);

export default axiosBase;
