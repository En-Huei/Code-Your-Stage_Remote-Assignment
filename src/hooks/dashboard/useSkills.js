import axios from "axios";
import { useCookies } from "react-cookie";
const useSkills = () => {
  // finish it by yourself
  const [cookies, setCookie] = useCookies(["studentId"]);
  studentId = cookies.studentId;
  console.log(studentId);
  return;
};

export default useSkills;
