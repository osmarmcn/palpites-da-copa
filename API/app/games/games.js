import { PrismaClient } from "@prisma/client"
import {addDays, formatISO} from 'date-fns'


const prisma = new PrismaClient()


/*read */
export const list = async ctx =>{
    const currentDate = ctx.request.query.gameTime

   
        const where = currentDate ? {
             gameTime:{
                    gte: currentDate,
                    lt:formatISO( addDays(new date(currentDate),1))
            }
        }: {}
               
     try{    
        const games= await prisma.game.findMany({where})
        ctx.body = users
        ctx.status = 200
    }catch(error){
        console.log(error)
        ctx.body = error
        ctx.status = 500

    }

}