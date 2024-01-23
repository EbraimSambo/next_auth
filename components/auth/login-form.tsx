"use client";
import * as Z from 'zod'
import { LoginSchema } from "@/schemas";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "@/components/ui/form";
const LoginForm = () => {

    const form = useForm<Z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });


    return ( 
        <CardWrapper
         headerLabel="Bem-vido de Volta"
         backBottonLabel="Não tem uma conta ?"
         backBottonHref="/auth/register"
         showSocial
         >
         <Form {...form} >
            <form onSubmit={form.handleSubmit(()=>{})}>

            </form>
         </Form>
        </CardWrapper>
     );
}
 
export default LoginForm;