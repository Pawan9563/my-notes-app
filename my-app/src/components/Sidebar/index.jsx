import {NavLink} from 'react-router-dom';
export const Sidebar = () =>{
    const selecting=({isActive})=>{
        const basic = 'flex flex-col hover:bg-indigo-300 w-full px-4 py-1 rounded-r-full';
        const active = isActive ? 'flex flex-col bg-indigo-900 text-white w-full px-4 rounded-r-full' : '';
        return `${basic} ${active}`

    }
    return(
        <>
            <aside className='flex w-28 flex-col bg-stone-200 h-screen gap-9 border-r-4 py-4'>
                <NavLink className={selecting} to='/' end><span className="material-symbols-outlined pl-2">home</span>Home</NavLink>
                <NavLink className={selecting} to='/archive'><span class="material-symbols-outlined pl-2">archive</span>Archive</NavLink>
                <NavLink className={selecting} to='/important'><span class="material-symbols-outlined pl-2">star</span>Important</NavLink>
                <NavLink className={selecting}to='/trash'><span class="material-symbols-outlined pl-2">restore_from_trash</span>Trash</NavLink>
            </aside>
        </>
    )
}