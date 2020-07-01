export async function fetchCategories() {
  // TODO: fetch GET /categories
  // REST - CRUD => Read - collection / member, element
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// TODO: delete this!
export function xxx() {

}
