import { Icon, Card, DateSelect } from "../componentes"



export const Dashboard = () =>{
    return(
        <div>
          <header className="bg-red-500 text-white ">
            <div className="container max-w-3xl flex justify-between p-4 ">
                        <img src="/imagem/logo-fundo-vinho.svg" alt="" className="w-32 md:w-40"/>
                        <a href="/profile">
                            <Icon name="profile" className="w-12"/>
                        </a>
                        
                    </div>
            </header>
            <main className="space-y-6">
                <div className=" bg-red-500 text-white">
                    <div className="container max-w-3xl space-y-2 p-4">
                        <span>olá Osmar!</span>
                        <h3 className="text-2xl font-bold">Qual seu palpite?</h3>
                    </div>
                </div>
               <div className="container max-w-3xl p-4 space-y-8">

                <div className="p-4 flex space-x-4 justify-center ">
                    <Icon name="arrowLeft" className="w-6 text-red-500"/>
                    <span className="font-bold">24 de novembro</span>
                    <Icon name="arrowRight" className="w-6 text-red-500"/>

                </div>

          

                <div className="space-y-8">
                    <Card
                        timeA={{slug:'sui'}}
                        timeB={{slug:'cam'}}
                        match={{time: '7:00'}}
                    />
                    <Card
                        timeA={{slug:'uru'}}
                        timeB={{slug:'cor'}}
                        match={{time: '7:00'}}
                    />
                    <Card
                        timeA={{slug:'por'}}
                        timeB={{slug:'gan'}}
                        match={{time: '7:00'}}
                    />

                </div>

                
                   
               </div>

            </main>
        </div>
    )
}