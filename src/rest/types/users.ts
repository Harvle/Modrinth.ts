export type RESTUsers = RESTUser[];

export type RESTUser = {
    /**
     * The user’s username.
     */
    username: string;

    /**
     * The user’s display name.
     */
    name: string | null;

    /**
     * The user’s email.
     * 
     * @ Only displayed if requesting your own account.
     * @ Requires `USER_READ_EMAIL` PAT scope.
     */
    email: string | null;

    /**
     * A description of the user.
     */
    bio: string;

    /**
     * Various data relating to the user’s payouts status.
     * 
     * @ Only displayed if requesting your own account.
     */
    payout_data: RESTUserPayoutData | null;

    /**
     * The user’s ID.
     */
    id: string;

    /**
     * The user’s avatar url.
     */
    avatar_url: string;

    /**
     * The time at which the user was created.
     */
    created: Date;

    /**
     * The user’s role.
     */
    role: RESTUserRoleOptions;

    /**
     * Any badges applicable to this user.
     *
     * In order from first to seventh bit, the current bits are:
     * - (unused): `1n << 0n`
     * - `EARLY_MODPACK_ADOPTER`: `1n << 1n`
     * - `EARLY_RESPACK_ADOPTER`: `1n << 2n`
     * - `EARLY_PLUGIN_ADOPTER`: `1n << 3n`
     * - `ALPHA_TESTER`: `1n << 4n`
     * - `CONTRIBUTOR`: `1n << 5n`
     * - `TRANSLATOR`: `1n << 6n`
     * 
     * @ These are currently unused and undisplayed, and as such are subject to change.
     */
    badges: number;

    /**
     * A list of authentication providers you have signed up for.
     * 
     * @ Only displayed if requesting your own account.
     */
    auth_providers: string[] | null;

    /**
     * Whether your email is verified.
     * 
     * @ Only displayed if requesting your own account.
     */
    email_verified: boolean | null;

    /**
     * Whether you have a password associated with your account.
     * 
     * @ Only displayed if requesting your own account.
     */
    has_password: boolean | null;

    /**
     * Whether you have TOTP two-factor authentication connected to your account.
     * 
     * @ Only displayed if requesting your own account.
     */
    has_totp: boolean | null;

    /**
     * @deprecated
     * This is no longer public for security reasons and is always `null`.
     */
    github_id: null;
};

export type RESTUserPayoutData = {
    /**
     * The payout balance available for the user to withdraw. 
     * 
     * @ You cannot modify this in a `PATCH` request.
     */
    balance: number;

    /**
     * The wallet that the user has selected.
     */
    payout_wallet: RESTUserPayoutWalletOptions;

    /**
     * The type of the user’s wallet.
     */
    payout_wallet_type: RESTUserPayoutWalletTypeOptions;

    /**
     * The user’s payout address.
     */
    payout_address: string;
};

export type RESTUserPayoutWalletOptions =
    | "paypal"
    | "venmo";

export type RESTUserPayoutWalletTypeOptions =
    | "email"
    | "phone"
    | "user_handle";

export type RESTUserRoleOptions =
    | "admin"
    | "moderator"
    | "developer";

export type RESTUserPayoutHistory = {
    /**
     * The all-time balance accrued by this user in USD.
     */
    all_time: number;

    /**
     * The amount in USD made by the user in the previous 30 days.
     */
    last_month: number;

    /**
     * A history of all of the user’s past transactions.
     */
    payouts: RESTUserPayouts;
};

export type RESTUserPayouts = RESTUserPayout[];

export type RESTUserPayout = {
    /**
     * The date of this transaction.
     */
    created: Date;

    /**
     * The amount of this transaction in USD.
     */
    amount: number;

    /**
     * The status of this transaction.
     */
    status: string;
};