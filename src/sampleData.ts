
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
            "about": "This blog is about managing consent preferences in a Next.js app with a custom c15t implementation. I wrote the blog for NextJS developers building ecommerce sites using BigCommerce’s Catalyst app.\n\nThe purpose is to show that our product release incorporates the latest tools and industry standards for managing consent. I came up with the purpose of the blog from attending the NextJS conf 2025. One presentation I attended discussed a new industry standard for managing consent in front end apps. After meeting with the engineering team, I noticed that one of the releases for our ecommerce platform uses the same library and meets the emerging standards that were presented at the conference. I took the opportunity to position BigCommerce as a credible participant in the community.\n\nTo craft the sample code demos in the repository, I used the c15t Getting Started docs to build a basic banner from an empty repository. I then incorporated parts of the Catalyst implementation of c15t by taking the code from the pull requests the engineering team sent me and introducing it into the demo. I used the pull request descriptions and tested each step to understand the code. I then wrote the article and took screen recordings for the demo. Then I sent it to the rest of my team for editorial review.\n\nThis blog uses a code-first approach to teaching. For each concept, readers can dive into the code by checking various git branches from a cloned repository. The commentary explains the code and what they should see in their browser if they run a local preview. The examples are conceptual: the examples only show enough of BigCommerce’s implementation to teach a concept. For example, the sample demo uses dummy script data to demo a script loader, rather than an actual fetch call and data transformation.\n\nMy blog had a positive impact on BigCommerce’s community presence. After announcing the blog on social media, the creators of c15t reposted our post and recognized the BigCommerce team that worked with them. There was also reciprocal posting; the c15t creators announced our feature release in a separate post of theirs. The activity on social media from credible voices fostered trust in BigCommerce’s platform.\n\nOverall, this sample demonstrates how I helped BigCommerce gain community recognition and maintain relationships with credible voices. It helped increase the visibility of BigCommerce within the NextJS community",
            "type": "Article"
        },
        {
            "title": "Localization Guide for SaaS Storefronts",
            "description": "Read an end-to-end guide on how to set up multi-language support for a BigCommerce storefront",
            "url": "user-guide",
            "sampleURL": "https://github.com/bigcommerce/docs/blob/dc93fe8b75af38d27f8386e44f3a9c211b2c5819/docs/storefront/catalyst/content-management/internationalization/multi-language/setup.mdx",
            "about": "I wrote an end-to-end user guide that shows developers how to set up multi-language support for an ecommerce storefront. The guide covers topics such as configuring language settings and translating content. I collaborated with the product team to ensure the guide accurately reflects the latest features and functionalities of the SaaS platform.\n\nOverall, this sample shows how I create comprehensive user documentation that helps developers reach a global audience through multi-language support.",
            "type": "User Guide"
        },
        {
            "title": "Stop Juggling Terminals: Run Your Laravel React App with Tmux",
            "description": "Learn how to simplify your terminal workflow when running a Laravel React sample app locally",
            "url": "laravel-react-app-with-tmux",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/laravel-react-app-with-tmux",
            "about": "This blog is about simplifying a terminal workflow when running a sample app locally. I wrote it for BigCommerce developers using BigCommerce’s Laravel React App. The purpose was to position BigCommerce as an active participant of the Laravel community.\n\nI got the idea of writing this blog from attending the Laracon 2025 conference. I tested the Tmux tooling presented at the conference on BigCommerce’s Laravel React app. The tutorial has a step-by-step format: I listed out each command and keyboard shortcut and explained what developers should see in their terminal. I chose common processes to run in the terminal, such as starting the dev server and viewing terminal logs. I used Github Copilot to help me draft the bash commands in the script and tested the script commands in my terminal. I recorded my screen for the demos and wrote the article. \n\nOverall, this sample demonstrates how I increase awareness for company releases and teach developers how to incorporate tools into their workflow.  ",
            "type": "Article"
        },
        {
            "title": "Proxying API Requests in Catalyst and Makeswift with Next.js Routes",
            "description": "Watch how BigCommerce proxies GraphQL requests in a NextJS app with a Makeswift integration",
            "url": "proxy-nextjs-routes",
            "sampleURL": "https://www.youtube.com/watch?v=Qi_DkSQviU0",
            "about": "This video is about proxying GraphQL requests in a BigCommerce NextJS app using API Route Handlers. The blog is for beginner NextJS developers who want to query dynamic data from BigCommerce in their Makeswift integration. The purpose is to help developers query BigCommerce APIs from their integration without needing tech support. \n\nTo create the content, I took the implementation from the NextJS app and dissected it into code snippets that developers could follow when building the implementation from scratch. From there, I drafted a tutorial blog that became the script for the video. To create the video, I recorded the audio and my screen while demoing the code snippets. The video editors applied company branding to the video. I also encourage readers to check out the full production-ready implementation in the open source codebase.\n\nOverall, this sample demonstrates how I support product use cases with step-by-step tutorials to support learning. This video can be reused to onboard developers who want to integrate with Makeswift.\n",
            "type": "Video"
        },
    ]

export default samples;

export const relevantLinks: relevantLink[] = []