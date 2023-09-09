export interface ILabelProps {
    labelText : string;
    htmlFor : string;
    isRequired? : boolean;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    fontFamily? : string;
    height? : string;
    width?: string;
    gap?:string;
}

export interface IInputProps {
    type : string;
    name : string;
    id : string;
    placeholder?: string;
    defaultValue? : string;
    color? : string;
    height?: string;
    width ?: string;
    borderRadius? : string;
    padding ?: string;
    gap ?: string;
    border? : string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;}

export interface IBoxProps {
    children : React.ReactNode;
    height? : string;
    width?: string;
    gap?:string;
}

export interface IContainerProps {
    children : React.ReactNode;
    btnText : string
}

export interface IHeaderProps {
headerLabel : string;
stepCount : number
}

export interface IRadioProps {
    label : string;
    name : string;
    id : string;
    htmlFor : string;
    height ? : string;
    width?: string
}

export interface IFormProps {
stepCount : number;
}