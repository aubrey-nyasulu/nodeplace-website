import TemplatesSideNav from "@/src/ui/TemplatesPage/components/TemplatesSideNav"
import Main from '@/src/app/templates/[templateName]/Main.mdx'
import Head from "./Head"
import Link from "next/link"

// function page({ params }: { params: { templateName: string } }) {
//     const { templateName } = params
function page() {

    return (
        <main className="langingpage-container h-fit flex gap-4  px-2 lg:px-0 justify-between">

            <TemplatesSideNav />
            <div className="w-0 hidden md:block md:w-96"></div>

            <section className="w-full md:w-[calc(100%_-_384px)] flex flex-col gap-8 pt-0 pb-16">
                <Head />
                <section className="w-full block md:hidden mb-8">
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
                        <Link href='https://github.com/aubrey-nyasulu/nodeplace-rest-api-mongodb'>
                            <button className='btn-secondary'>GitHub Repo</button>
                        </Link>
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