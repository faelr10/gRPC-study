// package: 
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as todo_pb from "./todo_pb";

interface ITodoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPermission: ITodoServiceService_IcreatePermission;
    deletePermission: ITodoServiceService_IdeletePermission;
}

interface ITodoServiceService_IcreatePermission extends grpc.MethodDefinition<todo_pb.permissionUser, todo_pb.Verified> {
    path: "/TodoService/createPermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.permissionUser>;
    requestDeserialize: grpc.deserialize<todo_pb.permissionUser>;
    responseSerialize: grpc.serialize<todo_pb.Verified>;
    responseDeserialize: grpc.deserialize<todo_pb.Verified>;
}
interface ITodoServiceService_IdeletePermission extends grpc.MethodDefinition<todo_pb.permissionUser, todo_pb.Verified> {
    path: "/TodoService/deletePermission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.permissionUser>;
    requestDeserialize: grpc.deserialize<todo_pb.permissionUser>;
    responseSerialize: grpc.serialize<todo_pb.Verified>;
    responseDeserialize: grpc.deserialize<todo_pb.Verified>;
}

export const TodoServiceService: ITodoServiceService;

export interface ITodoServiceServer extends grpc.UntypedServiceImplementation {
    createPermission: grpc.handleUnaryCall<todo_pb.permissionUser, todo_pb.Verified>;
    deletePermission: grpc.handleUnaryCall<todo_pb.permissionUser, todo_pb.Verified>;
}

export interface ITodoServiceClient {
    createPermission(request: todo_pb.permissionUser, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
    createPermission(request: todo_pb.permissionUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
    createPermission(request: todo_pb.permissionUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
    deletePermission(request: todo_pb.permissionUser, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
    deletePermission(request: todo_pb.permissionUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
    deletePermission(request: todo_pb.permissionUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
}

export class TodoServiceClient extends grpc.Client implements ITodoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPermission(request: todo_pb.permissionUser, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
    public createPermission(request: todo_pb.permissionUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
    public createPermission(request: todo_pb.permissionUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
    public deletePermission(request: todo_pb.permissionUser, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
    public deletePermission(request: todo_pb.permissionUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
    public deletePermission(request: todo_pb.permissionUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Verified) => void): grpc.ClientUnaryCall;
}
