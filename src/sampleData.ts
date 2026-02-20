
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
            "description": "View my demo on how a Catalyst sample app manages shopper consent using an open-source c15t integration",
            "url": "c15t-consent-management",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/catalyst-c15t-consent",
            "about": "",
            "type": "Article"
        },
        {
            "title": "Proxying API Requests in Catalyst and Makeswift with Next.js Routes",
            "description": "Learn how you can proxy GraphQL requests in a Catalyst sample app with a Makeswift integration",
            "url": "proxy-nextjs-routes",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/api-route-handlers-catalyst",
            "about": "",
            "type": "Article"
        },
        {
            "title": "BigCommerce for Wordpress (BC4WP) Documentation Update",
            "description": "Learn how I streamlined a workflow to increase external contributions to the open-source BC4WP documentation",
            "url": "bc4wp-documentation-update",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/bc4wp-documentation-update",
            "about": "This article explains how I automated a workflow for updating BigCommerce for WordPress (BC4WP) reference documentation. I piloted the workflow so that reference documentation could be maintained at large scale while supporting external contributions.\n\nFirst, I added DocBlocks in the BC4WP source code for its classes, methods, and hooks. Then, I created a GitHub Action that parses source-code DocBlocks and outputs the reference documentation to Markdown files. The workflow runs a shell script that uses Docker to run a phpDocumentor. I then rendered the Markdown with a Nextra site and deploy the site on Vercel. External contributors can manually trigger the workflow to update the documentation when they update DocBlock descriptions.\n\nThe sample shows I have experience working with the following:\n\n- Docs-as-code workflows\n- GitHub actions, CI/CD, automations\n- Markdown, static site generators (Nextra)\n- Writing DocBlocks & reading production code\n- Maintaining large docs at scale\n- Process and editorial improvements\n- Contribution workflows, review/rollback, and preview environments\n- AI tools to facilitate documentatation (writing DocBlocks, creating workflows)",
            "type": "Article"
        },
    ]

export default samples;

export const relevantLinks: relevantLink[] = []