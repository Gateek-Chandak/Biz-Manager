const Header = ( { title }: { title: string } ) => {
    return ( 
        <div className="w-full bg-header shadow-md p-7 px-24 flex items-center">
            <h1 className="w-11/12 bg-transparent text-background">{title}</h1>
            <button className="bg-white shadow-sm w-32 py-1 rounded-full">New Client</button>
        </div>
     );
}
 
export default Header;