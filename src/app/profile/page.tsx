"use client";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/baseApi";
import { TUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaSave } from "react-icons/fa";
import { toast } from "sonner";

// Define the type for user data
type User = {
  userName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  profileImage: string;
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const { data, isLoading } = useGetProfileQuery("");
  const [updateProfile] = useUpdateProfileMutation();
  const { user: userFromRedux, token } = useAppSelector(
    (state: RootState) => state.auth
  );

  const user = data?.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(data);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const res = await updateProfile({ userData: data, id: userFromRedux?.id });
    if (res?.data?.message) {
      toast.success(res?.data?.message);
      setIsEditing(false);
    }
    if (res?.error) {
      if ("data" in res.error) {
        const errorData = res.error.data as { message?: string };
        toast.success(errorData?.message || "Something went wrong!");
      } else {
        toast.success("Something went wrong!");
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4">
        <div className="relative w-32 h-32 overflow-hidden rounded-full">
          <Image
            width={500}
            height={300}
            src={
              user.profileImage ||
              "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
            }
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{user.userName}</h1>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{user.phoneNumber}</p>
        </div>
      </div>

      {/* Update profile section */}
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4 ">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="w-full">
              <label className="block text-sm font-semibold">Username</label>
              <input
                {...register("userName")}
                type="text"
                name="userName"
                defaultValue={user.userName}
                className="input-style"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-semibold">
                Phone Number
              </label>
              <input
                {...register("phoneNumber")}
                type="text"
                name="phoneNumber"
                defaultValue={user.phoneNumber}
                className="input-style"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="w-full">
              <label className="block text-sm font-semibold">
                profile Image URL
              </label>
              <input
                {...register("profileImage")}
                type="text"
                name="profileImage"
                defaultValue={user.profileImage}
                className="input-style"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <input
              type="submit"
              value="Update"
              className="my-btn bg-primary text-white cursor-pointer"
            />

            <button onClick={() => setIsEditing(false)} className="my-btn">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="mt-6 bg-secondary text-white px-4 py-2 rounded-md"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
}
