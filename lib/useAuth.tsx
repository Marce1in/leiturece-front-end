import { useQuery } from "@tanstack/react-query";
import { getAuth } from "./fetchApi/fetchAuth";

export default function useAuth() {
    const userAuth = useQuery({
        queryKey: ["auth"],
        queryFn: () => getAuth(),
        staleTime: 29 * 1000 * 60,
    });

    return userAuth
}
