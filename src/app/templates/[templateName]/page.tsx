import TemplatesSideNav from "@/src/ui/TemplatesPage/components/TemplatesSideNav"
import Main from '@/src/app/templates/[templateName]/Main.mdx'
import Head from "./Head"
import Link from "next/link"

function page({ params }: { params: { templateName: string } }) {
    const { templateName } = params

    return (
        <main className="langingpage-container h-fit flex gap-4  px-2 lg:px-0 justify-between">

            <TemplatesSideNav />
            <div className="w-0 hidden md:block md:w-96"></div>

            <section className="w-full md:w-[calc(100%_-_384px)] flex flex-col gap-8 pt-0 pb-16">
                <Head />
                <section className="w-full block md:hidden ">
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
                        <button className='btn-primary flex-1'>Live Demo</button>
                        <button className='btn-secondary flex-1'>GitHub Repo</button>
                    </div>
                </section>
                <section>
                    <Main />
                </section>
            </section>
        </main>
    )
}

export default page