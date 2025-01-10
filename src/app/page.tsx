"use client";

import { useGetUsersQuery } from "@/redux/features/auth/authApi";



const HomePage = () => {
  const { data, isLoading } = useGetUsersQuery("");
  console.log(data);
  return (
    <>
      <div>Home page</div>
    </>
  );
};

export default HomePage;
