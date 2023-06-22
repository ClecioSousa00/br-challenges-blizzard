'use client'
import Image from 'next/image'
import { SvgClose } from '../icons/SvgClose'
import logoBattle from '../../assets/images/logo-battle-net.png'
import { SvgGoogle } from '../icons/SvgGoogle'
import { SvgApple } from '../icons/SvgApple'
import { SvgFacebook } from '../icons/SvgFacebook'
import Link from 'next/link'
import { Form } from '../Form'
import { ButtonSocialMedia } from '../buttonSocialMedia'

type ModalProps = {
  showModal: () => void
}

export const Modal = ({ showModal }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center  bg-bgMenu">
      <div className=" w-full max-w-2xl bg-bgModal object-cover object-center p-3">
        <button
          onClick={() => {
            showModal()
          }}
          className="ml-auto block"
        >
          <SvgClose />
        </button>
        <div className="flex flex-col items-center">
          <Image className="mb-6" src={logoBattle} alt="Logo battleNet" />
          <Form />
          <div className="mt-10 flex flex-col items-center">
            <span className="text-sm font-medium">ou conecte-se com</span>
            <div className=" mt-4 flex space-x-4">
              <ButtonSocialMedia>
                <SvgGoogle />{' '}
              </ButtonSocialMedia>
              <ButtonSocialMedia>
                <SvgApple />{' '}
              </ButtonSocialMedia>
              <ButtonSocialMedia>
                <SvgFacebook />{' '}
              </ButtonSocialMedia>
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
