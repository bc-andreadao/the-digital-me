
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
            "title": "Streaming Data with Suspense in NextJS",
            "description": "Learn how to stream data in a NextJS app using Suspense and React Server Components",
            "url": "streaming-data-nextjs",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/nextjs-suspense",
            "about": "This article is about streaming data in a NextJS app using Suspense and React Server Components. The purpose is to help developers build performant applications that can handle large datasets.\n\nThis sample shows I am fluent with the following:\n\n- Streaming data patterns in React\n- Suspense and React Server Components\n- Performance optimization techniques",
            "type": "Article"
        },
        {
            "title": "Autogenerating Reference Documentation with a Docs-as-Code Workflow",
            "description": "Learn about the workflow I piloted for autogenerating large-scale reference documentation for the open-source BigCommerce for WordPress (BC4WP) plugin",
            "url": "bc4wp-documentation-update",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/bc4wp-documentation-update",
            "about": "This article explains how I automated a workflow for updating BigCommerce for WordPress (BC4WP) reference documentation. I piloted the workflow so that reference documentation could be maintained at large scale while supporting external contributions.\n\nFirst, I added DocBlocks in the BC4WP source code for its classes, methods, and hooks. Then, I created a GitHub Action that parses source-code DocBlocks and outputs the reference documentation to Markdown files. The workflow runs a shell script that uses Docker to run a phpDocumentor. I then rendered the Markdown with a Nextra site and deploy the site on Vercel. External contributors can manually trigger the workflow to update the documentation when they update DocBlock descriptions.\n\nThe sample shows I have experience working with the following:\n\n- Docs-as-code workflows\n- GitHub actions, CI/CD, automations\n- Markdown, static site generators (Nextra)\n- Writing DocBlocks & reading production code\n- Maintaining large docs at scale\n- Process and editorial improvements\n- Contribution workflows, review/rollback, and preview environments\n- AI tools to facilitate documentatation (writing DocBlocks, creating workflows)",
            "type": "Article"
        },
        {
            "title": "Documenting a Localization Workflow for an Ecommerce Storefront",
            "description": "Learn how to localize an ecommerce storefront across UI components, dynamic API content, and Postman workflows",
            "url": "storefront-localization",
            "sampleURL": "https://github.com/bigcommerce/docs/blob/dc93fe8b75af38d27f8386e44f3a9c211b2c5819/docs/storefront/catalyst/content-management/internationalization/multi-language/setup.mdx",
            "about": "This guide shows how to set up multi-language support in a BigCommerce Catalyst storefront. It demostrates how to add multilanguage translations across static UI component text, dynamic data, and CMS-driven tools (Makeswift).\n\nThis sample shows that I am fluent with the following:\n\n- Multi-faceted documentation (UI and API interactions, Postman automated workflows)\n- Developer enablement and onboarding\n- Internationalization (i18n) and localization concepts",
            "type": "Article"
        },
    ]

export default samples;

export const relevantLinks: relevantLink[] = [
    {
        title: "Secure Data Fetching with API Route Handlers",
        url: "https://developer.bigcommerce.com/resource-hub/api-route-handlers-catalyst",
        description: "Documenting a secure data-fetching workflow in a production Next.js application"
    },
    {
        title: "Consent Management with c15t",
        url: "https://developer.bigcommerce.com/resource-hub/catalyst-c15t-consent",
        description: "Documenting a compliance workflow in a production Next.js application"
    },
    {
        title: "Developer Workflow with Tmux",
        url: "https://developer.bigcommerce.com/resource-hub/laravel-react-app-with-tmux",
        description: "Practical guide for automating terminal workflows with Tmux"
    },
]