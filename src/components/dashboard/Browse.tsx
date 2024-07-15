import React, { useState, useEffect, useCallback } from "react";
import DatasetCard from "./DatasetCard";
import LoadingIndicator from "../LoadingIndicator";
import { useStoreState, useStoreActions } from "../store"; // assuming usage of easy-peasy or redux for state management

interface DatasetBrowserViewProps {}

const DatasetBrowserView: React.FC<DatasetBrowserViewProps> = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);
  const datasets = useStoreState((state) => state.datasets); // assuming datasets in global state
  const fetchDatasets = useStoreActions((actions) => actions.fetchDatasets);

  const onIntersectPromise = useCallback(() => {
    return new Promise((resolve, reject) => {
      fetchDatasets(++pageNumber, true);
      resolve("resolved"); 
    }).catch((error) => {
      reject(error);
    });
  }, [fetchDatasets, pageNumber]);

  const onIntersect = () => {
    if (pageNumber * 12 + 16 <= datasets.length) {
      setLoading(true);
      onIntersectPromise()
        .then((res) => setLoading(false))
        .catch((err) => setLoading(false));
    }
  };

  useEffect(() => {
    fetchDatasets();
    setShowIndicator(false);
  }, [fetchDatasets]);

  useEffect(() => {
    setShowIndicator(true);
    setTimeout(() => setShowIndicator(false), 2000);
  }, [datasets]);

  return (
    <div>
      {datasets.length > 0 ? (
        <div className="row">
          {datasets.map((dataset: any) => (
            <div key={dataset.id}>
              <DatasetCard dataset={dataset} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {showIndicator ? (
            <LoadingIndicator />
          ) : (
            <div className="row">
              <div className="col-md-12">
                <h6>No datasets found that match your query. Please search again.</h6>
              </div>
            </div>
          )}
        </div>
      )}
      <div onIntersect={onIntersect}></div>
    </div>
  );
};

export default DatasetBrowserView;
