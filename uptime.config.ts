// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "My Uptime Status",
  links: [
    {
      link: 'https://github.com',
      label: 'GitHub',
    },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'example_web',
      name: 'Example Website',
      method: 'GET',
      target: 'https://example.com',
      statusPageLink: 'https://example.com',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
}

// No scheduled maintenance for now
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
