import { useStorageLocal } from '~/composables/useStorageLocal'

export const faimList = [
  {
    clicks: 0,
    name: 'ChatGPT',
    image: 'dialogue',
    url: 'https://chat.openai.com',
    description_source: 'ChatGPT',
    description: 'Language model that has been trained to generate text in a conversational style, allowing it to participate in chat- or dialogue-based interactions with humans.',
  },
  {
    clicks: 0,
    name: 'Dall-E-2',
    image: 'image',
    url: 'https://openai.com/dall-e-2/',
    description_source: 'ChatGPT',
    description: 'DALL-E is a variant of the OpenAI language model that can create images from textual descriptions.',
  },
  {
    clicks: 0,
    name: 'Do Not Pay',
    image: 'attorney',
    url: 'https://donotpay.com',
    description_source: 'ChatGPT',
    description: 'AI-powered chatbot that helps users contest parking tickets and other traffic violations in the United Kingdom and United States.',
  },
  {
    name: 'Fireflies',
    image: 'meeting',
    url: 'https://fireflies.ai',
    clicks: 0,
    description_source: 'ChatGPT',
    description: 'Platform for customer service and support, allowing businesses to improve efficiency and reduce response times by automating the resolution of common customer inquiries and issues.',
  },
  {
    name: 'Jasper',
    image: 'content',
    url: 'https://jasper.ai',
    clicks: 0,
    description_source: 'ChatGPT',
    description: 'Open-source platform for building self-learning, voice-controlled AI assistants that can be integrated into a variety of devices, such as home automation systems, phones, and robots.',
  },
  {
    name: 'Jenni',
    image: 'content',
    url: 'https://jenni.ai',
    clicks: 0,
    description_source: 'Copilot',
    description: 'Text assistant that helps you write better emails, documents, and more.',
  },
  {
    name: 'Murf',
    image: 'text-2-speech',
    url: 'https://murf.ai/',
    clicks: 0,
    description_source: 'Copilot',
    description: 'Text-to-speech platform that allows users to create and share audio content.',
  },
  {
    name: 'Midjourney',
    image: 'image',
    url: 'https://midjourney.com',
    clicks: 0,
    description_source: 'Copilot',
    description: 'Platform that allows users to create and share images based on text descriptions.',
  },
  {
    name: 'Synthesia',
    image: 'avatar',
    url: 'https://synthesia.io',
    clicks: 0,
    description_source: 'ChatGPT',
    description: 'Platform for generating personalized video content, allowing businesses and organizations to create high-quality video at scale.',
  },
  {
    name: 'Timely',
    image: 'time',
    url: 'https://timelyapp.com/',
    clicks: 0,
    description_source: 'ChatGPT',
    description: 'Timely is a time tracking and scheduling software that uses AI to increase productivity. It offers automatic time tracking, team scheduling, and project management.',
  },
  {
    name: 'Tome',
    image: 'presentation',
    url: 'https://beta.tome.app',
    clicks: 0,
    description_source: 'Copilot',
    description: 'AI-powered platform for creating and sharing presentations, allowing users to create and share presentations with a single click.',
  },
]

export const storageDemo = useStorageLocal('webext-faim', faimList, { listenToStorageChanges: true })
