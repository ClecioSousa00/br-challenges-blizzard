import Image from 'next/image'
import { SvgClose } from '../icons/SvgClose'
import logoBattle from '../../assets/images/logo-battle-net.png'
import { SvgGoogle } from '../icons/SvgGoogle'
import { SvgApple } from '../icons/SvgApple'
import { SvgFacebook } from '../icons/SvgFacebook'
import Link from 'next/link'

export const Modal = () => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center  bg-gray-400">
      <div className=" w-full max-w-2xl bg-bgModal object-cover object-center p-3">
        <button className="ml-auto block">
          <SvgClose />
        </button>
        <div className="flex flex-col items-center">
          <Image className="mb-6" src={logoBattle} alt="Logo battleNet" />
          <form
            className="flex w-[80%] w-full max-w-[426px] flex-col items-center"
            action=""
          >
            <input
              className="mb-4 h-12 w-full rounded pl-4 font-medium text-gray-500 outline-buttonBg placeholder:text-sm "
              type="text"
              placeholder="E-mail ou telefone"
            />
            <input
              className="h-12  w-full rounded pl-4 font-medium text-gray-500 outline-buttonBg placeholder:text-sm "
              type="password"
              placeholder="Senha"
            />
            <button
              className="mt-6 w-full rounded bg-buttonBg py-3 text-base font-medium"
              type="submit"
            >
              Conectar-se
            </button>
          </form>
          <div className="mt-10 flex flex-col items-center">
            <span className="text-sm font-medium">ou conecte-se com</span>
            <div className=" mt-4 flex space-x-4">
              <button className=" flex h-12 w-12 items-center justify-center  rounded bg-white">
                <SvgGoogle />
              </button>
              <button className=" flex h-12 w-12 items-center justify-center rounded bg-white">
                <SvgApple />
              </button>
              <button className=" flex h-12 w-12 items-center justify-center  rounded bg-white">
                <SvgFacebook />
              </button>
            </div>
            <p className="mt-8 text-sm">
              <u className="text-buttonBg">Crie uma conta</u> Battle.net de
              graça{' '}
            </p>
            <Link className="mt-4 text-base text-buttonBg " href={''}>
              <u>Não consegue logar?</u>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
