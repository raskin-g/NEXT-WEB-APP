import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/admin/:path*","/customer/:path*","/seller/:path*", "/cart", "/checkout"]
}

type Role = "admin" | "customer" | "seller"

const ROUTE_ROLE: Record<string, Role> = {
    "/admin": "admin",
    "/seller": "seller",
    "/customer": "customer",
    "/cart": "customer",
    "/checkout": "customer"
}

const DASHBOARD: Record<Role, string> ={
    admin: "/admin",
    customer: "/customer",
    seller: "/seller"
}

function redirectToLogin(request: NextRequest) {
    const url = new URL('/login', request.url)   // /admin => /login?from=/admin
    url.searchParams.set("from",request.nextUrl.pathname)
    return NextResponse.redirect(url);
}

export async function proxy(request: NextRequest){
    const {pathname} = request.nextUrl;

    //Find which role the URL needed
    const requiredRole = Object.entries(ROUTE_ROLE).find(([base])=>{
        return pathname === base || pathname.startsWith(base+"/")
    })?.[1]


    // Skip unprotected routes
    if (!requiredRole) {
        return NextResponse.next()
    }

    // TODO: Login implement and add token to cookie
    const token = request.cookies.get("token")?.value
    if(!token) {
        return redirectToLogin(request)
    }

    try {
    // TODO: After login update from api
    const userDetail = {role: "admin"};
    if(userDetail.role !== requiredRole){
        const home = userDetail.role && DASHBOARD[userDetail.role as Role] ? DASHBOARD[userDetail.role as Role] : "/login"
        return NextResponse.redirect(new URL(home, request.url))
    }
    return NextResponse.next()
    
    }catch{
        const res = redirectToLogin(request)
        res.cookies.delete("token")
        return res;
    }

}