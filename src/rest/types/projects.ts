import { NumberRange } from ".";
import type { RESTVersions } from "./versions";

export type RESTProjects = RESTProject[];

export interface RESTProject {
    /**
     * The slug of a project, used for vanity URLs.
     * 
     * Uses Regular Expression:
     * ```
     * /^[\w!@$()`.+,"\-']{3,64}$/
     * ```
     */
    slug: string;

    /**
     * The title or name of the project.
     */
    title: string;

    /**
     * A short description of the project.
     */
    description: string;

    /**
     * A list of the categories that the project has.
     */
    categories: string[];

    /**
     * The client side support of the project.
     */
    client_side: RESTProjectClientSideOptions;

    /**
     * The server side support of the project.
     */
    server_side: RESTProjectServerSideOptions;

    /**
     * The project type of the project.
     */
    project_type: RESTProjectTypeOptions;

    /**
     * The total number of downloads of the project.
     */
    downloads: number;

    /**
     * The URL of the project’s icon.
     */
    icon_url: string | null;

    /**
     * The RGB color of the project, automatically generated from the project icon.
     */
    color: number | null;

    /**
     * The ID of the moderation thread associated with this project.
     */
    thread_id: string;

    /**
     * The monetization status of the project.
     */
    monetization_status: RESTProjectMonetizationStatusOptions;

    /**
     * The ID of the project, encoded as a base62 string.
     */
    id: string;

    /**
     * The ID of the team that has ownership of this project.
     */
    team: string;

    /**
     * A long form description of the project.
     */
    body: string;

    /**
     * The link to the long description of the project. Always `null`, only kept for legacy compatibility.
     */
    body_url: null;

    /**
     * A message that a moderator sent regarding the project.
     */
    moderator_message: RESTProjectModeratorMessage;

    /**
     * The date the project was published.
     */
    published: Date;

    /**
     * The date the project was last updated.
     */
    updated: Date;

    /**
     * The date the project’s status was set to an approved status.
     */
    approved: Date | null;

    /**
     * The date the project’s status was submitted to moderators for review.
     */
    queued: Date | null;

    /**
     * The total number of users following the project.
     */
    followers: number;

    /**
     * The license of the project.
     */
    license: RESTProjectLicense;

    /**
     * A list of the version IDs of the project.
     * 
     * This will never be empty unless `status` is `draft`.
     */
    versions: string[];

    /**
     * A list of all of the game versions supported by the project.
     */
    game_versions: string[];

    /**
     * A list of all of the loaders supported by the project.
     */
    loaders: string[];

    /**
     * A list of images that have been uploaded to the project’s gallery.
     */
    gallery: RESTProjectGallery[];

    /**
     * The status of the project.
     */
    status: RESTProjectStatusOptions;

    /**
     * The requested status when submitting for review or scheduling the project for release.
     */
    requested_status: RESTProjectRequestedStatusOptions | null;

    /**
     * A list of categories which are searchable but non-primary.
     */
    additional_categories: string[];

    /**
     * An optional link to where to submit bugs or issues with the project.
     */
    issues_url: string | null;

    /**
     * An optional link to the source code of the project.
     */
    source_url: string | null;

    /**
     * An optional link to the project’s wiki page or other relevant information.
     */
    wiki_url: string | null;

    /**
     * An optional invite link to the project’s Discord server.
     */
    discord_url: string | null;

    /**
     * A list of donation links for the project.
     */
    donation_urls: RESTProjectDonationURL[];
};

export type RESTProjectClientSideOptions =
    | "required"
    | "optional"
    | "unsupported"
    | "unknown";

export type RESTProjectServerSideOptions =
    | "required"
    | "optional"
    | "unsupported"
    | "unknown";

export type RESTProjectTypeOptions =
    | "mod"
    | "modpack"
    | "resourcepack"
    | "shader";

export type RESTProjectMonetizationStatusOptions =
    | "monetized"
    | "demonetized"
    | "force-demonetized";

export type RESTProjectStatusOptions =
    | "approved"
    | "archived"
    | "rejected"
    | "draft"
    | "unlisted"
    | "processing"
    | "withheld"
    | "scheduled"
    | "private"
    | "unknown";

export type RESTProjectRequestedStatusOptions =
    | "approved"
    | "archived"
    | "unlisted"
    | "private"
    | "draft";

export type RESTProjectDonationURL = {
    /**
     * The ID of the donation platform.
     */
    id: string;

    /**
     * The donation platform this link is to.
     */
    platform: string;

    /**
     * The URL of the donation platform and user.
     */
    url: string;
};

export type RESTProjectModeratorMessage = {
    /**
     * The message that a moderator has left for the project.
     */
    message: string;

    /**
     * The longer body of the message that a moderator has left for the project.
     */
    body: string | null;
};

export type RESTProjectLicense = {
    /**
     * The SPDX license ID of a project.
     */
    id: string;

    /**
     * The long name of a license.
     */
    name: string;

    /**
     * The URL to this license.
     */
    url: string | null;
};

export type RESTProjectGallery = {
    /**
     * The URL of the gallery image.
     */
    url: string;

    /**
     * Whether the image is featured in the gallery.
     */
    featured: boolean;

    /**
     * The title of the gallery image.
     */
    title: string | null;

    /**
     * The description of the gallery image.
     */
    description: string | null;

    /**
     * The date and time the gallery image was created.
     */
    created: Date;

    /**
     * The order of the gallery image. Gallery images are sorted by this field and then alphabetically by title.
     */
    ordering: number | null;
};

export type RESTProjectSearchResponse = {
    /**
     * The list of results.
     */
    hits: RESTProjects;

    /**
     * The number of results that were skipped by the query.
     */
    offset: number;

    /**
     * The number of results that were returned by the query.
     */
    limit: number;

    /**
     * The total number of results that match the query.
     */
    total_hits: number;
};

export type RESTProjectDependenciesResponse = {
    /**
     * Projects that the project depends upon.
     */
    projects: RESTProjects;

    /**
     * Versions that the project depends upon.
     */
    versions: RESTVersions;
};

export type RESTProjectValidityResponse = {
    /**
     * The validated ID.
     */
    id: string;
};