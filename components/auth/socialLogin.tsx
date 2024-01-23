"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from '@/components/ui/button';


const Social = () => {
    return ( 
        <div className="w-full items-center flex gap-y-2 justify-between">
            <Button size={"lg"} className='w-fill' variant={"outline"}
            onClick={()=>{}}>
                <FcGoogle className='h-5 w-5' />
            </Button>

            <Button size={"lg"} className='w-fill' variant={"outline"}
            onClick={()=>{}}>
                <FaGithub className='h-5 w-5' />
            </Button>
        </div>
     );
}
 
export default Social;