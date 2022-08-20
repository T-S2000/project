import React,{ Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {singleFileUpload} from './api'



const FileUpload = () => {
	const [singleFile,setSingleFile] = useState(null);
	const singleFileChange = (e) => {
		setSingleFile(e.target.files[0]);
	}
	const uploadSingleFile = async () => {
		const formData = new FormData();
		formData.append('file', singleFile);
		await singleFileUpload(formData);
	}
  return (
    <Fragment>
		<form method='post' action="#" id="#" >    
		   <div className='form-group files'>
			 <label>Upload Your File </label>
			 <input type='file' onChange= {(e) => singleFileChange(e)} className='form-control' multiple="" />
		   </div>
		   <br></br>
		 <button type='button' className='btn btn-primary btn-block' onClick={() => uploadSingleFile()}>SUBMIT</button>{"   "}
		 <button type='button' className='btn btn-info btn-block'>VIEW</button>
		 
	   </form>
    </Fragment>
  );
};

export default FileUpload;

