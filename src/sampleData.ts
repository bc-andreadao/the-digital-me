
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
            "title": "Localization Guide for SaaS Storefronts",
            "description": "Read an end-to-end guide on how to set up multi-language support for a BigCommerce storefront.",
            "url": "user-guide",
            "sampleURL": "https://github.com/bigcommerce/docs/blob/dc93fe8b75af38d27f8386e44f3a9c211b2c5819/docs/storefront/catalyst/content-management/internationalization/multi-language/setup.mdx",
            "about": "I wrote an end-to-end user guide that shows developers how to set up multi-language support for an ecommerce storefront. The guide covers topics such as configuring language settings and translating content. I collaborated with the product team to ensure the guide accurately reflects the latest features and functionalities of the SaaS platform.\n\nOverall, this sample shows how I create comprehensive user documentation that helps developers reach a global audience through multi-language support.",
            "type": "User Guide"
        },
        {
            "title": "Documenting Server-to-Server APIs for Localization Features",
            "description": "Read an overview on how to get started adding translations for BigCommerce store.",
            "url": "server-to-server-apis",
            "sampleURL": "https://github.com/bigcommerce/docs/blob/main/docs/store-operations/catalog/msf-international-enhancements/msf-international-enhancements.mdx",
            "about": "I documented GraphQL schemas and queries for adding product translations to a BigCommerce store. I collaborated with the product and engineering team to gather the use cases and technical details of the server-to-server APIs and translated that information into concise documentation. I created and tested examples based on the schemas I received from the engineeering team.",
            "type": "Overview & Reference"
        },
        {
            "title": "Diataxis Templates for Developer Documentation",
            "description": "Learn about the Diataxis-based templates I created to help structure documentation for different user needs.",
            "url": "documentation-templates",
            "sampleURL": "https://github.com/bigcommerce/docs/tree/main/diataxis-templates#diataxis",
            "about": "I created Diataxis-based templates to help structure documentation for different user needs. I did online research on Diataxis and created templates for the four Diataxis categories: overview, tutorial, guide, and reference. I wrote guidelines on how to use the templates and provided examples of each template filled out with sample content. Each template includes reusable sections, content rules, and naming conventions. I shared the templates with my team at BigCommerce to gather feedback and improve the templates. \n\nOverall, this sample demonstrates how I apply documentation best practices to improve the usability of technical content. By using Diataxis principles, I help ensure that documentation meets diverse user needs, making it easier to find information based on specific goals and tasks.\n",
            "type": "Documentation Templates"
        },
    ]

export default samples;

export const relevantLinks: relevantLink[] = []