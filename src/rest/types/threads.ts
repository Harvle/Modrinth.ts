import type { RESTProjectStatusOptions } from "./projects";
import type { RESTUsers } from "./users";

export type RESTReports = RESTReport[];

export type RESTReport = {
    /**
     * The type of the report being sent.
     */
    report_type: string;

    /**
     * The ID of the item (project, version, or user) being reported.
     */
    item_id: string;

    /**
     * The type of the item being reported.
     */
    item_type: RESTReportItemTypeOptions;

    /**
     * The extended explanation of the report.
     */
    body: string;

    /**
     * The ID of the report.
     */
    id: string;

    /**
     * The ID of the user who reported the item.
     */
    reporter: string;

    /**
     * The time at which the report was created.
     */
    created: Date;

    /**
     * Whether the report is resolved.
     */
    closed: boolean;

    /**
     * The ID of the moderation thread associated with this report.
     */
    thread_id: string;
};

export type RESTReportItemTypeOptions =
    | "project"
    | "user"
    | "version";

export type RESTThreads = RESTThread[];

export type RESTThread = {
    /**
     * The ID of the thread.
     */
    id: string;

    /**
     * The type of thread.
     */
    type: RESTThreadMessageTypeOptions;

    /**
     * The ID of the associated project if a project thread.
     */
    project_id: string | null;

    /**
     * The ID of the associated report if a report thread.
     */
    report_id: string | null;

    /**
     * List of messages in this thread.
     */
    messages: RESTThreadMessages;

    /**
     * List of members part of this thread.
     */
    members: RESTUsers;
};

export type RESTThreadMessageTypeOptions =
    | "project"
    | "report"
    | "direct_message";

export type RESTThreadMessages = RESTThreadMessage[];

export type RESTThreadMessage = {
    /**
     * The ID of the message itself.
     */
    id: string;

    /**
     * The ID of the author.
     */
    author_id: string | null;

    /**
     * The contents of the message.
     * 
     * @ Fields will vary depending on message type.
     */
    body: RESTThreadMessageBody;

    /**
     * The time at which the message was created.
     */
    created: Date;
};

export type RESTThreadMessageBody =
    | RESTThreadMessageBodyStatusChange
    | RESTThreadMessageBodyThreadClosure
    | RESTThreadMessageBodyText
    | RESTThreadMessageBodyDeleted;

export interface RESTThreadMessageBodyBase {
    /**
     * The type of message.
     */
    type: RESTThreadMessageBodyTypeOptions;
};

export interface RESTThreadMessageBodyThreadClosure extends RESTThreadMessageBodyBase {
    type: "thread_closure";
};

export interface RESTThreadMessageBodyDeleted extends RESTThreadMessageBodyBase {
    type: "deleted";
};

// Override 
export interface RESTThreadMessageBodyText extends RESTThreadMessageBodyBase {
    type: "text";
    /**
     * The actual message text.
     * 
     * @ Only present for `text` message type.
     */
    body: string;

    /**
     * Whether the message is only visible to moderators.
     * 
     * @ Only present for `text` message type.
     */
    private: boolean;

    /**
     * The ID of the message being replied to by this message.
     * 
     * @ Only present for `text` message type.
     */
    replying_to: string | null;
};

export interface RESTThreadMessageBodyStatusChange extends RESTThreadMessageBodyBase {
    type: "status_change";
    /**
     * The old status of the project.
     * 
     * @ Only present for `status_change` message type.
     */
    old_status: RESTProjectStatusOptions;

    /**
     * The new status of the project.
     * 
     * @ Only present for `status_change` message type.
     */
    new_status: RESTProjectStatusOptions;
};

export type RESTThreadMessageBodyTypeOptions =
    | "status_change"
    | "text"
    | "thread_closure"
    | "deleted";