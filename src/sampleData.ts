
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
            "description": "Read about how BigCommerce manages consent preferences with a custom c15t implementation in the latest Catalyst release",
            "url": "c15t-consent-management",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/catalyst-c15t-consent",
            "about": "The sample does the following:\n\n- Talks about a feature release\n\n- Introduces a third-party library\n\n- Shows basic usage and customization\n\n- Covers integration with an existing platform\n\n- Mentions feature parity and mapping",
            "type": "Article"
        },
        {
            "title": "Keep it Streaming with Suspense in NextJS",
            "description": "Read about what happens on the server and browser when you stream UI in NextJS with Suspense",
            "url": "nextjs-suspense",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/nextjs-suspense",
            "about": "The sample does the following:\n\n- Compares client vs server execution\n\n- Explains rendering behavior\n\n- Walks through blocking vs streaming\n\n- Uses real code and branches",
            "type": "Article"
        },
        {
            "title": "Proxying API Requests in Catalyst and Makeswift with Next.js Routes",
            "description": "Read how BigCommerce proxies GraphQL requests in a NextJS app with a Makeswift integration",
            "url": "proxy-nextjs-routes",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/api-route-handlers-catalyst",
            "about": "The article covers:\n\n- An end-to-end flow for secure data fetching and proxying\n\n- Security motivations (e.g. protecting env vars from client exposure)\n\n",
            "type": "Article + Video"
        },
    ]

export default samples;

export const relevantLinks: relevantLink[] = []