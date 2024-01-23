import { CardWrapper } from "@/components/auth/card-wrapper";

const LoginForm = () => {
    return ( 
        <CardWrapper
         headerLabel="Bem-vido de Volta"
         backBottonLabel="Não tem uma conta ?"
         backBottonHref="/auth/register"
         showSocial
         >
            Login Form g
        </CardWrapper>
     );
}
 
export default LoginForm;