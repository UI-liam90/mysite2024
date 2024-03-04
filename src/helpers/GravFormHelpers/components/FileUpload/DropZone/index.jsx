import PropTypes from "prop-types";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const DropZone = ({ acceptMultiple, isRequired, maxFiles, name }) => {
    const dropText = `Drag 'n' drop some files here, or click to select files`;
    const dragText = `Drop the files here ...`;
    const [filesObj, setFilesObj] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadDisabled, setUploadDisabled] = useState(false);
    const [dropZoneText, setDropZoneText] = useState(dropText);
    const { setValue } = useFormContext();
    const fileLimit = acceptMultiple ? maxFiles : 1;

    function handleFileUpload(uploadedFiles) {
        const currentUploads = uploadedFiles;
        const files = new DataTransfer();
        let numFiles = filesObj.length ? filesObj.length : 0;
        for (let i = 0; i < currentUploads.length; i++) {
            if (fileLimit === 0 || (fileLimit !== numFiles && fileLimit > numFiles)) {
                files.items.add(currentUploads[i]);
                numFiles++;
            } // only add files up to limit (0 being no limit)
        }
        if (filesObj) {
            for (let i = 0; i < filesObj.length; i++) {
                files.items.add(filesObj[i]);
            }
        }

        setValue(name, files.files);
        setFilesObj(files.files);
        const chosenFiles = Array.prototype.slice.call(files.files);
        handleUploadFiles(chosenFiles);
        if (fileLimit === numFiles) {
            setUploadDisabled(true);
        } else {
            setUploadDisabled(false);
        }
    }

    const handleFileRemove = (fileIndex) => {
        const newList = new DataTransfer();
        if (filesObj) {
            for (let i = 0; i < filesObj.length; i++) {
                if (fileIndex !== i) newList.items.add(filesObj[i]); // here you exclude the file. thus removing it.
            }
            setValue(name, newList.files);
            setFilesObj(newList.files);
            const chosenFiles = Array.prototype.slice.call(newList.files);
            handleUploadFiles(chosenFiles);
            if (fileLimit === chosenFiles.length) {
                setUploadDisabled(true);
            } else {
                setUploadDisabled(false);
            }
        }
    };

    const handleUploadFiles = (files) => {
        const uploaded = [];
        files.forEach((file) => {
            uploaded.push(file);
        });
        setUploadedFiles(uploaded);
    };

    return (
        <>
            <section className="dropzone-container">
                <input aria-required={isRequired} name={name} id={name} type="file" multiple={acceptMultiple} onChange={(e) => handleFileUpload(e.target.files)} disabled={uploadDisabled} />
                <label htmlFor={name}>
                    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                    <div
                        className="dragArea"
                        onDragOver={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            e.dataTransfer.dropEffect = "copy";
                            setDropZoneText(dragText);
                        }}
                        onDrop={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setDropZoneText(dropText);
                            handleFileUpload(e.dataTransfer.files);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                            <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                        </svg>
                        <p>{!uploadDisabled ? dropZoneText : `No more files can be uploaded`}</p>
                    </div>
                </label>
            </section>
            {fileLimit > 0 && (
                <p className="upload-limit">
                    Number of files: {uploadedFiles.length} / {fileLimit}
                </p>
            )}
            <ul className="uploaded-files-list">
                {" "}
                {uploadedFiles.map((file, idx) => (
                    <li key={idx}>
                        {" "}
                        {file.name}{" "}
                        <div
                            className="remove-file"
                            role="button"
                            onClick={() => handleFileRemove(idx)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleFileRemove(idx);
                                }
                            }}
                            tabIndex={0}
                            aria-label={`Remove ${file.name}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                            </svg>
                        </div>
                    </li>
                ))}{" "}
            </ul>
        </>
    );
};

export default DropZone;

DropZone.propTypes = {
    acceptMultiple: PropTypes.bool,
    maxFiles: PropTypes.number,
};
