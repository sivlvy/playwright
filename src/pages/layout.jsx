import Link from "next/link";
export default function Layout({ children }) {
  return (
   <div>
     <ul>
       <li><Link href='/'>Home</Link></li>
       <li><Link href='/login'>Sign In</Link></li>
       <li><Link href='/signup'>Sign Up</Link></li>

     </ul>
     {children}
   </div>
)
  ;
}
