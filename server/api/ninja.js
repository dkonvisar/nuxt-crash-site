export default defineEventHandler(async event => {
  // handle query parameters
  // const { name } = getQuery(event);

  // handle post data
  // const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_JC8LYk92EJRzrzNL2eBDvcm36s2iyozU0DRVZNkh',
  );

  return data;
});
