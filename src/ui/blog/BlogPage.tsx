import Divider from "@/src/components/Divider"

function BlogPage() {
    return (
        <section className="w-full min-h-screen px-4 flex flex-col pt-0 pb-16 border-l border-l-stone-800">
            <h1 className="text-3xl font-bold">The latest NodePlace.js news</h1>

            <section className="w-full h-full relative">

                <div className="absolute  top-[40%] -translate-y-[50%] bg-stone-300 dark:bg-stone-900 border border-stone-400 dark:border-stone-800 p-4 rounded-md">
                    <p>🛑 Nothing has been posted yet</p>
                </div>
            </section>
        </section>
    )
}

export default BlogPage