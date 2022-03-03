// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var todo_pb = require('./todo_pb.js');

function serialize_Verified(arg) {
  if (!(arg instanceof todo_pb.Verified)) {
    throw new Error('Expected argument of type Verified');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Verified(buffer_arg) {
  return todo_pb.Verified.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_permissionUser(arg) {
  if (!(arg instanceof todo_pb.permissionUser)) {
    throw new Error('Expected argument of type permissionUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_permissionUser(buffer_arg) {
  return todo_pb.permissionUser.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoServiceService = exports.TodoServiceService = {
  createPermission: {
    path: '/TodoService/createPermission',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.permissionUser,
    responseType: todo_pb.Verified,
    requestSerialize: serialize_permissionUser,
    requestDeserialize: deserialize_permissionUser,
    responseSerialize: serialize_Verified,
    responseDeserialize: deserialize_Verified,
  },
  deletePermission: {
    path: '/TodoService/deletePermission',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.permissionUser,
    responseType: todo_pb.Verified,
    requestSerialize: serialize_permissionUser,
    requestDeserialize: deserialize_permissionUser,
    responseSerialize: serialize_Verified,
    responseDeserialize: deserialize_Verified,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
