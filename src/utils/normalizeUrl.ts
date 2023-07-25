export function normalizeUrl(url: string): string {
    try {
        const parsedUrl = new URL(url);

        // Normalize protocol and hostname
        let normalizedUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;

        // Add port if present
        if (parsedUrl.port) {
            normalizedUrl += `:${parsedUrl.port}`;
        }

        // Add path
        if (parsedUrl.pathname) {
            normalizedUrl += parsedUrl.pathname;
        }

        // Add query parameters
        if (parsedUrl.search) {
            normalizedUrl += parsedUrl.search;
        }

        // Add hash fragment
        if (parsedUrl.hash) {
            normalizedUrl += parsedUrl.hash;
        }

        return normalizedUrl;
    } catch (error) {
        // Return the original URL if it cannot be parsed
        return url;
    }
}