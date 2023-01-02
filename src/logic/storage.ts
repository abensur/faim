import { useStorageLocal } from '~/composables/useStorageLocal'

export const faimList = [
  {
    name: 'ChatGPT',
    description: 'Dialogue',
    url: 'https://chat.openai.com',
    clicks: 0,
  },
  {
    name: 'Dall-E-2',
    description: 'Images',
    url: 'https://openai.com/dall-e-2/',
    clicks: 0,
  },
  {
    name: 'Do Not Pay',
    description: 'Robot Lawyer',
    url: 'https://donotpay.com',
    clicks: 0,
  },
  {
    name: 'Fireflies',
    description: 'Meeting notes',
    url: 'https://fireflies.ai',
    clicks: 0,
  },
  {
    name: 'Jasper',
    description: 'Content generator',
    url: 'https://jasper.ai',
    clicks: 0,
  },
  {
    name: 'Jenni',
    description: 'Text assistant',
    url: 'https://jenni.ai',
    clicks: 0,
  },
  {
    name: 'Murf',
    description: 'Text to speech',
    url: 'https://murf.ai/',
    clicks: 0,
  },
  {
    name: 'Midjourney',
    description: 'Images',
    url: 'https://midjourney.com',
    clicks: 0,
  },
  {
    name: 'Synthesia',
    description: 'Text to video/avatar',
    url: 'https://synthesia.io',
    clicks: 0,
  },
  {
    name: 'Timely',
    description: 'Time tracking',
    url: 'https://timelyapp.com/',
    clicks: 0,
  },
  {
    name: 'Tome',
    description: 'Presentations',
    url: 'https://beta.tome.app',
    clicks: 0,
  },
]

export const storageDemo = useStorageLocal('webext-faim', faimList, { listenToStorageChanges: true })
