import { ContainerType } from 'infrastructure/types/ContainerType';

export interface IDependencyInjection {
  configure(): ContainerType;
}
