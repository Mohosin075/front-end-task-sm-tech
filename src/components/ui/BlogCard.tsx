import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


function BlogCard({ blog } : {blog : Blog}) {
  return (
    <div className="card bg-base-100 shadow-xl h-68  md:h-96">
      <figure className="relative w-full h-48 overflow-hidden bg-gray-100 rounded-t-xl">
        <Image
          src={blog.image || "https://via.placeholder.com/150"}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </figure>
      <div className="p-2 md:card-body flex flex-col justify-between">
        <p className="text-gray-500 text-sm">May 23, 2024</p>
        <Link href={`/blog/${blog.id}`} className={""}>
            
        
              <h2 className="card-title text-lg font-semibold">
          {blog.title}
        </h2>
          </Link>
        
        <div className=" mt-auto w-full">
          <Link href={`/blog/${blog.id}`} className={"hover:text-primary font-bold hover:underline flex items-center"}>
            
              Read More <span><FaArrowRight /></span>
           
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
