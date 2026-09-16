import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: 'My Services Status',
  links: [
    {
      link: 'https://omni.healthylifeliving.store',
      label: 'OmniRoute',
    },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'omniroute',
      name: 'OmniRoute',
      method: 'GET',
      target: 'https://omni.healthylifeliving.store',
      statusPageLink: 'https://omni.healthylifeliving.store',
      expectedCodes: [200],
      timeout: 10000,
    },

    {
      id: 'freellm',
      name: 'FreeLLMAPI',
      method: 'GET',
      target: 'http://149.118.52.143:3001/v1/models',
      expectedCodes: [200, 401],
      timeout: 10000,
    },

    {
      id: 'vps_ssh',
      name: 'Oracle VPS SSH',
      method: 'TCP_PING',
      target: '149.118.52.143:22',
      timeout: 5000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
