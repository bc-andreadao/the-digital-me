
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
            "title": "Keep it Streaming: Understanding Suspense in NextJS",
            "description": "Learn how to use Suspense and Streaming from React to handle asynchronous data fetches in NextJS",
            "url": "nextjs-suspense",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/nextjs-suspense",
            "about": "This blog teaches how to use Suspense and Streaming from React to handle asynchronous data fetches in NextJS. I wrote it for BigCommerce developers new to the NextJS framework that want to use Catalyst. The purpose is to provide support for BigCommerce developers new to NextJS so they can adopt our new platform.\n\nMy article fits into a deeper educational content strategy. Earlier, my team member held a conference workshop on the Streaming patterns built into Catalyst. I wrote my article to segway into the deeper workshop material that demonstrates the patterns built into Catalyst. To complement his workshop, I took parts of his code related to styling and sample data. I read through existing NextJS docs and wrote the basic code samples. I tested the samples and created the screen recordings.\n\nI used a narrative walkthrough to explain the concepts. I introduced a problem that needs to be solved, the solution that the framework introduces, and a basic code sample. I also ask readers to visit the code on specific branches of a repository they need to clone and then comment on what they should see when they run the code locally. The demos are basic examples and use dummy data returned from a fetch simulation.  \n\nOverall, this sample demonstrates how I build educational materials to provide support for the tech stack that BigCommerce uses. It teaches BigCommerce developers core NextJS concepts so they have a lower learning curve when using our tech stack.\n\n",
            "type": "Article"
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
            "title": "BigCommerce for WordPress (BC4WP): Documentation Update",
            "description": "Read about the streamlined workflow for updating reference documentation for the open-source BC4WP plugin",
            "url": "bc4wp-documentation-update",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/bc4wp-documentation-update",
            "about": "This article explains the streamlined workflow for updating BigCommerce for WordPress (BC4WP) reference documentation. It was written for external developers using BC4WP. The purpose was to invite community feedback and participation to an open source repository.\n\nThis sample demonstrates how I made a workflow transparent to lower the barrier for community participation. The workflow involves a Github action file that parses source-code docblocks and outputs the reference documentation to markdown files. External contributors can manually trigger the workflow to update the documentation if they update docblock descriptions. I created a video to show community members how to contribute to the docs. I also updated the contributing.md file in the BC4WP open source repository to include instructions for contributing. \n\n",
            "type": "Article"
        },
        {
            "title": "Improving the Docs: Understanding an Audience from the Ground Up",
            "description": "Read about how I became a better technical communicator by connecting hands-on learning to documentation",
            "url": "technical-communication",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/understanding-an-audience-from-ground-up",
            "about": "This blog explains how I became a better technical communicator and demonstrates audience awareness. It touches on communication concepts such as preserving a beginner’s mindset, understanding how end-users interact with tooling, and pinpointing details that may be important to your audience. I wrote the article for technical communicators writing for novice developers. \n\nIn the blog, I walk through how I approached a concrete, real life example involving popular clients based on my experience at a bootcamp. I tie the bootcamp curriculum back to the tech stack at BigCommerce. To prevent information overload, I balance technical detail with narrative and choose which relevant details to include. I used ChatGPT to edit some sentences to add clarity to the technical pieces. \n\nThis sample demonstrates my systematic process for thinking about developer experience. It shows I can make a piece of writing both engaging and educational, while connecting learning to business goals.  ",
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