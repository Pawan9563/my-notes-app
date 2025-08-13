import {Navbar} from '../components/Navbar/index';
import {Sidebar} from '../components/Sidebar/index';
export const Home = () =>{
  return (
    <>
      <Navbar/>
      <main className='flex gap-3'>
        <Sidebar/>
        <div className='bg-yellow-300 h-36 p-3'>
          <div className='flex flex-col gap-1'>
            <input placeholder='Title' className='bg-yellow-100 border'/>
            <textarea placeholder='Type in...' className='bg-yellow-100 border'/>
            <button><span className="material-symbols-outlined text-amber-800">add_circle</span></button>
          </div>
        </div>
      </main>
    </>
  )
}