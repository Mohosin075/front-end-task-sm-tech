'use client'
import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <Link href={'/'}>
        <Image width={220} height={40} src={'https://i.ibb.co.com/Fx6VVGc/Logo-1.png'} alt="logo"/>
    </Link>
  )
}

export default Logo