import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className=" bg-gray-600 align-bottom p-3">
            <div className="container mx-auto text-white font-bold ">
                Desenvolvido por: Pedro Oliveira
                <div className="text-center">
                    <Link href="/sobre">
                        <a><img className="inline" src="/logo_insta.png" alt="@pistacchio"/></a>
                    </Link>
                    <h1 className="inline mx-2"></h1>
                    <Link href="/contato">
                        <a><img className="inline" src="/logo_face.png" alt="@pistacchio"/></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer