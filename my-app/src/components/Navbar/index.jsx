import logo from '../../assets/Images/notesLogo.jpg';
export const Navbar = () =>{
    return(
        <>
            <header className='flex p-3 gap-x-3 border-b-4 border-slate-600 bg-slate-900'>
                <div className="w-12 h-12">
                    <img className='w-full h-full pt-2 pl-1' src={logo} alt="logo"/>
                </div>
                <h1 className='text-indigo-400 text-[36px] font-bold'>NoteIt</h1>
            </header>
        </>
    )
}