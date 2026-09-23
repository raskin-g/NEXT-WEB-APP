import Image from "next/image";
import Link from "next/link";

export default function SingleCategoryGridItem() {
    return(
        <>
            <div className="bg-white shadow hover:scale-103 transition duration-300 rounded-md">
                    <Link className="hover:underline" href="/category/category-slug">
                        <div className="w-full h-25 object-cover">
                            <Image src="https://img.drz.lazcdn.com/static/np/p/dc68d677bc79e5f0362baf9a6f0ce752.jpg_170x170q80.jpg" width={300} height={100} alt="Image"
                                className="w-full h-30 object-contain"
                            />
                        </div>
                        <h2 className="py-5 px-3 text-xl font-semibold">Category Name</h2>
                    </Link>
                </div>
        </>
    )
}