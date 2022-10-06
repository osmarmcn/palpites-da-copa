import { Icon } from "../componentes"



export const Dashboard = () =>{
    return(
        <div>
          <header className="bg-red-500 text-white p-4">
            <div className="container max-w-3xl flex justify-between  ">
                        <img src="/imagem/logo-fundo-vinho.svg" alt="" className="w-32 md:w-40"/>
                        <a href="/profile">
                            <Icon name="profile" className="w-12"/>
                        </a>
                        
                    </div>
            </header>
            <main>
                <div className=" bg-red-500 text-white">
                    <div className="container max-w-3xl space-y-2 ">
                        <span>olá Osmar!</span>
                        <h3 className="text-2xl font-bold">Qual seu palpite?</h3>
                    </div>
                </div>
               

            </main>
        </div>
    )
}