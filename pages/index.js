import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)
    return (
        <div>
            <PageTitle title='Seja bem-vindo' />
            <p className="mt-8 text-center">
                Bem vindo a Pistacchio Doces!
            </p>
            <div className="text-center my-12">
                <Link href="/pesquisa">
                    <a className="bg-blue-400 hover:bg-blue-600 font-bold px-6 py-4 rounded-lg shadow-lg">
                        Dar Opinião ou Sugestão
                    </a>  
                </Link>
            </div>
            <div className="my-5">
                {!data && <p>Carregando...</p>}
                {!error && data && data.showCoupon &&
                    <p className="mt-8 text-center">
                        {data.message}
                    </p>
                }
            </div>
        </div>
    )
}

export default Index