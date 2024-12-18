import TemplatesPage from "@/src/ui/TemplatesPage/TemplatesPage"

function page() {
    return (
        <main className="langingpage-container w-full min-h-screen px-2 md:px-4 flex gap-4 flex-col pt-0 pb-16 border-x border-x-stone-400/50 dark:border-x-stone-800">
            <TemplatesPage />
        </main>
    )
}

export default page