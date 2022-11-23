import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export const create = async ctx =>{

    if(!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore){
        ctx.status = 400
        return
    }

    const {gameId, homeTeamScore, awayTeamScore } = ctx.request.body

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


