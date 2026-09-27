import Image from "next/image";

export default function AdminSidebar() {
    return(<>
    <aside className="bg-gray-100 w-100 p-10 hidden lg:block">
        <div className="flex w-full items-center justify-center">
            <Image src="/logo-1.jpeg" width={100} height={50} className="w-20 h-auto hidden lg:block" alt="logo" />
        </div>
    </aside>
    </>)
}