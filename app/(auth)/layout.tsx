const Layout =({children}:{children: React.ReactNode})=>{
    return <div className="flex-center min-h-screen bg-primary-50 
            bg-dottted bg-cover bg-center bg-fixed">
                {children}
           </div>
}

export default Layout;