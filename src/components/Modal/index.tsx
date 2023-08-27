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
import { motion } from 'framer-motion'

type ModalProps = {
  showModal: () => void
}

export const Modal = ({ showModal }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center  bg-bgMenu">
      <motion.div
        className=" w-full max-w-2xl bg-bgModal object-cover object-center p-3"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <button
          data-testid="button-close"
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
      </motion.div>
    </div>
  )
}
