import * as grpc from '@grpc/grpc-js';
import * as grpcReflection from 'grpc-reflection-js';
import {Descriptor} from "./Descriptor";

export class GrpcReflection {

    private reflectionClient;

    constructor(host: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ChannelOptions>) {
        this.reflectionClient = new grpcReflection.Client(
            host,
            credentials
            options
        );
    }

    async listServices(){
        return await this.reflectionClient.listServices();
    }

    async getDescriptorBySymbol(symbol: string): Promise<Descriptor> {
        return new Descriptor(await this.reflectionClient.fileContainingSymbol(symbol));
    }

}
