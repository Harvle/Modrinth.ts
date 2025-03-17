export type RESTStatistics = {
    /**
     * Number of projects on Modrinth.
     */
    projects: number;

    /**
     * NUmber of versions on Modrinth.
     */
    versions: number;

    /**
     * Number of version files on Modrinth.
     */
    files: number;

    /**
     * Number of authors (users with projects) on Modrinth.
     */
    authors: number;
};

export type RESTForgeUpdatesJSON = {
    /**
     * A link to the mod page.
     */
    homepage: string;
    /**
     * A list of the recommended and latest versions for each Minecraft release.
     * 
     * Values are keyed using the following formats:
     * - `{version}-recommended`: The mod version that is recommended for {version}. Excludes versions with the `alpha` and `beta` version types.
     * - `{version}-latest`: The latest mod version for {version}. Shows versions with the `alpha` and `beta` version types.
     */
    promos: RESTForgeUpdatesJSONPromos;
};

export type RESTForgeUpdatesJSONPromos = {
    [key: string]: string;
};