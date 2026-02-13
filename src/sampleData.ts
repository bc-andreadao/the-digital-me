
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
            "title": "Proxying API Requests in Catalyst and Makeswift with Next.js Routes",
            "description": "Learn how BigCommerce proxies GraphQL requests in a NextJS app with a Makeswift integration",
            "url": "proxy-nextjs-routes",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/api-route-handlers-catalyst",
            "about": "This demo shows how to proxy GraphQL requests using API Route Handlers in a NextJS app with third-party API integrations. This content is for developers who need to understand how to securely access backend data without exposing credentials to the client.\n\nThis sample demonstrates my ability to:\n\n- Explain backend/frontend boundaries clearly\n\n- Translate production code into educational walkthroughs\n\n- Demo secure integration patterns to reduce support tickets",
            "type": "Article"
        },
        {
            "title": "Keep it Streaming: Understanding Suspense in NextJS",
            "description": "Learn how to use Suspense and Streaming from React to handle asynchronous data fetches in NextJS",
            "url": "nextjs-suspense",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/nextjs-suspense",
            "about": "This article teaches a core mental model behind React Suspense and streaming in Next.js. I wrote it to help BigCommerce developers understand the architectural patterns in our Catalyst platform, which relies on modern React server rendering concepts.\n\nThis sample demonstrates my ability to:\n\n- Clarify architectural concepts (rendering, async boundaries)\n\n- Build reproducible demo environments",
            "type": "Article"
        },
        {
            "title": "Stop Juggling Terminals: Run Your Laravel React App with Tmux",
            "description": "Learn how to streamline your terminal workflow when running an app locally",
            "url": "laravel-react-app-with-tmux",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/laravel-react-app-with-tmux",
            "about": "This article shows how to streamline a local development workflow using Tmux sessions and a bash script. By running my script, developers can automate starting the dev server, monitoring logs, and recovering sessions with a single command.\n\nThis sample demonstrates my ability to:\n\n- Improve day-to-day developer workflows \n\n- Test third-party tooling against a reference application\n\n- Create automation scripts with reproducible steps",
            "type": "Article"
        },
    ]

export default samples;

export const relevantLinks: relevantLink[] = []