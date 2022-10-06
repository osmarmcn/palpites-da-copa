import { Icon } from "./Icon/Icon"







const Login = () =>{
    
    const Input =({name,type,placeholder,label}) =>{
        <div className="flex flex-col">
            <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} className="p-3 border border-gray-700 rounded-xl "/>
        </div>
    }

    return(
        <div>
            <header className="   p-4 border-b border-red-300">
                <div className="container max-w-5xl flex justify-center">
                     <img src="/imagem/logo-fundo-branco.svg" alt="" className="w-32 md:w-40"/>
                </div>
               
            </header>
            <main className="container max-w-xl p-4">
                <section className="p-4 flex space-x-4 items-center">
                    <Icon name="arrowLeft" className="h-6"/>
                    <h2 className="text-xl font-bold">
                        Entre na sua conta
                    </h2>
                </section>
                <form action="" className="space-y-6">

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-bold text-gray-500 mb-2">Qual seu email?</label>
                            <input type="text" name="email" id="email" placeholder="digite seu email" className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700 "/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-bold text-gray-500 mb-2">Qual sua senha</label>
                            <input type="password" name="senha" id="senha" placeholder="digite seu email" className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"/>
                        </div>

                        <div>
                            <button className="w-full text-center text-white bg-red-500 border text-xl px-8 py-4 rounded-2xl">
                                Criar conta
                            </button>
                        </div>

                       
                        
                </form>
            </main>
        </div>
    )
}


export default Login

/*

<Input
                            label="Qual seu E-mail?"
                            text="text"
                            name="email"
                            placeholder="digite seu email"
                           
                        />
                
                        <Input
                            label="Digite sua senha"
                            text="password"
                            name="password"
                            placeholder="digite sua senha"
                               
                        />




*/