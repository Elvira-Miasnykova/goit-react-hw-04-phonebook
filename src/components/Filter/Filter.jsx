import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { LabelStyled, InputStyled } from "./Filter.styled";

export const Filter = ({value, onChange}) => {
    return (
        <Box mb={4}>
            <LabelStyled>
                Find contacts by name
                <InputStyled type="text" value={value} onChange={onChange}/>
            </LabelStyled>
        </Box>
    )
};

Filter.prototype = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};