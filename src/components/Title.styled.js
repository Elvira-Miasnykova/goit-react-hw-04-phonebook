import styled from '@emotion/styled';

export const Header = styled.h1`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[6]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Title = styled.h2`
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[5]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
`;