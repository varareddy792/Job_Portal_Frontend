import { ChangeEvent, useRef } from 'react';
import axios from 'axios';

const ResumeUpload = () => {
  
  const fileInputRef = useRef<HTMLInputElement|null>(null);

  const handleFileChange = async (event: ChangeEvent) => {
    event.preventDefault();
    console.log('in change')
    const selectedFile = fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files[0];
    if (selectedFile) {
      const formData = new FormData();

      formData.append('id', "1");
      formData.append('abc', 'abc');
      formData.append('file', selectedFile);
      console.log('form data ', formData, 'id',formData.entries() );
      try {
        const response = await axios.post(
          "http://localhost:4000/multer/upload",
          formData,
          {
            headers: {
              "Content-Type": 'multipart/form-data'
            }
          }
        );
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        };
        alert((`${JSON.stringify(response.data)}, status:${response.data.status}`));
      } catch (error) {
        console.log('error', error);
      }
    }
  }

  return (
    <div className="w-full rounded-2xl bg-white p-4">
      <h1 className="mb-4">Resume</h1>
      <p className="mb-4 text-sm text-gray-500">
        Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.
      </p>
      <form >
        <div className="p-10 border border-dashed border-gray-500 rounded-2xl flex flex-col justify-center items-center">
          <label className="cursor-pointer px-3 py-1 mb-1 rounded-3xl border-2 border-blue-400">
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            Upload resume
          </label>
          <span className=" text-gray-400">Supported Formats: doc, docx, rtf, pdf, upto 2 MB</span>
        </div>
      </form>
    </div>
  )
}

export default ResumeUpload;