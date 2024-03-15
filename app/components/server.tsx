'use server'
import { ClientServiceRoutes } from '@/client';
import { promisify } from 'util';
import * as grpc from '@grpc/grpc-js';

const target = 'localhost:50051';

class ClientService extends ClientServiceRoutes {
  constructor() {
    super(target, grpc.credentials.createInsecure());
  }

  public async getClient(id: number) {
    const clientInfo = promisify(this.client).bind(this);
    return await clientInfo({ id })
      .then((client) => ({ client, error: null }))
      .catch((error) => ({ error, client: null }));
  }
}

export async function getClient(id: number) {
    const client = new ClientService();
    return await client.getClient(id);
}