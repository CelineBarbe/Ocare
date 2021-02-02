import React, { useState } from 'react';
import { storage } from 'src/Firebase';

const ReactFirebaseFileUpload = () => {
    const [image, setImage] = useState(null);

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error =>{
                console.log(error);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then (url => {
                    console.log(url);
                })
            }
        )
    };

    return (
        <div>
            Hi!
            <br/>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ReactFirebaseFileUpload;