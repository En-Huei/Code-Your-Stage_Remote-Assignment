import useSWRFetch from "../useSWRFetch";

const useAcademystats = () => {
  const { data } = useSWRFetch("https://api.projectszero.tech/getAcademyStats");
  //console.log(data);
  return {
    labels: data && Object.keys(data),
    values: data && Object.values(data)
  };
};

export default useAcademystats;
