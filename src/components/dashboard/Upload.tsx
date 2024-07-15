import React, { useState, useEffect } from 'react';
import api from "../../api";
import notify from "../../utilities/notify";

interface UploadProps { }

export default function Upload({ }: UploadProps) {
    const [datasetName, setDatasetName] = useState('Sample');
    const [tagsOfChosenType, setTagsOfChosenType] = useState([]);
    const [datasetTags, setDatasetTags] = useState([]);
    const [search, setSearch] = useState("");
    const [keys, setKeys] = useState([]);
    const [file, setFile] = useState<File | null>(null);
    const [stepIndex, setStepIndex] = useState(1);
    const [permissionOptions] = useState(["Public", "Private"]);
    const [datasetPermissions, setDatasetPermissions] = useState("Public");
    const [typeOptions] = useState(["Land Use", "Pesticide Report"]);
    const [datasetType, setDatasetType] = useState("Land Use");
    const [loading, setLoading] = useState(false);

    // Replace with your own implementation
    const getTags = (datasetType: string) => {
        // Get tags logic
    };

    const incrementStep = () => {
        if (stepIndex < 3) {
            setStepIndex(stepIndex + 1);
        } else {
            processForm();
        }
    };

    const decrementStep = () => {
        if (stepIndex > 1) {
            setStepIndex(stepIndex - 1);
        } else {
            // Close dialog logic
        }
    };

    const processForm = () => {
        setLoading(true);
        // Form processing logic
    };

    const getKeys = (file: File) => {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = e => {
            // Processing file data logic
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let selectedFile = event.target.files ? event.target.files[0] : null;
        if (selectedFile) {
            setFile(selectedFile);
            getKeys(selectedFile);
        }
    };

    useEffect(() => {
        getTags(datasetType);
    }, [datasetType]);

    return (
        <div>
            <div>
                <div>
                    <div>
                        {stepIndex > 1 && "Upload dataset"}
                    </div>

                    <div>
                        {stepIndex > 2 && "Dataset Info"}
                    </div>

                    <div>
                        {stepIndex > 3 && "Configure dataset"}
                    </div>
                </div>

                {stepIndex === 1 &&
                    <div>
                        <h4> Upload Dataset </h4>
                        <p>Choose a file with relevant data from your local computer to upload. Acceptable file formats incude: CSV</p>
                        <input type='file' accept='.csv' onChange={handleFileChange} />
                        <button disabled={!file} onClick={incrementStep}>Continue</button>
                    </div>
                }

                {stepIndex === 2 &&
                    <div>
                        <h4> Dataset Info </h4>
                        {/* Implement form fields and buttons */}
                    </div>
                }

                {stepIndex === 3 &&
                    <div>
                        <h4> Dataset Configuration </h4>
                        {/* Implement form fields and buttons */}
                    </div>
                }
            </div>
        </div>
    );
}
