import useSWRFetch from "../useSWRFetch";
import { skills } from "../../data/mockData";
const useSkills = (studentId) => {
  // finish it by yourself
  const _skills = useSWRFetch(`https://api.projectszero.tech/skills/${studentId}`);
  let data = _skills.data;
  return {
    labels: data && Object.keys(_skills.data),
    values: data && Object.values(_skills.data)
  };
  // below as data undefined prevention
  /* if (_skills.data) {
    return {
      labels: Object.keys(_skills.data),
      values: Object.values(_skills.data)
    };
  } else {
    // mockData
    return skills;
  } */
};

export default useSkills;
