export async function getData(url = '', token = '') {
    
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });

    return await response.json();
}