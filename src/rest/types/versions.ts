export type RESTVersions = RESTVersion[];

export type RESTVersion = {
    /**
     * The name of this version.
     */
    name: string;

    /**
     * The version number. Ideally will follow semantic versioning.
     */
    version_number: string;

    /**
     * The changelog for this version.
     */
    changelog: string | null;

    /**
     * A list of specific versions of projects that this version depends on.
     */
    dependencies: RESTVersionDependencies;

    /**
     * A list of versions of Minecraft that this version supports.
     */
    game_versions: string[];

    /**
     * The release channel for this version.
     */
    version_type: RESTVersionTypeOptions;

    /**
     * The mod loaders that this version supports. In case of resource packs, use “minecraft”.
     */
    loaders: string;

    /**
     * Whether the version is featured or not.
     */
    featured: boolean;

    /**
     * The status of this version.
     */
    status: RESTVersionStatusOptions;

    /**
     * The requested status of this version.
     */
    requested_status: RESTVersionRequestedStatusOptions | null;

    /**
     * The ID of the version, encoded as a base62 string.
     */
    id: string;

    /**
     * The ID of the project this version is for.
     */
    project_id: string;

    /**
     * The ID of the author who published this version.
     */
    author_id: string;

    /**
     * The date this version was published.
     */
    date_published: Date;

    /**
     * The number of times this version has been downloaded.
     */
    downloads: number;

    /**
     * A link to the changelog for this version. Always `null`, only kept for legacy compatibility.
     */
    changelog_url: null;

    /**
     * A list of files available for download for this version.
     */
    files: RESTVersionFiles;
};

export type RESTVersionTypeOptions =
    | "release"
    | "beta"
    | "alpha";

export type RESTVersionStatusOptions =
    | "listed"
    | "archived"
    | "draft"
    | "unlisted"
    | "scheduled"
    | "unknown";

export type RESTVersionRequestedStatusOptions =
    | "listed"
    | "archived"
    | "draft"
    | "unlisted";


export type RESTVersionFiles = RESTVersionFile[];

export type RESTVersionFile = {
    /**
     * A map of hashes of the file.
     * 
     * The key is the hashing algorithm, and the value is the string version of the hash.
     */
    hashes: RESTVersionFileHashes;

    /**
     * A direct link to the file.
     */
    url: string;

    /**
     * The name of the file.
     */
    filename: string;

    /**
     * Whether this file is the primary one for its version.
     * 
     * Only a maximum of one file per version will have this set to true. If there are not any primary files, it can be inferred that the first file is the primary one.
     */
    primary: boolean;

    /**
     * The size of the file in bytes.
     */
    size: number;

    /**
     * The type of the additional file, used mainly for adding resource packs to datapacks.
     */
    file_type: RESTVersionFileTypeOptions | null;
};

export type RESTVersionFileHashes = {
    /**
     * The sha512 hash string for this file.
     */
    sha512: string;

    /**
     * The sha1 hash string for this file.
     */
    sha1: string;
};

export type RESTVersionFileTypeOptions =
    | "required-resource-pack"
    | "optional-resource-pack";

export type RESTVersionDependency = {
    /**
     * The ID of the version that this version depends on.
     */
    version_id: string | null;

    /**
     * The ID of the project that this version depends on.
     */
    project_id: string | null;

    /**
     * The file name of the dependency, mostly used for showing external dependencies on modpacks.
     */
    file_name: string | null;

    /**
     * The type of dependency that this version has.
     */
    dependency_type: RESTDependencyTypeOptions;
};

export type RESTVersionDependencies = RESTVersionDependency[];

export type RESTDependencyTypeOptions =
    | "requiored"
    | "optional"
    | "incompatible"
    | "embedded";