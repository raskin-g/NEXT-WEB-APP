import Image from "next/image";

export default function AdminHeader() {
    return(<>
    <header className="w-ful bg-gray-50 p-2 flex justify-between items-center">
        <div>
            <Image src="/logo-1.jpeg" width={100} height={50} className="w-10 h-auto lg:hidden" alt="logo" />
        </div>
        <div>
            User Profile Here
        </div>
    </header>
    </>)
}