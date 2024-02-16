function isParamInURL(apiURL, param) {
  const url = new URL(apiURL);
  const found = url.searchParams.get(param);
  return !!found;
}

function getFromJson(jsonResponse, prop) {
  if (Object.keys(jsonResponse).includes(prop)) {
    return jsonResponse[prop];
  }
  return null;
}

async function fetchAPIURL(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Request failed");
  } catch (error) {
    return null;
  }
}

async function loadItems(apiURL) {
  if (!isParamInURL(apiURL, "id")) {
    return;
  }
  const items = await fetchAPIURL(apiURL);
  if (items) {
    return getFromJson(items, "items");
  }
}
