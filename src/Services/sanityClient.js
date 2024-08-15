import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'e4zkjk7p',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-13',
});