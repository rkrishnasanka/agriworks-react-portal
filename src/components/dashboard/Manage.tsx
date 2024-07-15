import React, { useEffect, useState } from 'react';

import DatasetCard from '@/views/DatasetCard';
import LoadingIndicator from '../LoadingIndicator';

type DatasetType = {
  id: string;
  // other properties of dataset
};

interface DatasetBrowserViewProps {
  fetchUserDatasets: () => Promise<DatasetType[]>;
  userDatasets: DatasetType[];
}

export default function DatasetBrowserView({ fetchUserDatasets, userDatasets }: DatasetBrowserViewProps) {
  const [showIndicator, setShowIndicator] = useState<boolean>(true);

  useEffect(() => {
    fetchUserDatasets();
    setShowIndicator(true);
    const timer = setTimeout(() => setShowIndicator(false), 2000);
    return () => clearTimeout(timer);
  }, [userDatasets]);

  return (
    <div>
      {userDatasets.length > 0 ? (
        <div className="row">
          {userDatasets.map(dataset => (
            <div key={dataset.id}>
              <DatasetCard dataset={dataset} manage={true} />
            </div>
          ))}
        </div>
      ) : (
        <>
          {showIndicator ? (
            <LoadingIndicator />
          ) : (
            <div className="row">
              <div className="col-md-12">
                <h6>You dont have any datasets yet or none that match your search. Click Create to upload a new dataset or change your search.</h6>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
