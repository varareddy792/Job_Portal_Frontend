import { ChangeEvent, useEffect, useRef } from 'react';
import { useAppSelector } from '../../../..';
import { useAppDispatch } from '../../../..';
import { clearUploadState, resumeUpload } from '../../../../store/reducers/jobSeekerProfile/uploadResume';

const ResumeUpload = () => {

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const {success, errorMessage,error} = useAppSelector((state)=>state.jobSeekerResumeUpload)

  useEffect(() => {
    if (success) {
      alert('Resume successfully uploaded');
      dispatch(clearUploadState);
    }
    if (error) {
      alert(`${errorMessage}`);
      dispatch(clearUploadState)
    }
  }, [success, error, errorMessage,dispatch]);
  
  const handleFileChange = async (event: ChangeEvent) => {
    event.preventDefault();
    const selectedFile = fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files[0];
    if (selectedFile) {
      const formData = new FormData();

      formData.append('file', selectedFile);

      try {
        dispatch(resumeUpload(formData))

        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        };
        
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