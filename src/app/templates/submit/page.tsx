import Footer from '@/src/components/Footer'

export default function SubmitTemplate() {
    return (
        <>
            <main className="px-4 langingpage-container w-screen h-[70vh] grid place-content-center border border-stone-400/50 dark:border-stone-800 border-t-0">
                <div className='flex gap-4 flex-col items-center justify-center'>
                    <p className="text-xl text-center">
                        Templates Submission will start in beta release
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
