type TableProps = {
    tableData: { [index: string]: string }[]
}

const GeneralTable = ({ tableData }: TableProps) => {
    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="table-auto w-full border-collapse border border-stone-200 dark: bg-stone-900">
                <thead>
                    <tr className="bg-stone-100 dark:bg-stone-800">
                        {
                            Object.keys(tableData[0]).map((key, index) => (
                                <th
                                    key={key + index}
                                    className="border border-stone-300 dark:border-stone-900 px-4 py-2 text-left font-medium text-stone-700 dark:text-stone-300"
                                >{key}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white dark:bg-stone-950/60" : "bg-stone-50 dark:bg-stone-950"}>
                            {
                                Object.values(row).map((value, i) => (
                                    <td
                                        key={value + i}
                                        className="border border-stone-300 dark:border-stone-900 px-4 py-2 text-stone-700 dark:text-stone-300">{value}</td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GeneralTable