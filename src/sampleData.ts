
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
            "title": "Keep it Streaming: Understanding Suspense in NextJS",
            "description": "Learn how to use Suspense and Streaming from React to handle asynchronous data fetches in NextJS",
            "url": "nextjs-suspense",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/nextjs-suspense",
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
        {
            "title": "Demoing a Wishlist App with a REST API Integration",
            "description": "Watch a demo of the Wishlist app I built using React and Express, hosted on Vercel",
            "url": "react-express-app-demo",
            "sampleURL": "https://www.loom.com/share/bb5a392eea8c40deace501e3dc428763",
            "about": "",
            "type": "Video"
        },
    ]

export default samples;

export const relevantLinks: relevantLink[] = []