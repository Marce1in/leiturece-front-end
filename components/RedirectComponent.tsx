"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import FullScreenLoading from "./FullScreenLoading";

interface RedirectComponentProps {
  path: string;
  message?: string;
}

export default function RedirectComponent(props: RedirectComponentProps) {
  const { path, message } = props

  const router = useRouter();

  useEffect(() => {
    router.push(path);
    if (message){
      toast.error(message);
    }
  }, []);

  return <FullScreenLoading />
}
