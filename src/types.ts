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
    color? : string;
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
    lineHeight?: string;
    value: string | undefined;
    handleChange : (key:string,value:string | undefined)=> void
    showErrorText? : string
}

export interface IBoxProps {
    children : React.ReactNode;
    height? : string;
    width?: string;
    gap?:string;
}

export interface IContainerProps {
    children : React.ReactNode;
    btnText : string;
    handleClick : ()=> void;
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
    width?: string;
    selectedValue : string;
    handleChange : (key:string,value:string | undefined)=> void
}


export interface IButtonProps  {
    children : React.ReactNode ;
    color? : string;
    height?: string;
    width ?: string;
    borderRadius? : string;
    padding ?: string;
    gap ?: string;
    border? : string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    fontFamily? : string;
    backgroundColor? : string;
    handleClick : () => void;
}

export interface ILogoImageProps {
    logoImage?: string;
    height? :  string;
    width? : string;
    altText? : string;
    borderRadius? : string
}

export interface ICardProps {
    id ?: string,
jobTitle : string;
companyName : string;
industry : string;
location?: string;
remoteType? : string;
minExperience? : string;
maxExperience ? : string;
minSalary? : string;
maxSalary? : string;
totalEmployee? : string;
applyType? : string;
}

export interface ICardDescription {
    children : React.ReactNode;
    height ?: string ;
    fontSize? : string;
    fontWeight? : string;
    lineHeight ? : string;
    color?: string;
    fontFamily? : string
}

export interface IViewJobsProps {
    jobsData : {}[],
    handleDelete : (id:string)=> void;
    handleEdit : (id:string)=> void;
}

export interface IJobListingProps {
    id?: string;
    jobTitle: string;
    industry: string;
    companyName: string;
    maxExperience?: string;
    minExperience?: string;
    location?: string;
    remoteType?: string;
    maxSalary?: string;
    minSalary?: string;
    totalEmployee?: string;
    applyType?: string;
  }

  export interface IErrorProps {
    jobTitle: string;
    industry: string;
    companyName: string; 
  }

