import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = (studentId, skills) => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      console.log(studentId);
      console.log(skills);
      await axios.post(`https://api.projectszero.tech/skills/${studentId}`, skills,
        { thisIsDefinitelyWrong: true }
      );
      setCookie("studentId", studentId);
      setCookie("skills", skills);
      alert("送出成功");
    } catch (error) {
      alert(error);
    }
  };
};

export default usePostSkills;
