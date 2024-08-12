import { InversifyDependencyInjection } from "infrastructure/dependency_injection/InversifyDependencyInjection";
import { IDependencyInjection } from "infrastructure/interfaces/IDependencyInjection";
import { IServer } from "infrastructure/interfaces/IServer";
import { Server } from "infrastructure/server/Server";

class Main {
  constructor(dependencyInjection: IDependencyInjection) {
    const container = dependencyInjection.configure();
    const server = container.get<IServer>('IServer');
    server.listen(3000);
  }
}

const dependencyInjection = new InversifyDependencyInjection();
new Main(dependencyInjection);

