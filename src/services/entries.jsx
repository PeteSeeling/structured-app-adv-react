import { client, parseData } from './client';

export async function getEntries() {
  const request = await client
    .from('country_entries')
    .select()
    .order('date', { ascending: false });
  return parseData(request);
}

export async function createEntry({ user_id, content, country, date}) {
  const request = await client
    .from('country_entries')
    .insert({ user_id, content, country, date });
  return parseData(request);
}

export async function updateEntryById(id, content, country) {
  const request = await client
    .from('country_entries')
    .update({ content, country })
    .match({ id });
  return parseData(request);
}

export async function deleteEntryById(id) {
  const request = await client
  .from('country_entries')
  .delete()
  .match({ id })
  return parseData(request);
}

