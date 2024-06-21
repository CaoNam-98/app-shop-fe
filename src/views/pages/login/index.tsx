// ** Import Next
import { NextPage } from 'next'
// ** Import Mui
import { Button, Checkbox, FormControlLabel, Grid, Link, Box, Container, CssBaseline, Typography } from '@mui/material'
// ** Component
import CustomTextField from 'src/components/text-field'
// ** form
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { EMAIL_REG } from 'src/configs/regex'

type TProps = {}

const LoginPage: NextPage<TProps> = () => {
  // defind type, đưa báo lỗi vào .required()
  const schema = yup
    .object({
      email: yup.string().required('The field is required').matches(EMAIL_REG, "The field is must email type"),
      password: yup.string().required('The field is required')
    })
    .required()

  // Sử dụng use-form-hook và yup để thực hiện validate: https://www.react-hook-form.com/api/useform/
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur', // khi blur ra ngoài thì show error
    resolver: yupResolver(schema)
  })

  console.log('errors', { errors })

  const onSubmit = (data: { email: string; password: string }) => {
    console.log('data: ', { data, errors })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
          <Box>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextField
                  required
                  fullWidth
                  label='Email'
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Input email'
                  error={Boolean(errors?.email)}
                />
              )}
              name='email'
            />
            {errors.email && <Typography>{errors?.email?.message}</Typography>}
          </Box>

          <Box>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextField
                  required
                  fullWidth
                  label='Password'
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Input password'
                  error={Boolean(errors?.password)}
                />
              )}
              name='password'
            />
            {errors.password && <Typography>{errors?.password}</Typography>}
          </Box>
          <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default LoginPage
