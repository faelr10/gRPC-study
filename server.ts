const grpc = require('grpc')
const todoProto = grpc.load('todo.proto')
const server = new grpc.Server()

server.addService(todoProto.TodoService.service,{

    createPermission:(call,callback)=>{
        if(call.request.actionUser === 'createUser'){
            if(call.request.resourceUser === 'admin'){
                callback(null,true)
            }else{
                callback(null,false)
            }
        }else{
            callback(null,false)
        }
    },

    deletePermission:(call,callback)=>{
        if(call.request.actionUser === 'deleteUser'){
            if(call.request.resourceUser === 'admin'){
                callback(null,true)
            }else{
                callback(null,false)
            }
        }else{
            callback(null,false)
        }
    }
})

server.bind('127.0.0.1:50051',grpc.ServerCredentials.createInsecure())
console.log("servidor rodando")
server.start()