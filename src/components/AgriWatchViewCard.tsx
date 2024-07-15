import React, { useState } from 'react';

interface AgriWatchViewCardProps {
    agriWatchView: {
        visualType: string;
        dataset: string;
        id: number;
    };
    manage: boolean;
}

export default function AgriWatchViewCard({ agriWatchView, manage }: AgriWatchViewCardProps) {
    const [dialog, setDialog] = useState(false);
    
    const viewLink = "/agri-watch-view/" + agriWatchView.id;

    const deleteAgriWatchView = () => {
        // do something
    }

    return (
        <div className="border-3 border-secondary m-4 rounded-lg shadow w-72">
            <div className="p-4">
                <div className="my-4 text-sm text-primary font-bold">{ agriWatchView.visualType }</div>
                <h3>{ agriWatchView.dataset }</h3>

                <div className="my-4">
                    <button onClick={() => setDialog(!dialog)} className={manage ? 'text-error' : ''}>Delete</button>
                </div>

                {dialog && (
                    <div className="max-w-72">
                        <h4>Delete view?</h4>
                        <p>Are you sure?</p>
                        <div>
                            <button onClick={() => setDialog(!dialog)} className="text-darkblue">Close</button>
                            <button onClick={deleteAgriWatchView} className="text-error">Delete</button>
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute bottom-0 right-0 my-4">
                <img src={!dialog ? "../assets/chartNormal.png" : "../assets/chartDarkMode.png"} />
            </div>
        </div>
    );
}
