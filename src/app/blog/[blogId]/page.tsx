import SectionTitle from "@/components/shared/SectionTitle"
import Image from "next/image"
import Link from "next/link"

function SingleBlog() {
    const blog = {
        "id": 4,
          "title": "How to Store Fresh Produce for Maximum Freshness",
          "description": "Keep your fruits and vegetables fresh for longer with these smart storage tips.",
          "image": "https://i.ibb.co.com/wLc88B1/021ed043c19eba39f6497cb397f9cfe2.png"
    }
  return (
    <div className="my-20 md:my-48 container-space ">
        <SectionTitle
        title="Fresh Harvest Blog"
        description="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
        subtitle="Our Blog"
      />
      <div className="container mx-auto p-4">
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
      <p className="text-gray-500 mt-2">Published on May 23, 2024</p>
      <p className="text-lg text-gray-700 mt-4">{blog.description}</p>
      <Link href="/blog">
       
          Back to Blogs

      </Link>
    </div>
    </div>
  )
}

export default SingleBlog