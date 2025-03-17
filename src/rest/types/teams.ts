import { NumberRange } from ".";
import { RESTUser } from "./users";

export type RESTTeamMembers = RESTTeamMember[];

export type RESTTeams = RESTTeamMembers[];

export type RESTTeamMember = {
    /**
     * The ID of the team this team member is a member of.
     */
    team_id: string;

    /**
     * The user for this team member.
     */
    user: RESTUser;

    /**
     * The user’s role on the team.
     */
    role: string;

    /**
     * The user’s permissions in bitfield format.
     *
     * In order from first to tenth bit, the current bits are:
     * - `UPLOAD_VERSION`: `1n << 0n`
     * - `DELETE_VERSION`: `1n << 1n`
     * - `EDIT_DETAILS`: `1n << 2n`
     * - `EDIT_BODY`: `1n << 3n`
     * - `MANAGE_INVITES`: `1n << 4n`
     * - `REMOVE_MEMBER`: `1n << 5n`
     * - `EDIT_MEMBER`: `1n << 6n`
     * - `DELETE_PROJECT`: `1n << 7n`
     * - `VIEW_ANALYTICS`: `1n << 8n`
     * - `VIEW_PAYOUTS`: `1n << 9n`
     * 
     * @ Note: Requires authorization to view.
     */
    permissions: number;

    /**
     * Whether or not the user has accepted to be on the team.
     * 
     * @ Note: Requires authorization to view.
     */
    accepted: boolean;

    /**
     * The split of payouts going to this user.
     * 
     * The proportion of payouts they get is their split divided by the sum of the splits of all members.
     */
    payouts_split: NumberRange<1, 101>;

    /**
     * The order of the team member.
     */
    ordering: number;
};