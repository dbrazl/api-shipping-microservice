import 'reflect-metadata';
import { Container } from "inversify";
import { IDependencyInjection } from "infrastructure/interfaces/IDependencyInjection";
import { IApp } from "infrastructure/interfaces/IApp";
import { ExpressApp } from "infrastructure/app/ExpressApp";
import { IMiddlewaresConfigurator } from "infrastructure/interfaces/IMiddlewaresConfigurator";
import { ExpressMiddlewareConfigurator } from "infrastructure/middlewares/ExpressMiddlewaresConfigurator";
import { IRoutesConfigurator } from "infrastructure/interfaces/IRoutesConfigurator";
import { ExpressRoutesConfigurator } from "infrastructure/routes/ExpressRoutesConfigurator";
import { IRoutes } from "infrastructure/interfaces/IRoutes";
import { ExpressRoutes } from "infrastructure/routes/ExpressRoutes";
import { IServer } from 'infrastructure/interfaces/IServer';
import { Server } from 'infrastructure/server/Server';
import { IHttpStatus } from 'adapters/interfaces/IHttpStatus';
import { HttpStatus } from 'infrastructure/network/HttpStatus';
import { IShippingController } from 'adapters/interfaces/IShippingController';
import { ShippingController } from 'adapters/controllers/ShippingController';
import { IExpressShippingRequestHandler } from 'infrastructure/interfaces/IExpressShippingRequestHandler';
import { ExpressShippingRequestHandler } from 'infrastructure/handlers/ExpressShippingRequestHandler';
import { IExpressRequestParamZipCodeValidator } from 'infrastructure/interfaces/IExpressRequestParamZipCodeValidator';
import { ExpressRequestParamZipCodeValidator } from 'infrastructure/validators/ExpressRequestParamZipCodeValidator';

export class InversifyDependencyInjection implements IDependencyInjection {
  public configure(): Container {
    const container = new Container();

    container.bind<IServer>('IServer').to(Server);
    container.bind<IApp>('IApp').to(ExpressApp);
    container.bind<IMiddlewaresConfigurator>('IMiddlewaresConfigurator').to(ExpressMiddlewareConfigurator);
    container.bind<IRoutesConfigurator>('IRoutesConfigurator').to(ExpressRoutesConfigurator);
    container.bind<IRoutes>('IRoutes').to(ExpressRoutes);
    container.bind<IHttpStatus>('IHttpStatus').to(HttpStatus);
    container.bind<IShippingController>('IShippingController').to(ShippingController);
    container.bind<IExpressShippingRequestHandler>('IExpressShippingRequestHandler').to(ExpressShippingRequestHandler);
    container.bind<IExpressRequestParamZipCodeValidator>('IExpressRequestParamZipCodeValidator').to(ExpressRequestParamZipCodeValidator);

    return container;
  }
}
