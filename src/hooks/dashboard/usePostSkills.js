import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      console.log(studentId);
      console.log(skills);
      await axios.post(`https://api.projectszero.tech/skills/${studentId}`, skills,
        { thisIsDefinitelyWrong: true }
      );
      setCookie("studentId", studentId);
      alert("送出成功");
    } catch (error) {
      alert(error);
    }
  };
};

export default usePostSkills;
