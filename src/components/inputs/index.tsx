import styled from "styled-components";

export const WrepperInput = styled.div<{$width: string}>`
    width: ${props => props.$width};
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const StyleInput = styled.input`
    width: 100%;
    height: 28px;
    border-radius: 4px;
    font-size: 18px;

    &:focus{
        border-color: ${({theme})=>theme.color.primary};
    };
`
export const StyleError = styled.p`
    margin: 0;
    color: red;
`

type PropsInput = {
    $type: string,
    error: string,
    $label: string,
    $width: string,
    $name: string,
    $value: string,
    $onChange: (e: any, checked: boolean) => void
}

export const Input = (props : PropsInput ) => {
    return (
        <WrepperInput $width={props.$width}>
            <label htmlFor={props.$name}>
                {props.$label}
            </label>
             <StyleInput
                type = {props.$type}
                name = {props.$name}
                value={props.$value}
                onChange={(e) => props.$onChange(e.target.value, true)}

             />
             <StyleError>{props.error}</StyleError>
        </WrepperInput>
       
    )
}