import styled from '@emotion/styled';

export const LabelStyled = styled.label`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    display: block;
    text-align: left;
`;

export const InputStyled = styled.input`
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.black};
    border-radius: ${p => p.theme.radii.normal};
    width: 60%;
    height: ${p => p.theme.space[5]}px;
    :hover{
        border-color: ${p => p.theme.colors.accent};
    };
`;