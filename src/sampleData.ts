
type sampleData = {
    title: string;
    description: string;
    url: string;
    sampleURL?: string;
    about?: string;
    type?: string;
};

type relevantLink = {
    title: string;
    url: string;
    description?: string;
}

const samples: sampleData[] = [
        {
            "title": "C15t Meets Catalyst: Consent Management Made Easy",
            "description": "Learn how BigCommerce manages consent preferences in our Next.js app with a custom c15t implementation",
            "url": "c15t-consent-management",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/catalyst-c15t-consent",
            "about": "",
            "type": "Article"
        },
        {
            "title": "Laravel React Sample App: API client update for pagination",
            "description": "Read about updates to the Laravel React Sample app, focusing on how the API client handles pagination",
            "url": "sample-app-update",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/laravel-react-api-client-pagination",
            "about": "",
            "type": "Article"
        },
        {
            "title": "Proxying API Requests in Catalyst and Makeswift with Next.js Routes",
            "description": "Read how BigCommerce proxies GraphQL requests in a NextJS app with a Makeswift integration",
            "url": "proxy-nextjs-routes",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/api-route-handlers-catalyst",
            "about": "",
            "type": "Article"
        },
    ]

export default samples;

export const relevantLinks: relevantLink[] = []