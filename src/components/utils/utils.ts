import axios from "axios";

export const getCourseList = async () => {
  return await axios.get(`${process.env.REACT_APP_API_PATH}/course/get`).then((res:any)=> res.data.data)
}

export const getEducationTypeList = async () => {
  return await axios.get(`${process.env.REACT_APP_API_PATH}/educationtype/get`).then((res:any)=> res.data.data)
}

export const getInstituteList = async () => {
  return await axios.get(`${process.env.REACT_APP_API_PATH}/universityInstitute/get`).then((res:any)=> res.data.data)
}

export const getPassOutYearList = async () => {
  return await axios.get(`${process.env.REACT_APP_API_PATH}/passOutYear/get`).then((res:any)=> res.data.data)
}