const LayoutSettings = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="flex flex-col gap-y-4">
            <header className="bg-black  text-white"> header </header>
           {children}
        </div>
     );
}
 
export default LayoutSettings;