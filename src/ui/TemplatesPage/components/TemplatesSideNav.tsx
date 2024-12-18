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

                <p>medusajs/nextjs-starter-medusa</p>
            </Link>

            <h1 className='text-4xl font-bold'>Medusa Next.js Ecommerce Store Starter</h1>

            <p className='pt-8'>Ecommerce store template built with Next.js App Router, Medusa and TailwindCSS, with features like Algolia search and Stripe checkout.</p>

            <div className='pt-8 flex gap-4'>
                <button className='btn-primary'>Live Demo</button>
                <button className='btn-secondary'>GitHub Repo</button>
            </div>
        </aside>
    )
}

export default TemplatesSideNav