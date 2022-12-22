
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateDonationInput {
    count: number;
    display_name: string;
    email: string;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    message?: Nullable<string>;
    create_at?: Nullable<DateTime>;
    update_at?: Nullable<DateTime>;
}

export class UpdateDonationInput {
    id: number;
}

export class Donation {
    id: number;
    count: number;
    display_name: string;
    email: string;
    mobile?: Nullable<string>;
    team?: Nullable<string>;
    message?: Nullable<string>;
    create_at?: Nullable<DateTime>;
    update_at?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract donations(): Nullable<Donation>[] | Promise<Nullable<Donation>[]>;

    abstract donation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;
}

export abstract class IMutation {
    abstract createDonation(createDonationInput: CreateDonationInput): Donation | Promise<Donation>;

    abstract updateDonation(updateDonationInput: UpdateDonationInput): Donation | Promise<Donation>;

    abstract removeDonation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
