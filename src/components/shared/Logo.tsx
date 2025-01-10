'use client';
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={'/'}>
      <Image
        width={200}
        height={40}
        src={'https://i.ibb.co/Fx6VVGc/Logo-1.png'}
        alt="logo"
        className="max-w-full h-auto" 
      />
    </Link>
  );
}

export default Logo;
