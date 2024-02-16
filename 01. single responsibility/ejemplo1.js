async function fetchAndProcessInfo(apiURL) {
  const url = new URL(apiURL);
  const id = url.searchParams.get("id");
  if (!id) {
    return;
  }
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      if (data.items) {
        return data.items;
      }
    }
    throw new Error("Request failed");
  } catch (error) {
    return null;
  }
}
