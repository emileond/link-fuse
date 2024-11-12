import { Client, Account } from 'appwrite'

export const client = new Client()

client
  .setEndpoint('https://aw.linkfuse.io/v1')
  .setProject('6732de890035dfcbebc0') // Replace with your project ID

export const account = new Account(client)
export { ID } from 'appwrite'
