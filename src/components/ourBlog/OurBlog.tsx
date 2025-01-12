import { Blog } from "@/types"
import SectionTitle from "../shared/SectionTitle"
import BlogCard from "../ui/BlogCard"

function OurBlog() {
    const blogs = [
        {
          "id": 1,
          "title": "5 Easy Recipes with Fresh Harvest Vegetables",
          "description": "Transform your fresh produce into delicious meals with these quick and easy recipes.",
          "image": "https://i.ibb.co.com/wLc88B1/021ed043c19eba39f6497cb397f9cfe2.png"
        },
        {
          "id": 2,
          "title": "The Health Benefits of Seasonal Eating",
          "description": "Learn why eating in-season fruits and vegetables is great for your health and the planet.",
         "image": "https://i.ibb.co.com/wLc88B1/021ed043c19eba39f6497cb397f9cfe2.png"
        },
        {
          "id": 3,
          "title": "Top 10 Superfoods You Can Get from Fresh Harvests",
          "description": "Discover the nutritional powerhouses available in our store and how to incorporate them into your diet.",
          "image": "https://i.ibb.co.com/wLc88B1/021ed043c19eba39f6497cb397f9cfe2.png"
        },
        {
          "id": 4,
          "title": "How to Store Fresh Produce for Maximum Freshness",
          "description": "Keep your fruits and vegetables fresh for longer with these smart storage tips.",
          "image": "https://i.ibb.co.com/wLc88B1/021ed043c19eba39f6497cb397f9cfe2.png"
        },
        {
          "id": 5,
          "title": "Farm-to-Table: The Journey of Fresh Harvests Produce",
          "description": "Get an inside look at how our fresh produce goes from local farms to your table.",
         "image": "https://i.ibb.co.com/wLc88B1/021ed043c19eba39f6497cb397f9cfe2.png"
        }
      ]
      
  return (
    <div className="my-20 md:my-48 container-space ">
        <SectionTitle
        title="Fresh Harvest Blog"
        description="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
        subtitle="Our Blog"
      />
       <div className="grid grid-cols-2  md:grid-cols-3  gap-5 my-5">
        {blogs?.slice(0, 3).map((blog : Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default OurBlog