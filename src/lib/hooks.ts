import { useState, useEffect } from "react";

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;

    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
        );

        const data = await response.json();
        setIsLoading(false);
        setJobItems(data.jobItems);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, [searchText]);

  return { jobItems, isLoading };
}
