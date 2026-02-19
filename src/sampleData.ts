
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
            "title": "Localizing a Catalyst Storefront into Multiple Languages",
            "description": "Read an end-to-end guide on how to set up multi-language support for a BigCommerce storefront",
            "url": "localization-guide",
            "sampleURL": "https://developer.bigcommerce.com/docs/storefront/catalyst/features/localization/multi-language/setup",
            "about": "",
            "type": "Article"
        },
        {
            "title": "Proxying API Requests in Catalyst and Makeswift with Next.js Routes",
            "description": "Learn how BigCommerce proxies GraphQL requests in a NextJS app with a Makeswift integration",
            "url": "proxy-nextjs-routes",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/api-route-handlers-catalyst",
            "about": "This article is about proxying GraphQL requests in a BigCommerce NextJS app using API Route Handlers. The blog is for beginner NextJS developers who want to query dynamic data from BigCommerce in their Makeswift integration. The purpose is to help developers query BigCommerce APIs from their integration without needing tech support. \n\nTo create the content, I took the implementation from the NextJS app and dissected it into code snippets that developers could follow when building the implementation from scratch. From there, I drafted a tutorial blog that became the script for the video. To create the video, I recorded the audio and my screen while demoing the code snippets. The video editors applied company branding to the video. I also encourage readers to check out the full production-ready implementation in the open source codebase.\n\nOverall, this sample demonstrates how I support product use cases with step-by-step tutorials to support learning. This video can be reused to onboard developers who want to integrate with Makeswift.\n",
            "type": "Article"
        },
    ]

export default samples;

export const relevantLinks: relevantLink[] = []