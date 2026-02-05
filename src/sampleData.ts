
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
        "title": "Teaching Storefront Localization through a Guided Sample Lab",
        "description": "This sample shows how I used a controlled lab to demonstrate how to localize an ecommerce storefront",
        "url": "storefront-localization",
        "sampleURL": "https://github.com/bigcommerce/docs/blob/dc93fe8b75af38d27f8386e44f3a9c211b2c5819/docs/storefront/catalyst/content-management/internationalization/multi-language/setup.mdx",
        "about": "This lab tutorial shows how to set up multi-language support in a BigCommerce NextJS storefront. The purpose was to teach how translations work across static UI component text, dynamic data, and CMS-driven content.\n\nOverall, this sample shows how I simplify cross-platform concepts into a repeatable, testable workflow. The lab uses sample data to help produce consistent results in a controlled environment. This helps keep the learning environment predictable and easy to understand while mirroring real-world storefront requirements. It also helps developers focus on performing each localization step without needing to debug unrelated issues.",
        "type": "Article"
    },
    {
        "title": "Explaining Secure Data Fetching with Step-by-Step Building",
        "description": "This sample shows how I explained an API proxy implementation by building progressively more realistic scenarios",
        "url": "proxy-nextjs-routes",
        "sampleURL": "https://www.youtube.com/watch?v=Qi_DkSQviU0",
        "about": "This video is about proxying GraphQL requests in a BigCommerce NextJS app using API Route Handlers. The lesson is for beginner NextJS developers who want to query dynamic data from BigCommerce in their Makeswift integration. The purpose is to help developers query BigCommerce APIs from their integration without needing tech support. \n\nOverall, this sample shows how I teach through guided walkthroughs. The lesson introduces API proxying through progressively more realistic scenarios so developers can understand why each architectural decision exists. For example, I start with static data before introducing routing for dynamic data and user input. To create the content, I took the implementation from the NextJS app and dissected it into code snippets that developers could follow when building the implementation from scratch. I also encourage readers to check out the full production-ready implementation in the open source codebase.\n\nFor the video script, check out the written version of the video: https://developer.bigcommerce.com/resource-hub/api-route-handlers-catalyst.",
        "type": "Video"
    },
    {
        "title": "Desigining a Lesson to Teach Suspense and Streaming Concepts",
        "description": "This sample shows how I used progressive examples and visual feedback to teach concepts from React Suspense",
        "url": "nextjs-suspense",
        "sampleURL": "https://developer.bigcommerce.com/resource-hub/nextjs-suspense",
        "about": "I designed this tutorial as a lesson to teach developers how to use React Suspense in a NextJS app. The purpose is to provide support for BigCommerce developers new to NextJS so they can adopt our new platform. My tutorial fits into a deeper educational content strategy, complementing a workshop my teammate led at a conference, so that we could effectively bridge high-level concepts and real-life implementations.\n\nOverall, this sample demonstrates how I build educational materials to provide support for the tech stack that BigCommerce uses. I introduce examples with increased complexity, use visuals to teach abstract mental models, and provide comparisons for tradeoffs. The structure mirrors how developers learn: starting with what feels “good enough,” exposing limitations, and introducing new concepts only when they become necessary.\n\n I designed the training in a repository with sample data to help developers test and observe behavior in a realistic but controlled environment. I guide readers by directing them to the code on specific repository branches and then comment on what they should see when they run the code locally. The demos are basic examples and use dummy data returned from a fetch simulation.",
        "type": "Article"
    },
    ]

export default samples;