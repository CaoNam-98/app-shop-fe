// ** Mui Imports
import { TextFieldProps, TextField, styled } from '@mui/material'

const TextFieldStyled = styled(TextField)<TextFieldProps>(({theme}) => {
    console.log("theme 3: ", {theme});
    
    return {
        "& .MuiFormLabel-root": {
            transform: "none",
            lineHeight: 1.2,
            position: "relative",
            marginBottom: theme.spacing(1),
            fontSize: theme.typography.body2.fontSize
        },
        "& .MuiInputBase-root": {
            borderRadius: 8,
            backgroundColor: "transparent !important",
            border: `1px solid rgba(${theme.palette.customColors.main}, 0.2)`,
            transition: theme.transitions.create(['border-color', 'box-shadow'], {
                duration: theme.transitions.duration.shorter
            }),

            "&:before, &:after": {
                display: "none"
            }
        },
        "& .MuiInputBase-input": {
            padding: "8px 10px",
        }
    }
})

const CustomTextField = (props: TextFieldProps) => {
  const { size = 'small', InputLabelProps, variant = 'filled', ...rests } = props

  // InputLabelProps là prop của label
  return <TextFieldStyled size={size} variant={variant} InputLabelProps={{ ...InputLabelProps }} {...rests} />
}

export default CustomTextField
