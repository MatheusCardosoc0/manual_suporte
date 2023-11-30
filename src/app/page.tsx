"use client"

import BasicInput from "@/components/Inputs/BasicInput";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod"

export default function Home() {

  const [variant, setVariant] = useState<"Register" | "Login">('Register')

  const schema = useMemo(() => {
    return z.object({
      name: variant === 'Register' ? z.string().nonempty("Informe o nome") : z.string().optional(),
      email: z.string().nonempty("Informe o email"),
      password: z.string().nonempty("Informe a senha")
    })
  }, [variant])

  const route = useRouter()

  type formProps = z.infer<typeof schema>

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<formProps>({
    mode: 'all',
    resolver: zodResolver(schema),
    values: {
      name: '',
      email: '',
      password: ''
    }
  })

  async function onSubmit(data: formProps) {

    if (!data.email.includes("@hdtecnologia.com.br")) {
      alert("Email invalido")
      return
    }

    if (variant === 'Register') {
      try {
        const response = await axios.post('/api/create/user', data)

        alert("ok")
        setVariant('Login')
        console.log(response.data)
      } catch (error) {
        alert("error")
        console.log(error)
      }
    }
    if (variant === 'Login') {
      signIn('credentials', {
        ...data,
        redirect: false
      })
        .then((callback) => {
          if (callback?.error) {
            alert('Credenciais invalidas')
          }

          if (callback?.ok && !callback.error) {
            alert('logado com sucesso')
            window.location.reload()
          }
        })
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          w-full
          max-w-[648px]
          rounded-lg
          bg-white
          drop-shadow-[0px_0px_2px_black]
          p-4
          flex
          flex-col
          gap-8
        "
      >
        <h2
          className="
            text-4xl
            font-bold
          "
        >
          {variant === 'Login' ? "Entre com sua conta" : "Cadastre uma conta"}
        </h2>
        <div
          className="
            flex
            flex-col
            gap-4
          "
        >
          {variant === 'Register' && (
            <BasicInput
              id="name"
              label="Nome"
              register={register}
              error={errors.name?.message}
            />
          )}
          <BasicInput
            id="email"
            label="Email"
            register={register}
            error={errors.email?.message}
          />
          <BasicInput
            type="password"
            id="password"
            label="Senha"
            register={register}
            error={errors.password?.message}
          />
        </div>
        <span>
          {variant === 'Login' ? 'Não possui uma conta?' : 'Já possui uma conta?'}
          <button
            type="button"
            onClick={() => {
              variant === 'Login' && setVariant("Register")
              variant === 'Register' && setVariant("Login")
            }}
            className="
              underline
              text-lg
              text-amber-600
            "
          >
            {variant === 'Login' ? 'Cadastrar' : ' Fazer login'}
          </button>
        </span>
        <button
          type="submit"
          className="
            font-bold
            text-2xl
            bg-blue-500
            w-full
            max-w-[200px]
            rounded-lg
            p-2
            text-white
            drop-shadow-[1px_1px_1px_black]      
          "
        >
          {variant === 'Login' ? "Entrar" : "Cadastrar"}
        </button>
      </form>
    </div>
  )
}