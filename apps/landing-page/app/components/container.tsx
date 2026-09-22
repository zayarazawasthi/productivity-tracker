export default function Container ({children}:{children:React.ReactNode}){
    return(
        <div className="flex max-w-3xl  mx-auto h-screen p-2  ">
            {children}
        </div>
    )

} 