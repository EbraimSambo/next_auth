const LayoutAuth = ({children} : any) => {
    return ( 
        <div>
            <nav className="bg-red-600 text-white p-4">
                <h1>Layout Auth</h1>
            </nav>

            <div className="main">
                {children}
            </div>
        </div>
     );
}
 
export default LayoutAuth;