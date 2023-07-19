import { Chat } from "@/components/Chat";
import { Toaster } from "react-hot-toast";
export default function Home() {

  return (
    <div className="flex min-h-screen w-full h-full p-2 items-center justify-center bg-[#13111b] text-[#13111b]" >
      <Toaster position="top-center" />
      <Chat />
    </div>
  )
}
