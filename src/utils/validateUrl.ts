export function isValidUrl(url: string): boolean {
  try {
    const urlObject = new URL(url);

    // Check if the URL has a valid protocol (http, https, ftp)
    const validProtocols = ['http:', 'https:', 'ftp:'];
    if (!validProtocols.includes(urlObject.protocol.toLowerCase())) {
      return false;
    }

    // Check if the URL has a valid hostname (e.g., www.example.com)
    if (!urlObject.hostname || urlObject.hostname.includes(' ')) {
      return false;
    }

    // Check if the URL has a valid pathname
    if (!urlObject.pathname || !urlObject.pathname.startsWith('/')) {
      return false;
    }

    // Check if the URL has a valid search query (optional)
    if (urlObject.search && urlObject.search.includes(' ')) {
      return false;
    }

    // Check if the URL has a valid hash (optional)
    if (urlObject.hash && urlObject.hash.includes(' ')) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}