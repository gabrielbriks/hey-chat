'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from 'ai/react';
import { toast } from "react-hot-toast";

export interface ChatProps {} 

export function Chat(props: ChatProps) {
  
  const avatarUrlArnold = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1032b378-9e4c-4e5b-9344-03d0fafe3154/dfeyh4u-111db1b6-89b4-4f9c-a1c4-7afd3a0df1ee.png/v1/fill/w_1052,h_759/hey_arnold__nh__vector_by_jack1set2_dfeyh4u-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTI0IiwicGF0aCI6IlwvZlwvMTAzMmIzNzgtOWU0Yy00ZTViLTkzNDQtMDNkMGZhZmUzMTU0XC9kZmV5aDR1LTExMWRiMWI2LTg5YjQtNGY5Yy1hMWM0LTdhZmQzYTBkZjFlZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vYxSUYDOe0Uxqk67Kkpqc2snHYIESVVAojtEU0_VeAk';

  const { 
    messages, //São quais mensagens que já troquei com a ia
    input, // input de texto
    handleInputChange, //envento disparado quando eu trocar alguma coisa
    handleSubmit,
    isLoading,
    error,
  } = useChat({
    api: '/api/chat',
  });

  if (error) {
    toast.error(error.message)
  }

  return (
    <>
      <Card className="w-full h-full max-w-[440px] max-h-[620px] min-h-[470px] bg-slate-100"> {/*bg-[#463f68]*/}
    <CardHeader>
      <CardTitle className="text-center">I am Hey Chat</CardTitle>
      <CardDescription>Posso te ajudar a responder algumas perguntas simples, mas não abuse...</CardDescription>
    </CardHeader>
    <CardContent className="">
      <ScrollArea className="flex-1  h-[400px] w-full pr-4">
        {
          messages.map(message => {
            return (
              <div key={message.id} className="flex gap-3 text-slate-600 mb-4">
                {
                  message.role === 'user' ? (
                    <Avatar className="border border-zinc-400 ">
                      <AvatarFallback>US</AvatarFallback>
                      <AvatarImage src="https://github.com/gabrielbriks.png"/>
                    </Avatar>
                  )
                  :
                  (
                    <Avatar className="border border-zinc-400">
                      <AvatarFallback>HA</AvatarFallback>
                      <AvatarImage src={avatarUrlArnold}/>
                    </Avatar>
                  )
                }
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === 'user' ? 'Você:' : 'Eu:'}
                  </span>
                  {message.content}
                </p>
              </div>
              
            )
          })
        }
      </ScrollArea>
    </CardContent>
    <CardFooter className="">
      <form className="flex w-full gap-2" onSubmit={handleSubmit}>
        <Input placeholder="Como eu posso te ajudar? " value={input} onChange={handleInputChange} />
        <Button type="submit">Enviar</Button>
      </form>
    </CardFooter>
  </Card>
    </>
    

  )
}

