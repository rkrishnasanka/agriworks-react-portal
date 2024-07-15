import React from 'react';

interface DataTableProps {
    headers: string[];
    data: any[];
    isLoading: boolean;
}

export default function DataTable({ headers, data, isLoading }: DataTableProps) {
    return (
        <>
            {/* To stick the data table header to top, use position-sticky in tailwind css */}
            <div className={`w-full ${isLoading ? 'opacity-50' : ''}`}>
                <table className="min-w-max w-full table-auto">
                    <thead className="bg-gray-200 sticky top-0">
                        <tr>
                            {headers.map(header => (
                                <th className="px-4 py-2" key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr key={row.id}>
                                {headers.map(header => (
                                    <td className="px-4 py-2" key={`${row.id}-${header}`}>
                                        {row[header]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
