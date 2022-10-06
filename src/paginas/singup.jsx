import { Icon } from "./../componentes/Icon/Icon"







const Singup = () =>{
    
  

    return(
        <div>
            <header className="p-4 border-b border-red-300">
                <div className="container max-w-5xl flex justify-center">
                     <img src="/imagem/logo-fundo-branco.svg" alt="" className="w-32 md:w-40"/>
                </div>
               
            </header>
            <main className="container max-w-xl p-4">
                <section className="p-4 flex space-x-4 items-center">
                    <a href="/">
                          <Icon name="back" className="h-6"/>
                    </a>
                  
                    <h2 className="text-xl font-bold">
                       Crie sua conta
                    </h2>
                </section>
                <form action="" className="p-4 space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="nome" className="text-sm font-bold text-gray-500 mb-2">Qual seu nome?</label>
                            <input type="text" name="nome" id="nome" placeholder="digite seu nome" className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="nome de usuário" className="text-sm font-bold text-gray-500 mb-2">Seu nome de usuário</label>
                            <input type="text" name="userName" id="userName" placeholder="cire seu nome de usuário" className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-bold text-gray-500 mb-2">Qual seu email?</label>
                            <input type="text" name="email" id="email" placeholder="digite seu email" className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700 "/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-sm font-bold text-gray-500 mb-2">Qual sua senha</label>
                            <input type="password" name="senha" id="senha" placeholder="digite seu email" className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"/>
                        </div>
                       

                        <div>
                            <button className="w-full text-center text-white bg-red-500 border text-xl px-8 py-4 rounded-2xl">
                                Criar sua conta
                            </button>
                        </div> 
                </form>
            </main>
        </div>
    )
}


export default Singup