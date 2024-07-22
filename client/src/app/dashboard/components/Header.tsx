const Header = ( { title }: { title: string } ) => {
    return ( 
        <div className="w-full bg-background shadow-md p-7 px-24 flex items-center">
            <h1 className="w-10/12 bg-transparent text-2xl uppercase text-text">{title}</h1>
        </div>
     );
}
 
export default Header;