import logoImage from '@/public/hero/nodeplace logo - white2.png'
import Link from 'next/link'

function TemplatesSideNav() {

    return (
        <aside className="fixed top-[0px] w-96 h-screen overflow-y-auto border-r border-r-stone-400/50 dark:border-stone-800 hidden md:block pt-[160px] px-2 pr-8 ">
            <Link
                href='#'
                className='flex gap-4 items-center pb-8'
            >
                <div className='w-6 aspect-square bg-black dark:bg-white rounded-full'>
                </div>

                <p>@nodeplace-crud-mongodb</p>
            </Link>

            <h1 className='text-4xl font-bold'>Nodeplace REST-API with MongoDB</h1>

            <p className='pt-8'>This template provides a solid foundation for building efficient and scalable RESTful APIs with the Nodeplace framework.</p>

            <div className='pt-8 md:pt-12 flex gap-4'>
                <button className='btn-secondary'>GitHub Repo</button>
                <button className='btn-primary'>Live Demo</button>
            </div>
        </aside>
    )
}

export default TemplatesSideNav