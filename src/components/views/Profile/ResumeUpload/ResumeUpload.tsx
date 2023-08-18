import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const ResumeUpload = () => {
  const schema = yup.object().shape({
    file: yup.mixed()
      .required("You need to provide a file to upload")
  });
  const { register, handleSubmit, } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    console.log('data', data);
    
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const res = await fetch("http://localhost:4000/multer/upload", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    
  };

  return (

    <div className="w-full rounded-2xl bg-white p-4">
      <h1 className="mb-4">Resume</h1>
      <p className="mb-4 text-sm text-gray-500">
        Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-10 border border-dashed border-gray-500 rounded-2xl flex flex-col justify-center items-center">
          <label className="cursor-pointer px-3 py-1 mb-1 rounded-3xl border-2 border-blue-400">
            <input
              type="file"
              className="hidden"
              {...register("file")}
            />
            Upload resume
          </label>
          <span className=" text-gray-400">Supported Formats: doc, docx, rtf, pdf, upto 2 MB</span>
          <button
            className="mt-5 border border-gray-400 rounded-lg px-6 py-1 bg-slate-300"
            type="submit"
          >Save
          </button>
        </div>

      </form>
    </div>

  )
}

export default ResumeUpload;