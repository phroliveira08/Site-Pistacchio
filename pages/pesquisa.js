import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome:'',
        Whatsapp:'',
        Nota: 0
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [ success, setSuccess ] = useState(false)
    const [ retorno, setRetorno] = useState({})
    const save = async() => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        }catch (err) {

        }
    }
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (
        <div>
            <PageTitle title='Pesquisa' />
            <h1 className="text-center font-bold mt-6 text-2xl">Critíca ou Sugestão</h1>
            <p className="text-center my-4">
                Texto aqui....
            </p>
            {!success && <div className="mx-auto w-1/5">
                <label className="font-bold">Seu Nome:</label>
                <input className="p-2 bg-blue-200 rounded shadow block my-2" type="text" placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}></input>
                <label className="font-bold">Whatsapp:</label>
                <input className="p-2 bg-blue-200 rounded shadow block my-2" type="text" placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp}></input>
                <label className="font-bold">Nota:</label>
                <div className='flex mb-6'>
                    {notas.map(nota => {
                        return (
                            <label className='block w-1/6 text-center p-2'>
                                {nota}<br />
                                <input type='radio' name='Nota' value={nota} onChange={onChange}/>
                            </label>
                        )
                    })
                    }
                </div>
                <button onClick={save} className="bg-blue-400 hover:bg-blue-600 font-bold px-6 py-4 rounded-lg shadow-lg my-5">Salvar</button>
            </div>}
            {success && <div className="mx-auto w-1/5">
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou critíca</p>
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        Seu cupom: < br/>
                        <span className='font-bold'>{retorno.Cupom}</span>
                    </div>
                }
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        <span className='font-bold block mb-2'>{retorno.Promo}</span>
                        <br />
                        <span className='italic'>Tire um print ou foto desta tela e apresente ao garçom.</span>
                    </div>
                }
            </div>}
        </div>
    )
}

export default Pesquisa