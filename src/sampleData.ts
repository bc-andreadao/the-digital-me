
type sampleData = {
    title: string;
    description: string;
    url: string;
    sampleURL?: string;
    about?: string;
    type?: string;
};

const samples: sampleData[] = [
        {
            "title": "C15t Meets Catalyst: Consent Management Made Easy",
            "description": "Learn about the new industry standard for consent management with a custom c15t implementation",
            "url": "c15t-consent-management",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/catalyst-c15t-consent",
            "about": "This article shows how to manage consent preferences in a Next.js app (Catalyst) to align with industry standards and real-world constraints. The article is for NextJS developers building production sites that must meet performance standards without sacrificing compliance. I created this piece from ideation to publication, explaining complex systems with independent investigation and minimal supervision.\n\nI owned the content creation process from start to finish. First, I identified that the technology Catalyst uses is the same as the emerging industry direction that c15t experts promote. To craft the sample code demos in the repository, I used the c15t Getting Started docs to build a basic banner from an empty repository. I then incorporated parts of the Catalyst implementation of c15t by taking the code from the pull requests the engineering team sent me and introducing it into the demo. I used the pull request descriptions and tested each step to understand the code. I then wrote the article and took screen recordings for the demo.\n\nThis sample demonstrates that I can dissect complex concepts to simpler demos, which requires deep technical skill. The examples are conceptual: the examples only show enough of the custom implementation. For example, the sample demo uses dummy script data to demo a script loader, rather than an actual fetch call and data transformation. Overall, the article isolates core consent concepts without requiring a full ecommerce setup.",
            "type": "Article"
        },
        {
            "title": "Keep it Streaming: Understanding Suspense in NextJS",
            "description": "Learn how to use Suspense and Streaming from React to handle asynchronous data fetches in NextJS",
            "url": "nextjs-suspense",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/nextjs-suspense",
            "about": "This article teaches a core mental model behind React Suspense and streaming in Next.js. I wrote it for beginner NextJS developers that want to reason about asynchronous data fetches in their applications. The purpose is to provide support for developers who have expressed interest in adopting our NextJS platform.\n\nI structured the content as a narrative walkthrough to explain the concepts: introducing a problem that needs to be solved, the solution that the framework introduces, and basic code samples. I also ask readers to visit the code on specific branches of a repository they need to clone and then comment on what they should see when they run the code locally. The demos are basic examples and use dummy data returned from a fetch simulation. I scoped each example to show only one behavior at a time instead of replicating a full application.\n\nOverall, this sample shows how I explain framework concepts to help developers build mental models. It demonstrates how I craft a narrative approach when I create educational materials.",
            "type": "Article"
        },
        {
            "title": "Proxying API Requests in Catalyst and Makeswift with Next.js Routes",
            "description": "Watch how you can secure requests to third-party APIs in a NextJS app using API Route Handlers as a proxy",
            "url": "proxy-nextjs-routes",
            "sampleURL": "https://www.youtube.com/watch?v=Qi_DkSQviU0",
            "about": "This video shows how to proxy GraphQL requests using API Route Handlers in a NextJS app with third-party API integrations. The video is for developers who need to understand how to securely access backend data without exposing credentials to the client. \n\nTo create the content, I took the production implementation and dissected it into code snippets. Each step builds toward a mental model of how the proxy works. From there, I drafted a tutorial that became the script for the video, recorded the audio, and demoed the code snippets for the screen recordings. I also encourage readers to check out the full open-source implementation to see how the patterns scale in production.\n\nOverall, this sample demonstrates how I teach integration patterns through step-by-step tutorials. This video reduces support cases when onboarding developers who want the third-party integration in their app.\n\nCheck out the written version of the video at https://developer.bigcommerce.com/resource-hub/api-route-handlers-catalyst.",
            "type": "Video"
        },
    ]

export default samples;