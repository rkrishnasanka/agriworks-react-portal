import React from 'react';

export default function DashboardPage() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Stat 1</h2>
                    <p className="text-gray-500">Some description about Stat 1</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Stat 2</h2>
                    <p className="text-gray-500">Some description about Stat 2</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Stat 3</h2>
                    <p className="text-gray-500">Some description about Stat 3</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Stat 4</h2>
                    <p className="text-gray-500">Some description about Stat 4</p>
                </div>
            </div>
        </div>
    );
};

