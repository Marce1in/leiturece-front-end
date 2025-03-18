import { ComponentType } from "react";
import FullScreenLoading from "@/components/FullScreenLoading";
import useAuth from "./useAuth";
import RedirectComponent from "@/components/RedirectComponent";

export default function withAuth(Component: ComponentType<any>) {
    return (props: any) => {
        const userAuth = useAuth();

        if (userAuth.isLoading) {
            return <FullScreenLoading />;
        } else if (userAuth.isSuccess) {
            return <Component {...props} />;
        } else {
            return (
                <RedirectComponent
                    path="/login"
                    message="Usuário deslogado! porfavor refaça seu login"
                />
            );
        }
    };
}
