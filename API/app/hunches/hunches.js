import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export const create = async ctx =>{

    if(!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore){
        ctx.status = 400
        return
    }


    const userId = 1
    const {gameId} = ctx.request.body
    const homeTeamScore = parseInt(ctx.request.body.homeTeamScore)
    const awayTeamScore = parseInt(ctx.request.body.awayTeamScore)
    try{

        const [hunch] = await prisma.hunch.findMany({
            where:{userId,gameId},
            
        })

        if (hunch){
            ctx.body = await prisma.hunch.update({
                where:{
                    id:hunch.id
                },
                data:{
                    homeTeamScore, 
                    awayTeamScore
                }
            })
        }else{
            ctx.body = await prisma.hunch.create({
                data:{
                    userId,
                    gameId, 
                    homeTeamScore,
                    awayTeamScore
                }
            })
        }
            

    }catch(error){
        console.log(error)
        ctx.body = error
        ctx.status = 500
    }

    
    
}


