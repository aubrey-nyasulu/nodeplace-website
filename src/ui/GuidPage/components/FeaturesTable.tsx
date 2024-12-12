type TableProps = { tableData: { feature: string, description: string }[] }

const FeaturesTable = ({ tableData }: TableProps) => {
    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="table-auto w-full border-collapse border border-stone-200 dark: bg-stone-900">
                <thead>
                    <tr className="bg-stone-100 dark:bg-stone-800">
                        <th className="border border-stone-300 dark:border-stone-900 px-4 py-2 text-left font-medium text-stone-700 dark:text-stone-300">Feature</th>
                        <th className="border border-stone-300 dark:border-stone-900 px-4 py-2 text-left font-medium text-stone-700 dark:text-stone-300">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white dark:bg-stone-950/60" : "bg-stone-50 dark:bg-stone-950"}>
                            <td className="border border-stone-300 dark:border-stone-900 px-4 py-2 text-stone-700 dark:text-stone-300">{row.feature}</td>
                            <td className="border border-stone-300 dark:border-stone-900 px-4 py-2 text-stone-700 dark:text-stone-300">{row.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FeaturesTable