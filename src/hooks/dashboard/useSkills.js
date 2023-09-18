import axios from "axios";
import { useCookies } from "react-cookie";
import useSWRFetch from "../useSWRFetch";
const useSkills = () => {
  // finish it by yourself
  const [cookies, setCookie] = useCookies(["studentId"]);
  studentId = cookies.studentId;
  try {
    skills = useSWRFetch(`https://api.projectszero.tech/skills/${studentId}`);
    console.log(skills);
    alert("讀取成功");
  } catch (error) {
    alert(error);
  }
  return skills;
};

export default useSkills;
