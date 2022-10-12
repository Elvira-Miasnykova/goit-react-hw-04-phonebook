import styled from '@emotion/styled';

export const ContactItem = styled.li`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    display: flex;
    align-items: center;
`;

export const ContactDescription = styled.p`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-right: ${p => p.theme.space[4]}px;
`;

export const ContactButton = styled.button`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    padding-left: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[1]}px;
    padding-top: ${p => p.theme.space[1]}px;
    margin-right: ${p => p.theme.space[0]}px;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    cursor: pointer;
    margin-left: auto;
`;