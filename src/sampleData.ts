
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
            "title": "Autogenerating BC4WP Reference Documentation with a Docs-as-Code Workflow",
            "description": "Learn about the workflow I piloted for autogenerating large-scale reference documentation for the open-source BigCommerce for WordPress (BC4WP) plugin",
            "url": "bc4wp-documentation-update",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/bc4wp-documentation-update",
            "about": "This article explains how I automated a workflow for updating BigCommerce for WordPress (BC4WP) reference documentation. I piloted the workflow so that reference documentation could be maintained at large scale while supporting external contributions.\n\nFirst, I added docblocks in the BC4WP source code for its classes, methods, and hooks. Then, I created a Github Action that parses source-code docblocks and outputs the reference documentation to Markdown files. The workflow runs a shell script that uses Docker to run a phpDocumentor. I then rendered the Markdown with a Nextra site and deploy the site on Vercel. External contributors can manually trigger the workflow to update the documentation when they update docblock descriptions.\n\nThe sample shows I have experience working with the following:\n\n- Docs-as-code workflows\n- Github actions, CI/CD, automations\n- Markdown, static site generators (Nextra)\n- Writing docblocks & reading production code\n- Maintaining large docs at scale\n- Process and editorial improvements\n- Contribution workflows, review/rollback, and preview environments\n- AI tools to facilitate documentatation (writing docblocks, creating workflows)",
            "type": "Article"
        },
        {
            "title": "Proxying API Requests in Catalyst and Makeswift with Next.js API Route Handlers",
            "description": "Learn how to proxy GraphQL requests in a Catalyst NextJS app with a Makeswift integration",
            "url": "proxy-nextjs-routes",
            "sampleURL": "https://developer.bigcommerce.com/resource-hub/api-route-handlers-catalyst",
            "about": "This article is about proxying GraphQL requests in a NextJS app using API Route Handlers. The purpose is to help developers query BigCommerce backend data from their Makeswift integration without needing tech support. \n\nThis sample shows I am fluent with the following:\n\n- API workflows, clients, requests/responses\n- Secure data fetching principles\n- Developer enablement/onboarding\n- Integrations in headless commerce\n - Realistic production implementations",
            "type": "Article"
        },
        {
            "title": "Localizing an Ecommerce Storefront into Multiple Languages",
            "description": "Learn how to localize an ecommerce storefront across UI components, dynamic API content, and Postman workflows",
            "url": "storefront-localization",
            "sampleURL": "https://github.com/bigcommerce/docs/blob/dc93fe8b75af38d27f8386e44f3a9c211b2c5819/docs/storefront/catalyst/content-management/internationalization/multi-language/setup.mdx",
            "about": "This guide shows how to set up multi-language support in a BigCommerce Catalyst storefront. It demostrates how to add multilanguage translations across static UI component text, dynamic data, and CMS-driven tools (Makeswift).\n\nThis sample shows that I am fluent with the following:\n\n- Multi-faceted documentation (UI and API interactions, Postman automated workflows)\n- Developer enablement and onboarding\n- Internationalization (i18n) and localization concepts",
            "type": "Article"
        },
    ]

export default samples;