import { envs } from './config/env.js'
import { startServer } from './server/server.js'




const main = ()=>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}



//funcion agnostica autoconvocada
//agnostica pq no tiene nombre
//autoconvocada pq se llama a si misma con los parentesis al final ()


( async () =>{
    main()
})()


