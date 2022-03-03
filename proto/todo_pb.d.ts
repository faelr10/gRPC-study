// package: 
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class Verified extends jspb.Message { 
    getResult(): boolean;
    setResult(value: boolean): Verified;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Verified.AsObject;
    static toObject(includeInstance: boolean, msg: Verified): Verified.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Verified, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Verified;
    static deserializeBinaryFromReader(message: Verified, reader: jspb.BinaryReader): Verified;
}

export namespace Verified {
    export type AsObject = {
        result: boolean,
    }
}

export class permissionUser extends jspb.Message { 
    getActionuser(): string;
    setActionuser(value: string): permissionUser;
    getResourceuser(): string;
    setResourceuser(value: string): permissionUser;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): permissionUser.AsObject;
    static toObject(includeInstance: boolean, msg: permissionUser): permissionUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: permissionUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): permissionUser;
    static deserializeBinaryFromReader(message: permissionUser, reader: jspb.BinaryReader): permissionUser;
}

export namespace permissionUser {
    export type AsObject = {
        actionuser: string,
        resourceuser: string,
    }
}
