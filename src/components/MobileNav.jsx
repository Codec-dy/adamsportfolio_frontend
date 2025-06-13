import React, { useState } from 'react'

const MobileNav = ({insta, email,facebook}) => {
    const [open, setOpen] = useState(false)
    const close = () => {
        setOpen(false)
    }
    
    return (
        <div className='flex flex-row justify-between w-full items-center sm:hidden relative px-8'>
            <div>
                <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full " />
            </div>
            <div>
            <img src="menu.png" onClick={() => setOpen(true)} className='w-[50px]' />
            <nav className={`${open ? "flex " : "hidden"} flex-col text-left bg-zinc-800 fixed left-0 text-white h-screen w-full top-0 z-40 justify-between items-start font-semibold p-4`}>
                <div className="flex flex-col self-center justify-center items-center w-full">
                    <div className="flex flex-row w-screen justify-between px-12 items-center gap-3">
                        <button onClick={close} className="text-gray-500 text-5xl justify-between bg-transparent border-none">X</button>
                        <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
                    </div>
                    <div className="flex flex-col gap-6 p-5 text-2xl text-center">
                        <a href="/" className="font-semibold">Home</a>
                        <a href="/work" className="font-semibold">Work</a>
                        <a href="/about" className="font-semibold">About</a>
                        <a href="/contact" className="font-semibold">Contact</a>
                    </div>
                    <div className="flex flex-row gap-6 p-5 bg-zinc-100 absolute bottom-20 w-full justify-center">
                        <a target="_blank" href={insta}><img src="instagram-brands.svg" className="inline-block w-6 h-6 mr-2" /></a>
                        <a href={`mailto:${email}`}><img src="envelope-solid.svg" className="inline-block w-6 h-6 mr-2" /></a>
                        <a target="_blank" href={facebook}><img src="facebook-brands.svg" className="inline-block w-6 h-6 mr-2" /></a>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default MobileNav