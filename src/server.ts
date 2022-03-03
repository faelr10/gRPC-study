import { promisify } from 'util'
import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall, UntypedHandleCall } from "@grpc/grpc-js";
import { ITodoServiceServer, TodoServiceService } from "../proto/todo_grpc_pb";
import { permissionUser, Verified } from "../proto/todo_pb";

class TodoServer implements ITodoServiceServer {
    
    createPermission(call: ServerUnaryCall<permissionUser,permissionUser>, callback: sendUnaryData<Verified>): void {
        
        const actionUser = call.request.getActionuser()
        const resourceUser = call.request.getResourceuser()
        const response = new Verified()

        if (actionUser == 'createUser') {
            if (resourceUser === 'admin') {
                response.setResult(true)
                callback(null, response)
            } else {
                response.setResult(false)
                callback(null, response)
            }
        } else {
            response.setResult(false)
            callback(null, response)
        }
    }

    deletePermission(call: ServerUnaryCall<permissionUser,Verified>, callback: sendUnaryData<Verified>): void {
        
        const actionUser = String(call.request.getActionuser)
        const resourceUser = String(call.request.getResourceuser)
        const response = new Verified()
        response.setResult(true)

        if (actionUser === 'createUser') {
            if (resourceUser === 'admin') {
                response.setResult(true)
                callback(null, response)
            } else {
                response.setResult(false)
                callback(null, response)
            }
        } else {
            response.setResult(false)
            callback(null, response)
        }
    }
    [name: string]: UntypedHandleCall
}

const server = new Server()
server.addService(TodoServiceService, new TodoServer())

const bindPromise = promisify(server.bindAsync).bind(server)


bindPromise('127.0.0.1:50051', ServerCredentials.createInsecure())
  .then((port) => {
    console.log(`listening on ${port}`)
    server.start()
  })
  .catch(console.error)































// const grpc = require('grpc')
// const todoProto = grpc.load('todo.proto')
// const server = new grpc.Server()

// server.addService(todoProto.TodoService.service,{

//     createPermission:(call,callback)=>{
//         if(call.request.actionUser === 'createUser'){
//             if(call.request.resourceUser === 'admin'){
//                 callback(null,true)
//             }else{
//                 callback(null,false)
//             }
//         }else{
//             callback(null,false)
//         }
//     },

//     deletePermission:(call,callback)=>{
//         if(call.request.actionUser === 'deleteUser'){
//             if(call.request.resourceUser === 'admin'){
//                 callback(null,true)
//             }else{
//                 callback(null,false)
//             }
//         }else{
//             callback(null,false)
//         }
//     }
// })

// server.bind('127.0.0.1:50051',grpc.ServerCredentials.createInsecure())
// console.log("servidor rodando")
// server.start()