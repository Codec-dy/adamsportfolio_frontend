import React, { useState } from 'react'

const Mobilenav = () => {
    const [open, setOpen] = useState(false)
        const close = () => {
            setOpen(false)
        }
        
 return (
        <div className='flex flex-row justify-between w-full items-center sm:hidden relative px-8 py-3'>
            <div>
                <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full " />
            </div>
            <div>
            <img src="/menu.png" onClick={() => setOpen(true)} className='w-[50px]' />
            <nav className={`${open ? "flex " : "hidden"} flex-col text-left bg-zinc-800 fixed left-0 text-white h-screen w-full top-0 z-40 justify-between items-start font-semibold p-4`}>
                <div className="flex flex-col self-center justify-center items-center w-full">
                    <div className="flex flex-row w-screen justify-between px-12 items-center gap-3">
                        <button onClick={close} className="text-gray-500 text-5xl justify-between bg-transparent border-none">X</button>
                        <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
                    </div>
                    <div className="flex flex-col gap-6 p-5 text-2xl text-center">
                        <a href={'/admin/projects'} className='text-lg font-semibold'>Projects</a>
                        <a href={'/admin/photography'} className='text-lg font-semibold'>Photography</a>
                        <a href={'/admin/illustrations'} className='text-lg font-semibold'>Illustrations</a>
                        <a href={'/admin/tradingcards'} className='text-lg font-semibold'>Trading cards</a>
                        <a href={'/admin/painting'} className='text-lg font-semibold'>Painting</a>
                        <a href={'/admin/websettings'} className='text-lg font-semibold'>Website Settings</a>
                        <div><a href={'/admin/'} className='text-lg font-semibold'>Logout</a></div>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Mobilenav