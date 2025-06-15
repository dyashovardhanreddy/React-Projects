import React, { Fragment, useState } from 'react';
import Message from './Message';
import axios from 'axios';

const FileUpload = () => {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState();
    const [message, setMessage] = useState();


    const handleFileUpload = (e) => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    } 

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try{
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });
            setMessage('File upload successful');
        } catch(err){
            if(err.response.status === 500){
                setMessage('There was error with server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    }
    return (
        <Fragment>
            {message ? <Message msg={message}/> : null}
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" onChange={handleFileUpload}/>
                    <input type='submit' value='Upload' className='btn btn-primary btn-block' />
                </div>
            </form>

            { uploadedFile ? <div className='row mt-5'>
                    <div className='col-md-6 m-auto'>
                        <h3 className='text-center'>{ uploadedFile.fileName }</h3>
                        <img style={{ width: '100%' }} src={uploadedFile.filePath} />
                    </div>
                </div> : null
            }
        </Fragment>
    )
}

export default FileUpload;