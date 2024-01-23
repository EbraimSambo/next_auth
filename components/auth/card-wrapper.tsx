"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Header from "@/components/auth/header";
import Social from "@/components/auth/socialLogin";
import BackButton from "@/components/auth/back-button";




interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backBottonLabel: string;
    backBottonHref: string; 
    showSocial: boolean;
}

export const  CardWrapper = ({
    children,
    headerLabel,
    backBottonLabel,
    backBottonHref, 
    showSocial,
}: CardWrapperProps)=>{
    return(
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}

            <BackButton
                label={backBottonLabel}
                href={backBottonHref}>

            </BackButton>
        </Card>

    )
}
