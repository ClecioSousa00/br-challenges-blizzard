import { Input } from './Input'

export const Form = () => {
  return (
    <form className="flex w-[80%]  max-w-[426px] flex-col items-center">
      <Input type="text" placeholder="E-mail ou telefone" />
      <Input type="password" placeholder="Senha" />

      <button
        className="mt-6 w-full rounded bg-buttonBg py-3 text-base font-medium"
        type="submit"
      >
        Conectar-se
      </button>
    </form>
  )
}
