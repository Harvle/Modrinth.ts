export type RESTCategoryTags = RESTCategoryTag[];

export type RESTCategoryTag = {
    /**
     * The SVG icon of a category.
     */
    icon: string;

    /**
     * The name of the category.
     */
    name: string;

    /**
     * The project type this category is applicable to.
     */
    project_type: string;

    /**
     * The header under which the category should go.
     */
    header: string;
};

export type RESTLoaderTags = RESTLoaderTag[];

export type RESTLoaderTag = {
    /**
     * The SVG icon of a loader.
     */
    icon: string;

    /**
     * The name of the loader.
     */
    name: string;

    /**
     * The project types that this loader is applicable to.
     */
    supported_project_types: string[];
};

export type RESTGameVersionTags = RESTGameVersionTag[];

export type RESTGameVersionTag = {
    /**
     * The name/number of the game version.
     */
    version: string;

    /**
     * The type of the game version.
     */
    version_type: RESTGameVersionTypeOptions;

    /**
     * The date of the game version release.
     */
    date: Date;

    /**
     * Whether or not this is a major version, used for Featured Versions.
     */
    major: boolean;
};

export type RESTGameVersionTypeOptions =
    | "release"
    | "snapshot"
    | "alpha"
    | "beta";

export type RESTLicense = {
    /**
     * The short identifier of the license.
     */
    short: string;

    /**
     * The full name of the license.
     */
    name: string;
};

export type RESTLicenseData = {
    /**
     * The title of the license.
     */
    title: string;

    /**
     * The body of the license.
     */
    body: string;
};

export type RESTDonationPlatformTags = RESTDonationPlatformTag[];

export type RESTDonationPlatformTag = {
    /**
     * The short identifier of the donation platform.
     */
    short: string;

    /**
     * The full name of the donation platform.
     */
    name: string;
};

export type RESTReportTypes = string[];

export type RESTProjectTypes = string[];

export type RESTSideTypes = string[];