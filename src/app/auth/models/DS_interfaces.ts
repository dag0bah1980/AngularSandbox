export interface DS_Sample {
    ID: number;
    CREATED: string;
    MODIFIED: string;
    CREATEDBY: number;
    MODIFIEDBY: number;
    ISACTIVE: boolean;
    ISDELETED: boolean;
    CODE: string;
    NAME: string;
    DESCRIPTION: string;
    SAMPLEFLOAT: number;
    SAMPLEINTEGER: number;
    SAMPLEDATE: Date;
    SAMPLETIME: string;
    SEVERITY: number;
    PRIORITY: number;
    MEMO: string;
}

export interface DS_SampleDropDown{
    ID: number,
    CODE: string,
    NAME: string,
    DESCRIPTION?: string
}

export interface Priority {
    ID: number;
    CREATED: string;
    MODIFIED: string;
    CREATEDBY: number;
    MODIFIEDBY: number;
    ISACTIVE: boolean;
    ISDELETED: boolean;
    CODE: string;
    NAME: string;
    DESCRIPTION: string;
    ORDERVALUE: number;
}

export interface PriorityDropDown{
    ID: number,
    CODE: string,
    NAME: string,
    DESCRIPTION?: string
}

export interface Severity {
    ID: number;
    CREATED: string;
    MODIFIED: string;
    CREATEDBY: number;
    MODIFIEDBY: number;
    ISACTIVE: boolean;
    ISDELETED: boolean;
    CODE: string;
    NAME: string;
    DESCRIPTION: string;
    ORDERVALUE: number;
}

export interface SeverityDropDown{
    ID: number,
    CODE: string,
    NAME: string,
    DESCRIPTION?: string
}

export interface GenericDropDown{
    ID: number,
    CODE: string,
    NAME: string,
    DESCRIPTION?: string
}