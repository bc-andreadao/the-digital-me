
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
            "title": "Documenting a Localization Workflow for an Ecommerce Storefront",
            "description": "Learn how to localize an ecommerce storefront across UI components, dynamic API content, and Postman workflows",
            "url": "storefront-localization",
            "sampleURL": "https://github.com/bigcommerce/docs/blob/dc93fe8b75af38d27f8386e44f3a9c211b2c5819/docs/storefront/catalyst/content-management/internationalization/multi-language/setup.mdx",
            "about": "This guide shows how to set up multi-language support in a BigCommerce Catalyst storefront. It demostrates how to add multilanguage translations across static UI component text, dynamic data, and CMS-driven tools (Makeswift).\n\nThis sample shows that I am fluent with the following:\n\n- Multi-faceted documentation (UI and API interactions, Postman automated workflows)\n- Developer enablement and onboarding\n- Internationalization (i18n) and localization concepts",
            "type": "Article"
        },
    ]

export default samples;

export const relevantLinks: relevantLink[] = []